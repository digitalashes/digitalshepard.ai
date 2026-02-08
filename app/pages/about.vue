<template>
    <u-page>
        <u-page-body>
            <div class="flex flex-col gap-8 max-w-[70ch]">
                <div class="flex flex-col gap-2">
                    <h1 class="typ-title">About</h1>
                    <p class="text-muted text-lg">The practitioner behind the field manual.</p>
                </div>

                <section class="flex flex-col gap-4">
                    <div class="flex items-center gap-3">
                        <u-avatar src="/icon.png" size="lg" />
                        <div>
                            <p class="font-semibold text-highlighted">Shepard</p>
                            <p class="text-sm text-muted">Data &amp; Platform Engineer &middot; AI Governance</p>
                        </div>
                    </div>
                    <p>Data and platform engineer responsible for production systems that process petabytes of healthcare pricing data – sole owner of critical infrastructure where downtime isn't an option and regulatory deadlines don't move.</p>
                    <p>I've shipped AI agent infrastructure, migrated pipelines from Spark to Trino, rewrote critical paths from Python to Rust, and spent enough nights debugging unsupervised agents to know that the governance layer isn't optional – it's the first thing you should build.</p>
                    <p class="text-muted italic">This blog is the field manual I needed before I could write it.</p>
                </section>

                <section class="flex flex-col gap-3">
                    <u-button icon="i-lucide-scroll-text" to="/manifesto/" label="Read the Manifesto" variant="subtle" color="primary" />
                </section>

                <section class="flex flex-col gap-3">
                    <h2 class="typ-subtitle">Follow the Signal</h2>
                    <div class="flex items-center gap-2">
                        <u-button icon="i-lucide-rss" to="/feed.xml" label="RSS Feed" variant="subtle" color="neutral" target="_blank" />
                        <u-button icon="i-lucide-bot" to="/llms.txt" label="llms.txt" variant="subtle" color="neutral" target="_blank" />
                    </div>
                </section>
            </div>
        </u-page-body>
    </u-page>
</template>

<script lang="ts" setup>
useSeoMeta({
    title: "About",
    description: "Data and platform engineer building AI agent governance systems. Petabytes of healthcare data, production infrastructure, and the field manual for keeping AI under human command.",
});
</script>
