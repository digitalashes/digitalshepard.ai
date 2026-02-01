<template>
    <u-page>
        <u-page-body>
            <div class="flex flex-col gap-8 max-w-[70ch]">
                <div class="flex flex-col gap-2">
                    <h1 class="typ-title">About Digital Shepard</h1>
                    <p class="text-muted text-lg">AI governance blog — keeping humans in the loop while commanding a squad of AI specialists.</p>
                </div>

                <section class="flex flex-col gap-3">
                    <h2 class="typ-subtitle">Why "Shepard"?</h2>
                    <p>The name comes from Commander Shepard in Mass Effect — a human leader who commands a diverse squad of specialists. That is the model for how we should think about AI: humans making strategic decisions, AI executing them under oversight.</p>
                    <p>A shepard (shepherd) also guides and protects. In the context of AI governance, we guide powerful systems while protecting the humans and communities they serve.</p>
                </section>

                <section class="flex flex-col gap-3">
                    <h2 class="typ-subtitle">What This Blog Covers</h2>
                    <ul class="list-disc list-inside flex flex-col gap-2 text-muted">
                        <li><span class="text-highlighted">AI governance frameworks</span> — how organizations can structure AI oversight</li>
                        <li><span class="text-highlighted">Human-in-the-loop patterns</span> — practical architectures for keeping humans in control</li>
                        <li><span class="text-highlighted">Automation with guardrails</span> — building systems that are both powerful and safe</li>
                        <li><span class="text-highlighted">Tool reviews</span> — evaluating AI tools through a governance lens</li>
                    </ul>
                </section>

                <section class="flex flex-col gap-3">
                    <h2 class="typ-subtitle">The Shepard System</h2>
                    <p>This blog is part of the <code>shepard-system</code> ecosystem — a collection of tools and practices for responsible AI deployment. The system emphasizes human oversight at every level, from individual tool usage to organizational governance.</p>
                    <p>
                        <nuxt-link to="https://github.com/shepard-system" target="_blank" class="text-primary hover:underline">
                            Explore on GitHub
                        </nuxt-link>
                    </p>
                </section>

                <section class="flex flex-col gap-3">
                    <h2 class="typ-subtitle">About the Author</h2>
                    <div class="flex items-center gap-3">
                        <u-avatar src="/icon.png" size="lg" />
                        <div>
                            <p class="font-semibold text-highlighted">Shepard</p>
                            <p class="text-sm text-muted">AI Governance</p>
                        </div>
                    </div>
                    <p>Writing about AI governance and keeping humans in the loop. Exploring how we build, deploy, and oversee AI systems responsibly.</p>
                </section>
            </div>
        </u-page-body>
    </u-page>
</template>

<script lang="ts" setup>
useSeoMeta({
    title: "About",
    description: "About Digital Shepard — AI governance blog focused on human-in-the-loop AI systems.",
});
</script>
