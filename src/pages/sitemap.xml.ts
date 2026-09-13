import { publishedEssays } from '../lib/essays';
import { THREADS } from '../lib/threads';
import { SERIES, seriesHref } from '../lib/series';

export async function GET({ site }: { site: URL }) {
  const base = site ?? new URL('https://hazemabdelghany.com');
  const essays = await publishedEssays();

  const urls = [
    { loc: '/', pri: '1.0' },
    { loc: '/essays/', pri: '0.9' },
    { loc: '/about/', pri: '0.7' },
    ...Object.values(SERIES).map((s) => ({ loc: seriesHref(s.key), pri: '0.9' })),
    ...THREADS.map((t) => ({ loc: `/threads/${t.key}/`, pri: '0.6' })),
    ...essays.map((e) => ({
      loc: `/essays/${e.id}/`,
      pri: '0.8',
      lastmod: e.data.date.toISOString().slice(0, 10),
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${new URL(u.loc, base).href}</loc>${
      'lastmod' in u && u.lastmod ? `\n    <lastmod>${u.lastmod}</lastmod>` : ''
    }
    <priority>${u.pri}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
