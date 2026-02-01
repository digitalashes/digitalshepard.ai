<template>
  <u-page>
    <u-page-body>
      <div class="flex flex-col gap-6 items-stretch w-full">
        <div class="flex flex-col gap-2">
          <h1 class="typ-title">Articles</h1>
          <p class="text-muted">Reflections on AI Governance and Automation: Keeping the AI Bordello Under Control</p>
          <p class="text-muted">Dispatches on taming the chaos.</p>
        </div>
        <u-separator/>
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
  description: "Dispatches on AI governance — taming the chaos, one statute at a time.",
});

const {data: articles} = await useAsyncData("articles-listing", () => queryCollection("articles").order("date", "DESC").all());
</script>
