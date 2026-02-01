<template>
  <u-page>
    <u-page-body>
      <div class="flex flex-col gap-6 items-stretch w-full">
        <div class="flex flex-col gap-2">
          <h1 class="typ-title">Posts tagged "{{ tag }}"</h1>
          <nuxt-link to="/tags" class="text-sm text-muted hover:text-primary hover:underline">&larr; All tags
          </nuxt-link>
        </div>
        <u-separator/>
        <u-empty
            v-if="filtered.length === 0"
            title="No articles found"
            :description="`No articles tagged '${tag}' yet.`"
            variant="naked"
            :actions="[{ label: 'All tags', to: '/tags' }]"
        />
        <ul v-else class="flex flex-col gap-3">
          <li v-for="article in filtered" :key="article.path" class="flex justify-between items-baseline gap-4">
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
const route = useRoute();
const tag = computed(() => route.params.tag as string);

useSeoMeta({
  title: () => `Posts tagged "${tag.value}"`,
  description: () => `Articles tagged "${tag.value}" on Digital Shepard`,
});

function formatDate(date: string | Date) {
  return new Intl.DateTimeFormat("en-GB", {day: "2-digit", month: "short", year: "numeric"}).format(new Date(date));
}

const {data: articles} = await useAsyncData("articles-by-tag", () => queryCollection("articles").order("date", "DESC").all());

const filtered = computed(() =>
    (articles.value ?? []).filter((a) => a.tags?.includes(tag.value)),
);
</script>
