import { blogBySlug, researchBySlug, serviceBySlug } from '@/lib/content';

type VisualRecord = {
  eyebrow: string;
  title: string;
  stages: [string, string, string];
};

const staticVisuals: Record<string, VisualRecord> = {
  services: {
    eyebrow: 'Mortgage operations support',
    title: 'Choose one workflow to stabilize first',
    stages: ['Source queue', 'Prepared record', 'Accountable review'],
  },
  about: {
    eyebrow: 'Responsible role design',
    title: 'Build capacity around visible boundaries',
    stages: ['Document the work', 'Define authority', 'Review evidence'],
  },
};

function recordFor(slug: string): VisualRecord | undefined {
  if (staticVisuals[slug]) return staticVisuals[slug];

  if (slug.startsWith('service-')) {
    const service = serviceBySlug(slug.slice('service-'.length));
    if (!service) return undefined;
    return {
      eyebrow: 'Specialist role brief',
      title: service.name,
      stages: ['Client inputs', 'Supported workflow', 'Review-ready output'],
    };
  }

  if (slug.startsWith('blog-')) {
    const post = blogBySlug(slug.slice('blog-'.length));
    if (!post) return undefined;
    return {
      eyebrow: post.category,
      title: post.title,
      stages: ['Current workflow', 'Documented handoff', 'Owner review'],
    };
  }

  if (slug.startsWith('research-')) {
    const post = researchBySlug(slug.slice('research-'.length));
    if (!post) return undefined;
    return {
      eyebrow: post.cluster,
      title: post.title,
      stages: ['Public source', 'Operating hypothesis', 'Local validation'],
    };
  }

  return undefined;
}

function escapeXml(value: string) {
  return value.replace(/[<>&'\"]/g, (character) => ({
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    "'": '&apos;',
    '"': '&quot;',
  })[character] ?? character);
}

function titleLines(value: string) {
  const words = value.replace(/^Non-empirical:\s*/i, '').split(/\s+/);
  const lines: string[] = [];
  let line = '';
  for (const word of words) {
    if (`${line} ${word}`.trim().length > 34 && line) {
      lines.push(line);
      line = word;
    } else {
      line = `${line} ${word}`.trim();
    }
    if (lines.length === 2) break;
  }
  if (lines.length < 3 && line) lines.push(line);
  if (words.join(' ').length > lines.join(' ').length) lines[2] = `${lines[2].replace(/[.,;:]?$/, '')}…`;
  return lines.slice(0, 3);
}

function hash(value: string) {
  return [...value].reduce((total, character) => ((total * 31) + character.charCodeAt(0)) >>> 0, 2166136261);
}

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const record = recordFor(slug);
  if (!record) return new Response('Not found', { status: 404 });

  const seed = hash(slug);
  const accentX = 915 + (seed % 90);
  const accentY = 105 + (seed % 110);
  const lines = titleLines(record.title);
  const title = lines.map((line, index) => `<text x="88" y="${210 + (index * 70)}" class="title">${escapeXml(line)}</text>`).join('');
  const stages = record.stages.map((stage, index) => {
    const x = 90 + (index * 355);
    return `<g transform="translate(${x} 500)"><rect width="300" height="92" rx="4" class="stage"/><circle cx="32" cy="31" r="10" class="dot"/><text x="54" y="38" class="stageTitle">${escapeXml(stage)}</text><path d="M32 57h214" class="rule"/><path d="M32 70h145" class="rule faint"/></g>`;
  }).join('');

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="675" viewBox="0 0 1200 675" role="img" aria-labelledby="title desc">
<title id="title">${escapeXml(record.title)}</title>
<desc id="desc">A mortgage operations workflow showing ${escapeXml(record.stages.join(', '))}.</desc>
<style>.canvas{fill:#f3eee3}.frame{fill:none;stroke:#211a17;stroke-width:2}.eyebrow,.brand{font:700 16px Arial,sans-serif;letter-spacing:2px;fill:#6f2528}.title{font:500 55px Georgia,serif;fill:#211a17}.stage{fill:#e5d8c5;stroke:#211a17;stroke-width:1.5}.stageTitle{font:700 16px Arial,sans-serif;fill:#211a17}.dot{fill:#9a7a3a}.rule{stroke:#6f2528;stroke-width:2}.faint{opacity:.35}.path{fill:none;stroke:#6f2528;stroke-width:4}.seal{fill:#6f2528}.sealLine{fill:none;stroke:#e3bd69;stroke-width:2}</style>
<rect class="canvas" width="1200" height="675"/><rect class="frame" x="28" y="28" width="1144" height="619"/>
<text x="88" y="102" class="eyebrow">${escapeXml(record.eyebrow.toUpperCase())}</text>
${title}
<path class="path" d="M${accentX} ${accentY}c-90 55-135 118-132 188s55 115 150 146"/>
<circle class="seal" cx="${accentX}" cy="${accentY}" r="66"/><circle class="sealLine" cx="${accentX}" cy="${accentY}" r="48"/>
<path class="sealLine" d="M${accentX - 25} ${accentY + 8}l25-22 25 22v25h-50zM${accentX - 10} ${accentY + 33}v-20h20v20"/>
${stages}
<text x="88" y="625" class="brand">HOME LOAN PROCESSORS · ACCOUNTABLE WORKFLOW DESIGN</text>
</svg>`;

  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800',
      'X-Content-Type-Options': 'nosniff',
    },
  });
}
