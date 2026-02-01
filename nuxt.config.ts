import { definePerson } from "nuxt-schema-org/schema";
import appMeta from "./app/app.meta";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    ssr: false,
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
            link: [
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
            routes: ["/feed.xml"],
        },
    },
    modules: [
        "@nuxt/ui",
        "@nuxt/content",
        "@nuxtjs/seo",
        "@nuxt/eslint",
    ],
});
