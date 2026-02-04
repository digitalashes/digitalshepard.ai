<template>
    <u-page>
        <u-page-body>
            <div class="flex flex-col gap-6 items-stretch w-full">
                <div class="flex flex-col gap-2">
                    <h1 class="typ-title">Archive</h1>
                    <p class="text-muted">All articles, grouped by year.</p>
                </div>
                <u-separator />
                <div v-for="[year, posts] in grouped" :key="year" class="flex flex-col gap-3">
                    <h2 class="typ-subtitle sticky top-[var(--ui-header-height)] bg-[var(--ui-bg)] py-2 z-10">{{ year }}</h2>
                    <ul class="flex flex-col gap-3">
                        <li v-for="article in posts" :key="article.path" class="flex justify-between items-baseline gap-4">
                            <nuxt-link :to="article.path + '/'" class="text-highlighted hover:text-primary hover:underline">
                                {{ article.title }}
                            </nuxt-link>
                            <time class="text-muted text-sm shrink-0">{{ formatShortDate(article.date) }}</time>
                        </li>
                    </ul>
                </div>
            </div>
        </u-page-body>
    </u-page>
</template>

<script lang="ts" setup>
useSeoMeta({
    title: "Archive",
    description: "All articles on Digital Shepard, chronologically",
});

const { data: articles } = await useAsyncData("articles-archive", () => queryCollection("articles").order("date", "DESC").all());

const grouped = computed(() => {
    const map = new Map<number, typeof articles.value>();
    for (const article of articles.value ?? []) {
        const year = getDateYear(article.date);
        if (!map.has(year)) map.set(year, []);
        map.get(year)!.push(article);
    }
    return [...map.entries()].sort((a, b) => b[0] - a[0]);
});
</script>
