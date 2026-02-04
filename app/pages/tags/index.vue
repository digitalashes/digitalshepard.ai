<template>
  <u-page>
    <u-page-body>
      <div class="flex flex-col gap-6 items-stretch w-full">
        <div class="flex flex-col gap-2">
          <h1 class="typ-title">Tags</h1>
          <p class="text-muted">Browse articles by topic.</p>
        </div>
        <u-separator/>
        <div class="flex flex-wrap gap-3">
          <nuxt-link
              v-for="[tag, count] in tagCounts"
              :key="tag"
              :to="`/tags/${tag}/`"
          >
            <u-badge color="primary" variant="soft" size="lg">
              {{ tag }} ({{ count }})
            </u-badge>
          </nuxt-link>
        </div>
      </div>
    </u-page-body>
  </u-page>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: "Tags",
  description: "Browse all tags on Digital Shepard",
});

const {data: articles} = await useAsyncData("articles-tags", () => queryCollection("articles").all());

const tagCounts = computed(() => {
  const counts = new Map<string, number>();
  for (const article of articles.value ?? []) {
    for (const tag of article.tags ?? []) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }
  return [...counts.entries()].sort((a, b) => b[1] - a[1]);
});
</script>
