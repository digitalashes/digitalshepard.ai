<template>
    <u-page>
        <u-page-body>
            <div class="flex flex-col gap-6 items-stretch mt-4 w-full mx-auto">
                <div class="flex flex-col gap-3">
                    <h1 class="typ-title">One <s>Ring</s> Shepherd to rule them all.</h1>
                    <p>AI agents are dumb like sheep. Out of the box, they wander. They hallucinate. They forget.</p>
                    <p>But give them a statute, a shepherd, and a system of governance... and they become something else entirely.</p>
                    <p class="text-muted">This is a field manual for those who command, not follow.</p>
                </div>

                <u-separator />

                <div class="flex flex-col gap-3">
                    <h2 class="typ-subtitle">Dispatches</h2>
                    <u-empty
                        v-if="(articles?.length ?? 0) <= 0"
                        title="No dispatches yet"
                        description="The first signal is incoming. Stand by."
                        variant="naked"
                    />
                    <ul v-else class="flex flex-col gap-3">
                        <li v-for="article in articles" :key="article.path" class="flex justify-between items-baseline gap-4">
                            <nuxt-link :to="article.path + '/'" class="text-highlighted hover:text-primary hover:underline">
                                {{ article.title }}
                            </nuxt-link>
                            <time class="text-muted text-sm shrink-0">{{ formatDate(article.date) }}</time>
                        </li>
                    </ul>
                </div>

                <u-separator />

                <p class="text-muted">The system has a name. The agents have a codex. More will be revealed.</p>
            </div>
        </u-page-body>
    </u-page>
</template>

<script lang="ts" setup>
import appMeta from "~/app.meta";

useSeoMeta({
    title: "Home",
    description: appMeta.description,
});

const { data: articles } = await useAsyncData("articles-home", () => queryCollection("articles").order("date", "DESC").all());
</script>
