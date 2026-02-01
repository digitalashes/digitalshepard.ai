<template>
    <u-page>
        <u-page-body>
            <div class="flex flex-col gap-6 items-stretch mt-4 w-full mx-auto">
                <div class="flex flex-col gap-2">
                    <h1 class="typ-title">Digital Shepard</h1>
                    <p class="text-muted">AI governance blog — human-in-the-loop commanding a squad of specialists.</p>
                </div>

                <u-separator />

                <u-field-group>
                    <u-content-search-button variant="outline">
                        <div class="flex items-center gap-4">
                            Search articles
                            <div class="flex gap-1 items-center">
                                <u-kbd variant="soft">CTRL</u-kbd>
                                <u-kbd variant="soft">K</u-kbd>
                            </div>
                        </div>
                    </u-content-search-button>
                </u-field-group>
                <client-only>
                    <u-content-search v-model:search-term="query" shortcut="meta_k" :files="files" :navigation="navigation" :fuse="{ resultLimit: 42 }" />
                </client-only>

                <u-empty
                    v-if="(articles?.length ?? 0) <= 0"
                    title="No articles yet"
                    description="Check back soon for new content on AI governance."
                    variant="naked"
                />
                <ul v-else class="flex flex-col gap-3">
                    <li v-for="article in articles" :key="article.path" class="flex justify-between items-baseline gap-4">
                        <nuxt-link :to="article.path" class="text-highlighted hover:text-primary hover:underline">
                            {{ article.title }}
                        </nuxt-link>
                        <time class="text-muted text-sm shrink-0">{{ formatDate(article.date) }}</time>
                    </li>
                </ul>
            </div>
        </u-page-body>
    </u-page>
</template>

<script lang="ts" setup>
import appMeta from "~/app.meta";

useSeoMeta({
    title: appMeta.name,
    description: appMeta.description,
});

function formatDate(date: string | Date) {
    return new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "short", year: "numeric" }).format(new Date(date));
}

const { data: articles } = await useAsyncData("articles-home", () => queryCollection("articles").order("date", "DESC").all());
const { data: navigation } = await useAsyncData("navigation", () => queryCollectionNavigation("articles"));
const { data: files } = useLazyAsyncData("search", () => queryCollectionSearchSections("articles"), {
    server: false,
});
const query = ref("");
</script>
