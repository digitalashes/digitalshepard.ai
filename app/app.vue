<template>
    <u-app>
        <u-header>
            <template #left>
                <nuxt-link to="/" class="flex items-center gap-2 font-bold" style="font-family: var(--font-display)">
                    <site-logo :size="28" />
                    <span>Digital Shepard</span>
                </nuxt-link>
            </template>
            <template #right>
                <color-mode-button />
            </template>
            <u-navigation-menu :items="navItems" />
        </u-header>
        <u-main>
            <u-container>
                <nuxt-page />
            </u-container>
        </u-main>
        <u-footer class="border-t border-t-default">
            <template #left>
                <p class="text-sm text-muted">&copy; {{ new Date().getFullYear() }} Digital Shepard</p>
            </template>
            <template #right>
                <div class="flex items-center gap-3">
                    <nuxt-link to="/feed.xml" class="text-sm text-muted hover:text-highlighted" target="_blank">RSS</nuxt-link>
                    <nuxt-link to="https://github.com/shepard-system" class="text-sm text-muted hover:text-highlighted" target="_blank">GitHub</nuxt-link>
                </div>
            </template>
        </u-footer>
    </u-app>
</template>

<script lang="ts" setup>
import type { NavigationMenuItem } from "@nuxt/ui";

const navItems: NavigationMenuItem[] = [
    { label: "Articles", icon: "material-symbols:article-rounded", to: "/articles" },
    { label: "About", icon: "i-lucide-user", to: "/about" },
    { label: "GitHub", icon: "mdi:github", target: "_blank", to: "https://github.com/shepard-system" },
];
</script>
