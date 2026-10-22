import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (file) => readFile(path.join(root, file), 'utf8');

test('all long-form route families render relevant hero or cover artwork', async () => {
  const [services, service, about, blog, research, visual] = await Promise.all([
    read('app/services/page.tsx'),
    read('app/services/[slug]/page.tsx'),
    read('app/about/page.tsx'),
    read('app/blog/[slug]/page.tsx'),
    read('app/research/[slug]/page.tsx'),
    read('app/visual/[slug]/route.ts'),
  ]);

  assert.match(services, /src="\/visual\/services"/);
  assert.match(about, /src="\/visual\/about"/);
  assert.match(service, /src=\{`\/visual\/service-\$\{service\.slug\}`\}/);
  assert.match(blog, /post\.thumbnail \?\? `\/visual\/blog-\$\{post\.slug\}`/);
  assert.match(research, /post\.thumbnail \?\? `\/visual\/research-\$\{post\.slug\}`/);
  assert.doesNotMatch(blog, /\{post\.thumbnail &&/);
  assert.doesNotMatch(research, /\{post\.thumbnail &&/);
  for (const prefix of ['service-', 'blog-', 'research-']) assert.ok(visual.includes(`slug.startsWith('${prefix}')`));
  assert.match(visual, /<title id="title">/);
  assert.match(visual, /<desc id="desc">/);
});

test('visual labels and ordered navigation avoid decorative leading-zero treatments', async () => {
  const [marketing, editorial] = await Promise.all([
    read('components/marketing/marketing.css'),
    read('app/blog/editorial.module.css'),
  ]);
  assert.doesNotMatch(marketing, /counter\([^)]*decimal-leading-zero/);
  assert.doesNotMatch(editorial, /counter\([^)]*decimal-leading-zero/);
  assert.match(marketing, /\.mortgage-route-visual/);
  assert.match(marketing, /\.mortgage-launch-list li::marker/);
  assert.match(editorial, /\.toc li::marker/);
});

test('site mark is shared by visible chrome and framework favicon', async () => {
  const [visibleLogo, favicon, chrome] = await Promise.all([
    read('public/logo.svg'),
    read('app/icon.svg'),
    read('components/SiteChrome.tsx'),
  ]);
  assert.equal(favicon.trim(), visibleLogo.trim());
  assert.match(chrome, /src="\/logo\.svg"/);
});

test('application publishes security headers compatible with tracking and OnceHub', async () => {
  const config = await read('next.config.mjs');
  for (const header of [
    'Content-Security-Policy',
    'Strict-Transport-Security',
    'X-Content-Type-Options',
    'X-Frame-Options',
    'Referrer-Policy',
    'Permissions-Policy',
  ]) assert.ok(config.includes(header), `missing ${header}`);
  assert.match(config, /script-src 'self' 'unsafe-inline' https:\/\/acrtracking\.stealthagents\.us/);
  assert.match(config, /frame-src https:\/\/go\.oncehub\.com/);
  assert.match(config, /frame-ancestors 'none'/);
});

test('proxy canonicalizes production traffic to HTTPS apex and preserves path and query', async () => {
  const proxy = await read('proxy.ts');
  assert.match(proxy, /https:\/\/homeloanprocessors\.com/);
  assert.match(proxy, /www\.homeloanprocessors\.com/);
  assert.match(proxy, /x-forwarded-proto/);
  assert.match(proxy, /cf-visitor/);
  assert.match(proxy, /NextResponse\.redirect\(destination, 308\)/);
  assert.match(proxy, /destination\.pathname/);
  assert.match(proxy, /destination\.search = request\.nextUrl\.search/);
});
