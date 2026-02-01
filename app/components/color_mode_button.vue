<template>
    <client-only v-if="!colorMode?.forced">
        <u-button
            :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
            variant="ghost"
            color="neutral"
            size="sm"
            aria-label="Toggle dark mode"
            @click="isDark = !isDark"
        />
        <template #fallback>
            <div class="size-8"></div>
        </template>
    </client-only>
</template>
<script lang="ts" setup>
const colorMode = useColorMode();

const isDark = computed({
    get() {
        return colorMode.value === "dark";
    },
    set(_isDark) {
        colorMode.preference = _isDark ? "dark" : "light";
    },
});
</script>
