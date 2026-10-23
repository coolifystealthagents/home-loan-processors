import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (file) => readFile(path.join(root, file), 'utf8');

const expectedSlugs = [
  'borrower-document-support',
  'loan-file-indexing',
  'pipeline-records',
  'borrower-follow-up',
  'condition-tracking-support',
  'closing-preparation',
];

test('all six mortgage service records contain the complete role brief contract', async () => {
  const source = await read('lib/site.ts');
  const serviceSource = source.slice(source.indexOf('export const site'));
  const foundSlugs = [...serviceSource.matchAll(/slug: '([^']+)'/g)].map((match) => match[1]);
  assert.deepEqual(foundSlugs, expectedSlugs);

  for (const inherited of ['launchSteps', 'boundaries', 'faq']) {
    assert.match(source, new RegExp(`${inherited}: input\\.${inherited} \\?\\?`), `service factory must supply ${inherited}`);
  }
  assert.ok((source.slice(source.indexOf('const sharedFaq'), source.indexOf('function service')).match(/question:/g) ?? []).length >= 3);

  for (const [index, slug] of expectedSlugs.entries()) {
    const start = serviceSource.indexOf(`slug: '${slug}'`);
    const end = index + 1 < expectedSlugs.length ? serviceSource.indexOf(`slug: '${expectedSlugs[index + 1]}'`) : serviceSource.length;
    const record = serviceSource.slice(start, end);
    for (const field of ['short', 'outcome', 'idealFor', 'tasks', 'clientInputs', 'outputs', 'qualityControls', 'relatedRoles', 'relatedContent']) {
      assert.match(record, new RegExp(`\\b${field}:`), `${slug} is missing ${field}`);
    }
  }
});

test('service template renders every required decision-ready section and CTA', async () => {
  const page = await read('app/services/[slug]/page.tsx');
  for (const marker of ['Ideal use cases', 'Responsibilities', 'Inputs and outputs', 'Quality controls', 'Decision boundaries', 'Launch workflow', 'Frequently asked questions', 'Related roles and field notes', 'Plan a workflow consultation']) {
    assert.ok(page.includes(marker), `service template is missing ${marker}`);
  }
  for (const binding of ['service.idealFor', 'service.tasks', 'service.clientInputs', 'service.outputs', 'service.qualityControls', 'service.boundaries', 'service.launchSteps', 'service.faq', 'service.relatedRoles', 'service.relatedContent']) {
    assert.ok(page.includes(binding), `service template does not render ${binding}`);
  }
});

test('mortgage marketing system is imported, responsive, and avoids disallowed treatments', async () => {
  const [home, about, services, service, css] = await Promise.all([
    read('components/Marketing.tsx'),
    read('app/about/page.tsx'),
    read('app/services/page.tsx'),
    read('app/services/[slug]/page.tsx'),
    read('components/marketing/marketing.css'),
  ]);
  for (const route of [home, about, services, service]) assert.match(route, /marketing\/marketing\.css/);
  assert.match(css, /@media\(max-width:800px\)/);
  assert.match(css, /@media\(max-width:520px\)/);
  assert.match(css, /prefers-reduced-motion:reduce/);
  assert.doesNotMatch(css, /(?:linear|radial|conic)-gradient\s*\(/i);
  assert.doesNotMatch(home, /service-number/);
});

test('original mortgage illustration has accessible text alternatives', async () => {
  const [site, svg] = await Promise.all([read('lib/site.ts'), read('public/images/mortgage/operations-ledger.svg')]);
  assert.match(site, /heroImage: '\/images\/mortgage\/operations-ledger\.svg'/);
  assert.match(site, /heroAlt: '[^']{30,}'/);
  assert.match(svg, /role="img"/);
  assert.match(svg, /aria-labelledby="title desc"/);
  assert.match(svg, /<title id="title">[^<]+<\/title>/);
  assert.match(svg, /<desc id="desc">[^<]+<\/desc>/);
});

test('static and service routes own their canonicals and publish no invented email', async () => {
  const [about, services, detail, privacy, terms, thankYou, next] = await Promise.all([
    read('app/about/page.tsx'),
    read('app/services/page.tsx'),
    read('app/services/[slug]/page.tsx'),
    read('app/privacy/page.tsx'),
    read('app/terms/page.tsx'),
    read('app/thank-you/page.tsx'),
    read('app/thanks-whats-next/page.tsx'),
  ]);
  assert.match(about, /canonical: '\/about'/);
  assert.match(services, /canonical: '\/services'/);
  assert.match(detail, /canonical: `\/services\/\$\{service\.slug\}`/);
  assert.match(privacy, /canonical:\s*'\/privacy'/);
  assert.match(terms, /canonical:'\/terms'/);
  assert.match(thankYou, /canonical:'\/thank-you'/);
  assert.match(next, /canonical:'\/thanks-whats-next'/);
  assert.doesNotMatch(privacy, /hello@/);
  assert.match(privacy, /contact form/);
  assert.match(about, /Stealth Agents company/);
});

test('public claims, protocol labels, privacy disclosure, and accessible colors stay evidence-safe', async () => {
  const [home, contact, thankYou, research, blog, sidebar, chrome, privacy, leadForm, globals, editorial, marketing] = await Promise.all([
    read('components/Marketing.tsx'), read('app/contact-us/page.tsx'), read('app/thank-you/page.tsx'),
    read('app/research/[slug]/page.tsx'), read('app/blog/[slug]/page.tsx'), read('components/editorial/EditorialSidebar.tsx'),
    read('components/SiteChrome.tsx'), read('app/privacy/page.tsx'), read('components/LeadForm.tsx'),
    read('app/globals.css'), read('app/blog/editorial.module.css'), read('components/marketing/marketing.css'),
  ]);
  const publicCopy = [home, contact, thankYou, research, blog, sidebar, chrome, leadForm].join('\n');
  assert.doesNotMatch(publicCopy, /\bfree\b/i);
  assert.doesNotMatch(publicCopy, /trained remote support|Mortgage expertise|secure booking page/i);
  assert.match(research, /Protocol definition/);
  assert.doesNotMatch(research, /Key finding|Use the finding/i);
  for (const category of ['phone number', 'company', 'company website', 'company size', 'hiring', 'page URL', 'user agent']) {
    assert.match(privacy.toLowerCase(), new RegExp(category.toLowerCase()));
  }
  for (const processor of ['ACR', 'Mattermost', 'OnceHub']) assert.match(privacy, new RegExp(processor, 'i'));
  assert.doesNotMatch(globals, /#b38a34/i);
  assert.doesNotMatch(editorial, /#aa7e2f/i);
  assert.match(marketing, /mortgage-service-section[^}]*scroll-margin-top:\s*7rem/);
  assert.match(contact, /className="team-image">[\s\S]*?<Image[^>]+stealth-agents-team\.webp[^>]+alt="Stealth Agents managed service team in Bacolod"/);
});

test('legacy research is explicitly non-empirical and site metadata stays current', async () => {
  const [content, sitemap, marketing, globals, leadForm, october12, october13] = await Promise.all([
    read('lib/content.ts'), read('app/sitemap.ts'), read('components/marketing/marketing.css'), read('app/globals.css'), read('components/LeadForm.tsx'),
    read('lib/oct12ResearchBatch.ts'), read('lib/oct13ResearchBatch.ts'),
  ]);
  const legacy = content.match(/export const researchPosts: ResearchPost\[\] = \[\s*\.\.\.october22ResearchBatch,\s*\.\.\.oct13ResearchBatch,\s*\.\.\.oct12ResearchBatch,([\s\S]*?)\n\];/)?.[1] ?? '';
  assert.ok(legacy, 'legacy research records should remain machine-verifiable');
  assert.doesNotMatch(legacy, /"title":.*\b(study|audit|report)\b/i);
  assert.doesNotMatch(legacy, /The most useful control/i);
  const legacyPosts = JSON.parse(`[${legacy}]`);
  assert.equal(legacyPosts.length, 20);
  for (const post of legacyPosts) {
    assert.match(post.title, /^Non-empirical: /);
    assert.match(post.summary, /non-empirical operating hypothesis/i);
    assert.match(post.finding, /^Non-empirical operating hypothesis:/);
    assert.doesNotMatch(post.title, /\b(study|audit|report)\b/i);
  }
  assert.match(october12, /oct12ResearchBatch/);
  assert.match(october13, /oct13ResearchBatch/);
  assert.match(october12 + october13, /does not establish causation or a universal mortgage benchmark/i);
  assert.match(sitemap, /'\/privacy'/);
  assert.match(marketing, /mortgage-service-nav\{[^}]*top:7rem/);
  assert.match(globals, /:focus-visible\{outline:3px solid #742e2b/);
  assert.match(globals, /\.utility-strip[^}]*:focus-visible[^}]*outline-color:#e3bd69/);
  assert.match(globals, /\.mortgage-boundary a:focus-visible[^}]*outline-color:#e3bd69/);
  assert.match(globals, /\.mortgage-scope-note a:focus-visible[^}]*outline-color:#e3bd69/);
  assert.match(leadForm, /Request type/);
  assert.match(leadForm, /required=\{!privacyRequest\}/);
  assert.match(leadForm, /privacyRequest\s*&&/);
});
