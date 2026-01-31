import { promises as fs } from "node:fs";
import { resolve, join } from "node:path";

const SITE_URL = "https://digitalshepard.ai";
const SITE_NAME = "Your Digital Commander Shepard";
const SITE_DESCRIPTION = "AI governance blog about human-in-the-loop, MCP, the almighty Context, tokens, and other delights, goodies, and small optimizations.";

function escapeXml(str: string): string {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");
}

interface ArticleMeta {
    title: string;
    date: string;
    description: string;
    slug: string;
}

function parseFrontmatter(content: string, slug: string): ArticleMeta | null {
    const match = content.match(/^---\n([\s\S]*?)\n---/);
    if (!match) return null;

    const yaml = match[1];
    const get = (key: string) => {
        const m = yaml.match(new RegExp(`^${key}:\\s*"?(.+?)"?\\s*$`, "m"));
        return m?.[1]?.replace(/^["']|["']$/g, "") ?? "";
    };

    return {
        title: get("title"),
        date: get("date"),
        description: get("description"),
        slug,
    };
}

export default defineEventHandler(async (event) => {
    const articlesDir = resolve(process.cwd(), "content/articles");
    const files = await fs.readdir(articlesDir);

    const articles: ArticleMeta[] = [];
    for (const file of files) {
        if (!file.endsWith(".md")) continue;
        const content = await fs.readFile(join(articlesDir, file), "utf-8");
        const slug = file.replace(/\.md$/, "");
        const meta = parseFrontmatter(content, slug);
        if (meta) articles.push(meta);
    }

    articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    const items = articles
        .map(
            (a) => `    <item>
      <title>${escapeXml(a.title)}</title>
      <link>${SITE_URL}/articles/${a.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/articles/${a.slug}</guid>
      <pubDate>${new Date(a.date).toUTCString()}</pubDate>
      <description>${escapeXml(a.description)}</description>
    </item>`,
        )
        .join("\n");

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_NAME)}</title>
    <link>${SITE_URL}</link>
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>en</language>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

    setResponseHeader(event, "content-type", "application/xml; charset=utf-8");
    return xml;
});
