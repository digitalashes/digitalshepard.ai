<template>
  <div v-if="inline" class="flex items-center gap-1">
    <span class="text-dimmed text-sm mr-2">Share</span>
    <u-button
        v-for="item in items" :key="item.label"
        :icon="item.icon" :aria-label="item.label"
        variant="ghost" color="neutral" size="lg"
        @click="item.action()"/>
    <u-separator orientation="vertical" class="h-5 mx-1"/>
    <u-button
        icon="mdi:link-variant" aria-label="Copy link"
        variant="ghost" color="neutral" size="lg"
        @click="copyLink"/>
  </div>
  <u-dropdown-menu v-else :items="dropdownItems">
    <u-button icon="material-symbols:share" variant="ghost" color="neutral" aria-label="Share"/>
  </u-dropdown-menu>
</template>

<script lang="ts" setup>
const props = defineProps<{
  url: string;
  title: string;
  inline?: boolean;
}>();

const clipboard = useClipboard();
const toast = useToast();

function openShare(shareUrl: string) {
  window.open(shareUrl, "_blank", "noopener,noreferrer,width=600,height=400");
}

async function copyLink() {
  await clipboard.copy(props.url);
  toast.add({title: "Copied to clipboard", icon: "material-symbols:check-circle-rounded", color: "success"});
}

const items = computed(() => {
  const url = encodeURIComponent(props.url);
  const title = encodeURIComponent(props.title);
  return [
    {label: "X", icon: "simple-icons:x", action: () => openShare(`https://x.com/intent/tweet?url=${url}&text=${title}`)},
    {label: "LinkedIn", icon: "simple-icons:linkedin", action: () => openShare(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`)},
    {label: "Threads", icon: "simple-icons:threads", action: () => openShare(`https://www.threads.net/intent/post?text=${title}%20${url}`)},
    {label: "Telegram", icon: "simple-icons:telegram", action: () => openShare(`https://t.me/share/url?url=${url}&text=${title}`)},
    {label: "Reddit", icon: "simple-icons:reddit", action: () => openShare(`https://www.reddit.com/submit?url=${url}&title=${title}`)},
  ];
});

const dropdownItems = computed(() => [
  items.value.map(item => ({label: item.label, icon: item.icon, onSelect: item.action})),
  [{label: "Copy link", icon: "mdi:link-variant", onSelect: copyLink}],
]);
</script>
