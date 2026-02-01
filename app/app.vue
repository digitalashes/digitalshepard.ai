<template>
  <u-app>
    <u-header>
      <template #left>
        <u-navigation-menu :items="navItems"/>
      </template>
      <template #right>
        <div class="flex items-center gap-1">
          <u-content-search-button variant="ghost" color="neutral" icon="i-lucide-search" label=""/>
          <color-mode-button/>
        </div>
      </template>
    </u-header>
    <u-main>
      <u-container>
        <nuxt-page/>
      </u-container>
    </u-main>
    <u-footer class="border-t border-t-default">
      <p class="text-sm text-muted w-full text-center">&copy; {{ new Date().getFullYear() }} Digital Shepard</p>
    </u-footer>
    <client-only>
      <u-content-search :search-term="query" shortcut="meta_k" :files="files" :navigation="navigation"
                        :fuse="{ resultLimit: 42 }"/>
    </client-only>
  </u-app>
</template>

<script lang="ts" setup>
import type {NavigationMenuItem} from "@nuxt/ui";

const navItems: NavigationMenuItem[] = [
  {label: "Home", icon: "i-lucide-house", to: "/"},
  {label: "Articles", icon: "material-symbols:article-rounded", to: "/articles"},
  {label: "About", icon: "i-lucide-user", to: "/about"},
  {label: "RSS", icon: "i-lucide-rss", to: "/feed.xml", target: "_blank", external: true},
  {label: "llms.txt", icon: "i-lucide-bot", to: "/llms.txt", target: "_blank", external: true},
];

const {data: navigation} = await useAsyncData("navigation", () => queryCollectionNavigation("articles"));
const {data: files} = useLazyAsyncData("search", () => queryCollectionSearchSections("articles"), {
  server: false,
});
const query = ref("");
</script>
