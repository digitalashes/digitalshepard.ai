<template>
    <svg
        :width="size"
        :height="size"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Digital Shepard logo"
    >
        <!-- Shepherd's crook: curved hook + straight staff -->
        <path
            d="M16 4C12 4 9 7 9 11C9 14 11 16 14 16H16V28"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <!-- Dot accent at the top of the hook -->
        <circle cx="12" cy="8" r="1.5" fill="currentColor" class="text-primary" />
    </svg>
</template>

<script lang="ts" setup>
withDefaults(defineProps<{ size?: number }>(), { size: 32 });
</script>
