import fs from 'node:fs';
import crypto from 'node:crypto';
import { execFileSync, spawnSync } from 'node:child_process';

const fail=(message)=>{throw new Error(message)};
const read=(path)=>fs.readFileSync(path,'utf8');
const parse=(text,pattern,label)=>{const match=text.match(pattern);if(!match)fail(`cannot parse ${label}`);return JSON.parse(match[1])};
const manifest=JSON.parse(read('publishing/2026-10-13/manifest.json'));
const blogSource=read('lib/oct13BlogBatch.ts');
const researchSource=read('lib/oct13ResearchBatch.ts');
const blogs=parse(blogSource,/export const oct13BlogBatch: readonly BlogPost\[\] = ([\s\S]*?);\n$/,'Blog batch');
const research=parse(researchSource,/export const oct13ResearchBatch: readonly ResearchPost\[\] = ([\s\S]*?);\n$/,'Research batch');
const all=[...blogs.map(item=>({...item,kind:'blog'})),...research.map(item=>({...item,kind:'research'}))];

if(manifest.site!=='HomeLoanProcessors.com'||manifest.canonicalDomain!=='https://homeloanprocessors.com'||manifest.repository!=='coolifystealthagents/home-loan-processors'||manifest.branch!=='main')fail('site identity mismatch');
if(manifest.date!=='2026-10-13'||manifest.baseSha!=='15df7ba1820f3a2b0f8ada3e650aa8c7038999f9')fail('date or immutable base mismatch');
if(blogs.length!==12||research.length!==5||manifest.items.length!==17)fail('expected exactly 12 Blog and 5 Research');
if(new Set(all.map(x=>x.slug)).size!==17||new Set(all.map(x=>x.title)).size!==17)fail('duplicate slug or title');
if(all.some(x=>/\b(?:2026|oct(?:ober)?\s+13|10[-/]13)\b/i.test(x.title)))fail('date-bearing title');

const wiring={content:read('lib/content.ts'),blogIndex:read('app/blog/page.tsx'),blogDetail:read('app/blog/[slug]/page.tsx'),researchIndex:read('app/research/page.tsx'),researchDetail:read('app/research/[slug]/page.tsx'),sitemap:read('app/sitemap.ts')};
if(!wiring.content.includes("import { oct13BlogBatch } from './oct13BlogBatch'")||!wiring.content.includes('...oct13BlogBatch'))fail('Blog registry missing');
if(!wiring.content.includes("import { oct13ResearchBatch } from './oct13ResearchBatch'")||!wiring.content.includes('...oct13ResearchBatch'))fail('Research registry missing');
if(!wiring.blogIndex.includes('Published {formatDate(post.publishedAt)}')||!wiring.blogDetail.includes('Published {formatDate(post.publishedAt)}'))fail('visible Blog dates missing');
if(!wiring.researchIndex.includes('Published {formatDate(post.publishedAt)}')||!wiring.researchDetail.includes('Published {formatDate(post.publishedAt)}'))fail('visible Research dates missing');
if(!wiring.blogDetail.includes('Related articles')||!wiring.blogDetail.includes('A practical next step'))fail('Blog related/sidebar system missing');
if(!wiring.researchDetail.includes('Related research')||!wiring.researchDetail.includes('Continue the evidence review'))fail('Research related/sidebar system missing');
if(!wiring.sitemap.includes('blogPosts.map')||!wiring.sitemap.includes('researchPosts.map'))fail('sitemap registry routes missing');

const allowed=new Set(['www.consumerfinance.gov','www.ecfr.gov','www.ffiec.gov','www.hud.gov','selling-guide.fanniemae.com','guide.freddiemac.com','www.nist.gov','www.ftc.gov','benefits.va.gov']);
const hashes=new Set();
const paragraphs=[];
for(const item of all){
  const entry=manifest.items.find(x=>x.slug===item.slug&&x.title===item.title&&x.kind===item.kind);
  const floor=item.kind==='research'?3400:3000;
  if(!entry||entry.wordCount<floor)fail(`manifest or depth failed: ${item.slug} (${entry?.wordCount})`);
  if(item.publishedAt!=='2026-10-13'||entry.publicationDate!=='2026-10-13')fail(`publication date failed: ${item.slug}`);
  const escaped=item.slug.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
  const collision=spawnSync('git',['grep','-E',`["']${escaped}["']`,manifest.baseSha,'--','app','lib'],{encoding:'utf8'});
  if(collision.status===0)fail(`slug collision with immutable base: ${item.slug}`);
  const escapedTitle=item.title.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
  const titleCollision=spawnSync('git',['grep','-E',`["']${escapedTitle}["']`,manifest.baseSha,'--','app','lib'],{encoding:'utf8'});
  if(titleCollision.status===0)fail(`title collision with immutable base: ${item.title}`);
  if(!fs.existsSync(entry.thumbnailPath))fail(`thumbnail missing: ${item.slug}`);
  const svg=read(entry.thumbnailPath);
  const exactTitle=item.title.replaceAll('&','&amp;');
  if(!svg.includes('width="1200" height="630"')||!svg.includes(`<title id="title">${exactTitle}</title>`))fail(`thumbnail contract failed: ${item.slug}`);
  if(/October 13|2026-10-13/i.test(svg))fail(`dated thumbnail: ${item.slug}`);
  hashes.add(crypto.createHash('sha256').update(svg).digest('hex'));
  for(const section of item.sections??[])for(const paragraph of section.paragraphs)paragraphs.push({slug:item.slug,raw:paragraph});
}
if(hashes.size!==17)fail('thumbnails are not 17 unique native files');

for(const item of research){
  if(item.sources?.length!==10||new Set(item.sources.map(x=>x.url)).size!==10)fail(`Research source depth failed: ${item.slug}`);
  for(const source of item.sources){const url=new URL(source.url);if(url.protocol!=='https:'||!allowed.has(url.hostname))fail(`non-authoritative source: ${source.url}`)}
  if(!item.sections.some(section=>section.paragraphs.some(p=>p.startsWith('Limitations.'))))fail(`Research limitations missing: ${item.slug}`);
}

const seen=new Map();
for(const paragraph of paragraphs){
  const normalized=paragraph.raw.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
  if(normalized.split(' ').length<25)continue;
  if(seen.has(normalized))fail(`duplicate substantive paragraph: ${seen.get(normalized)} and ${paragraph.slug}`);
  seen.set(normalized,paragraph.slug);
}
const priorFiles=execFileSync('git',['ls-tree','-r','--name-only',manifest.baseSha,'--','lib'],{encoding:'utf8'}).trim().split('\n').filter(path=>/\.(?:ts|tsx|md|mdx)$/.test(path));
const priorCorpus=priorFiles.map(path=>{try{return execFileSync('git',['show',`${manifest.baseSha}:${path}`],{encoding:'utf8',maxBuffer:16*1024*1024})}catch{return ''}}).join('\n');
for(const paragraph of paragraphs)if(priorCorpus.includes(paragraph.raw))fail(`paragraph duplicates immutable base: ${paragraph.slug}`);

console.log(JSON.stringify({status:'PASS',date:manifest.date,blog:blogs.length,research:research.length,minBlogWords:Math.min(...manifest.items.filter(x=>x.kind==='blog').map(x=>x.wordCount)),minResearchWords:Math.min(...manifest.items.filter(x=>x.kind==='research').map(x=>x.wordCount)),researchHttpsSources:research.reduce((sum,x)=>sum+x.sources.length,0),uniqueExactTitleThumbnails:hashes.size,duplicateSubstantiveParagraphs:0,immutableBaseCollisions:0,visibleDates:true,separateSystems:true,registryRoutesSidebarRelatedSitemap:true},null,2));
