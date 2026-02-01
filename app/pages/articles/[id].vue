<template>
  <u-page :ui="{ center: 'lg:col-span-7!' }">
    <template #right>
      <u-page-aside :ui="{ root: 'lg:col-span-3!' }">
        <u-page-anchors
            :links="[
                { label: 'All articles', icon: 'material-symbols:article-rounded', to: '/articles/' },
            ]"
        />
        <u-separator type="dotted"/>
        <u-content-toc v-if="data" :links="data.body.toc?.links" highlight/>
        <u-field-group class="w-full">
          <u-button @click="share" label="Share this article"
                    icon="material-symbols:share" variant="subtle"
                    color="neutral" class="grow"/>
          <u-dropdown-menu :items="[{ label: 'Copy URL', icon: 'mdi:link-variant', onSelect: copyLink }]">
            <u-button icon="i-lucide-chevron-down" variant="subtle" color="neutral"/>
          </u-dropdown-menu>
        </u-field-group>
      </u-page-aside>
    </template>

    <u-breadcrumb :items="breadcrumbItems" class="mb-4"/>

    <u-page-header :title="data?.title" :description="data?.description">
      <div class="flex items-end flex-wrap gap-4 justify-between mt-4">
        <div class="flex flex-col gap-4">
          <u-user
              :name="data?.author"
              :description="data?.author_description"
              :avatar="{ src: data?.author_avatar }"
              class="cursor-default"
              @click="() => authorEl?.scrollIntoView()"
          />
          <div class="flex flex-row gap-2 items-center flex-wrap">
            <nuxt-link v-for="k in data?.tags" :key="k" :to="`/tags/${k}`">
              <u-badge color="primary" variant="soft" class="hover:opacity-80">{{ k }}</u-badge>
            </nuxt-link>
          </div>
        </div>
        <div class="flex flex-row items-center gap-4">
          <p class="flex flex-row items-center gap-1 typ-sublabel">
            <icon name="material-symbols:calendar-today-rounded" class="text-primary"/>
            {{ formatDate(data?.date) }}
          </p>
          <p class="flex flex-row items-center gap-1 typ-sublabel">
            <icon name="material-symbols:alarm-rounded" class="text-primary"/>
            {{ readingTime(data?.rawbody) }}
          </p>
        </div>
      </div>
    </u-page-header>

    <u-content-toc v-if="data" :links="data.body.toc?.links" highlight class="lg:hidden"/>
    <u-page-body>
      <content-renderer v-if="data" id="content" :value="data" class="markdown-content flex-1"/>
      <u-separator/>
      <p class="font-semibold">Related articles</p>
      <ul class="flex flex-col gap-3">
        <li v-for="article in links" :key="article.path" class="flex justify-between items-baseline gap-4">
          <nuxt-link :to="article.path" class="text-highlighted hover:text-primary hover:underline">
            {{ article.title }}
          </nuxt-link>
          <time class="text-muted text-sm shrink-0">{{ formatDate(article.date) }}</time>
        </li>
      </ul>

      <u-content-surround :surround="surround"/>
    </u-page-body>
  </u-page>
</template>

<script lang="ts" setup>
import appMeta from "~/app.meta";

const route = useRoute();
const authorEl = ref<HTMLElement | null>();
const clipboard = useClipboard();
const toast = useToast();

function readingTime(text?: string) {
  if (!text) return "1 min read";
  const minutes = Math.max(1, Math.ceil(text.split(/\s+/).length / 200));
  return `${minutes} min read`;
}

const {data} = await useAsyncData(route.path, () => queryCollection("articles").path(route.path).first());
const {data: links} = await useAsyncData(`linked-${route.path}`, async () => {
  const res = await queryCollection("articles").where("path", "NOT LIKE", data.value?.path).all();
  const tags = data.value?.tags ?? [];
  return res
      .map((a) => ({...a, overlap: a.tags?.filter((t) => tags.includes(t)).length ?? 0}))
      .sort((a, b) => b.overlap - a.overlap)
      .slice(0, 3);
});
const {data: surround} = await useAsyncData(`${route.path}-surround`, () => {
  return queryCollectionItemSurroundings("articles", route.path, {
    fields: ["description"],
  });
});

const breadcrumbItems = computed(() => [
  {label: "Articles", to: "/articles"},
  {label: data.value?.title ?? ""},
]);

updateMeta();

async function copyLink() {
  await clipboard.copy(window.location.href);
  toast.add({title: "Copied to clipboard", icon: "material-symbols:check-circle-rounded", color: "success"});
}

async function share() {
  await navigator.share({url: route.fullPath});
}

function updateMeta() {
  useSchemaOrg([
    defineArticle({
      headline: data.value?.title,
      description: data.value?.description,
      image: data.value?.thumbnail,
      datePublished: toISODateString(data.value?.date),
      keywords: data.value?.tags,
      author: {
        name: data.value?.author,
        description: data.value?.author_description,
        image: data.value?.author_avatar,
      },
      publisher: definePerson({
        name: appMeta.author.name,
        description: appMeta.author.description,
        image: appMeta.author.image,
        url: appMeta.author.url,
      }),
    }),
  ]);

  useSeoMeta({
    title: data.value?.title,
    description: data.value?.description,
  });
  // defineOgImageComponent("Article", {
  //   thumbnail: data.value?.thumbnail,
  //   title: data.value?.title,
  //   author: {
  //     name: data.value?.author,
  //     image: data.value?.author_avatar,
  //   },
  // });
}

onMounted(() => {
  const contentEl = document.getElementById("content");
  authorEl.value = contentEl?.querySelector("#author-about");
});
</script>

<style lang="css">
@reference "~/assets/css/main.css";

@variant max-lg {
  * {
    scroll-margin-top: calc(var(--ui-header-height) + 4rem) !important;
  }
}
</style>
