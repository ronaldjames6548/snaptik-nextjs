import { NextResponse } from "next/server";

const DOMAIN =
  process.env.NEXT_PUBLIC_BASE_URL ||
  (() => {
    throw new Error(
      "NEXT_PUBLIC_DOMAIN_WEBSITE is not defined in environment variables"
    );
  })();

const pageEns = [
  "/en",
  "/en/about",
  "/en/dmca",
  "/en/terms",
  "/en/privacy",
  "/en/guide",
];
const pageVis = [
  "/vi",
  "/vi/about",
  "/vi/dmca",
  "/vi/terms",
  "/vi/privacy",
  "/vi/guide",
];

export async function GET() {
  const allUrls = [...pageEns, ...pageVis];

  const sitemapUrls = allUrls
    .map((page) => {
      const lang = page.startsWith("/en") ? "en" : "vi";
      const alternateLang = lang === "en" ? "vi" : "en";
      const alternateUrl = page.replace(`/${lang}`, `/${alternateLang}`);
      return `
      <url>
        <loc>${DOMAIN}${page}</loc>
        <xhtml:link rel="alternate" hreflang="${lang}" href="${DOMAIN}${page}"/>
        <xhtml:link rel="alternate" hreflang="${alternateLang}" href="${DOMAIN}${alternateUrl}"/>
        <lastmod>2025-07-09</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>`;
    })
    .join("")
    .trim();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sitemapUrls}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
