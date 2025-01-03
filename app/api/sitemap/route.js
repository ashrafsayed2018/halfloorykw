export const dynamic = 'force-dynamic' // Ensures it's always dynamic

import { articles } from '../../articles.js'

function generateSiteMap(articles) {
  const staticUrls = [
    { loc: 'https://www.halfloorykw.site', priority: 1.0 },
    { loc: 'https://www.halfloorykw.site/complaint', priority: 0.8 },
    { loc: 'https://www.halfloorykw.site/team', priority: 0.8 },
    { loc: 'https://www.halfloorykw.site/whywe', priority: 0.8 },
    { loc: 'https://www.halfloorykw.site/halflorry', priority: 0.8 },
    { loc: 'https://www.halfloorykw.site/whoweare', priority: 0.8 },
    { loc: 'https://www.halfloorykw.site/contact', priority: 0.8 },
  ]

  const staticEntries = staticUrls
    .map(({ loc, priority }) => {
      return `
        <url>
          <loc>${loc}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <priority>${priority.toFixed(2)}</priority>
        </url>`
    })
    .join('')

  const dynamicEntries = articles
    .map(({ slug }) => {
      return `
        <url>
          <loc>https://www.halfloorykw.site/articles/${slug}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <priority>0.6</priority>
        </url>`
    })
    .join('')

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <!-- Static URLs -->
      ${staticEntries}
      <!-- Dynamic URLs -->
      ${dynamicEntries}
    </urlset>`
}

export async function GET(request) {
  const sitemap = generateSiteMap(articles)

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
