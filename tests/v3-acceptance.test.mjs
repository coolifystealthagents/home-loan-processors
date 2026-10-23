import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (file) => readFile(path.join(root, file), 'utf8');

test('editorial articles use one populated sticky sidebar with an active complete TOC', async () => {
  const [toc, sidebar, blog, research, css] = await Promise.all([
    read('components/editorial/ArticleToc.tsx'),
    read('components/editorial/EditorialSidebar.tsx'),
    read('app/blog/[slug]/page.tsx'),
    read('app/research/[slug]/page.tsx'),
    read('app/blog/editorial.module.css'),
  ]);

  assert.match(toc, /aria-current=\{activeId === item\.id \? 'location'/);
  assert.match(toc, /addEventListener\('scroll'/);
  assert.match(sidebar, /<ArticleToc items=\{tocItems\} \/>/);
  for (const module of ['Article details', 'Publisher', 'Published', 'Review lens', 'Request a consultation']) {
    assert.ok(sidebar.includes(module), `sidebar is missing ${module}`);
  }
  assert.match(blog, /tocItems=\{tocItems\}/);
  assert.match(research, /tocItems=\{tocItems\}/);
  assert.match(css, /\.sidebar \{[\s\S]*?position: sticky/);
  assert.match(css, /\.activeTocItem a/);
  assert.match(css, /@media \(max-width: 720px\)[\s\S]*?\.sidebar \{[\s\S]*?position: static/);
});

test('service index provides substantial decision and conversion support', async () => {
  const services = await read('app/services/page.tsx');
  for (const marker of [
    'Match the first role to the evidence gap',
    'What a controlled launch needs',
    'The assistant adds capacity. The client keeps authority',
    'Plan the first conversation',
    'Bring one queue that needs a clearer owner',
  ]) assert.ok(services.includes(marker), `service index is missing ${marker}`);
  assert.match(services, /'@type': 'FAQPage'/);
});

test('contact credibility contract keeps official logo and Bacolod text in one plate', async () => {
  const contact = await read('app/contact-us/page.tsx');
  const reviews = JSON.parse(await read('lib/stealthAgentsReviews.json'));
  assert.equal(reviews.length, 10);
  assert.equal(new Set(reviews.map((review) => review.evidenceId)).size, 10);
  assert.match(contact, /className="official-logo-plate"><Image[^>]+stealth-agents-logo-black\.png[^>]+\/><span>Official team, Bacolod<\/span><\/div>/);
  assert.match(contact, /<h3>Review from \{review\.name\}<\/h3>/);
  assert.match(contact, /<h2 id="reviews-heading">StealthAgents reviews<\/h2>/);
});

test('dynamic content publishes route-specific social metadata and service schema', async () => {
  const [blog, research, service] = await Promise.all([
    read('app/blog/[slug]/page.tsx'),
    read('app/research/[slug]/page.tsx'),
    read('app/services/[slug]/page.tsx'),
  ]);
  for (const page of [blog, research, service]) {
    assert.match(page, /twitter:/);
    assert.match(page, /summary_large_image/);
    assert.match(page, /hero\.png/);
  }
  assert.match(service, /'@type': 'Service'/);
});

test('design registry records the site-specific fingerprint', async () => {
  const registry = JSON.parse(await read('design-registry.json'));
  const record = registry.find((item) => item.domain === 'homeloanprocessors.com');
  assert.ok(record);
  for (const field of ['designFamily', 'heroComposition', 'typeCharacter', 'paletteFamily', 'shapeGrammar', 'imageTreatment', 'sectionRhythm', 'navigationTreatment', 'motionSignature', 'signatureElement']) {
    assert.ok(record[field], `design registry is missing ${field}`);
  }
});
