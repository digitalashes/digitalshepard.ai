<template>
    <u-page>
        <u-page-body>
            <div class="flex flex-col gap-6 items-stretch w-full">
                <div class="flex flex-col gap-2">
                    <h1 class="typ-title">Articles</h1>
                    <p class="text-muted">Reflections on AI Governance and Automation: Keeping the AI Bordello Under Control</p>
                    <p class="text-muted">Thoughts on Taming the Chaos</p>
                </div>
                <u-separator />
                <u-field-group>
                    <u-content-search-button variant="outline">
                        <div class="flex items-center gap-4">
                            Search
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
                    description="Check back soon for new content."
                    variant="naked"
                    :actions="[{ label: 'Go back home', to: '/' }]"
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
useSeoMeta({
    title: "Articles",
    description: "All articles on Digital Shepard",
});

function formatDate(date: string | Date) {
    return new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "short", year: "numeric" }).format(new Date(date));
}

const { data: articles } = await useAsyncData("articles-listing", () => queryCollection("articles").order("date", "DESC").all());
const { data: navigation } = await useAsyncData("navigation-articles", () => queryCollectionNavigation("articles"));
const { data: files } = useLazyAsyncData("search-articles", () => queryCollectionSearchSections("articles"), {
    server: false,
});
const query = ref("");
</script>
