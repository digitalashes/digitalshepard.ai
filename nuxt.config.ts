import { definePerson } from "nuxt-schema-org/schema";
import appMeta from "./app/app.meta";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    ssr: true,
    ogImage: { enabled: false },
    devtools: { enabled: true },
    colorMode: {
        preference: "dark",
    },
    app: {
        head: {
            htmlAttrs: { lang: "en" },
            title: appMeta.name,
            titleTemplate: `%s | ${appMeta.name}`,
            meta: [
                { property: "og:image", content: `${appMeta.url}/icon.png` },
                { property: "og:type", content: "website" },
                { name: "twitter:card", content: "summary" },
                { name: "twitter:image", content: `${appMeta.url}/icon.png` },
            ],
            link: [
                { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
                { rel: "icon", type: "image/png", sizes: "96x96", href: "/favicon-96x96.png" },
                { rel: "shortcut icon", href: "/favicon.ico" },
                { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
                { rel: "manifest", href: "/site.webmanifest" },
                { rel: "alternate", type: "application/rss+xml", title: "Digital Shepard RSS", href: "/feed.xml" },
            ],
            script: [
                {
                    src: "https://www.googletagmanager.com/gtag/js?id=G-77LD3MNPLS",
                    async: true,
                },
                {
                    innerHTML: "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-77LD3MNPLS');",
                },
            ],
        },
    },
    css: ["~/assets/css/main.css"],
    fonts: {
        defaults: {
            weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        },
    },
    site: {
        name: appMeta.name,
        url: appMeta.url,
        defaultLocale: "en",
        trailingSlash: true,
    },
    sitemap: {
        autoLastmod: true,
    },
    schemaOrg: {
        identity: definePerson(appMeta.author),
    },
    content: {
        build: {
            markdown: {
                toc: {
                    depth: 3,
                    searchDepth: 2,
                },
            },
        },
    },
    nitro: {
        prerender: {
            routes: ["/feed.xml", "/sitemap.xml"],
        },
    },
    modules: [
        "@nuxt/ui",
        "@nuxt/content",
        "@nuxtjs/seo",
        "@nuxt/eslint",
    ],
});
