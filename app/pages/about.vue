<template>
    <u-page>
        <u-page-body>
            <div class="flex flex-col gap-8 max-w-[70ch]">
                <div class="flex flex-col gap-2">
                    <h1 class="typ-title">The Shepherd's Manifesto</h1>
                    <p class="text-muted text-lg">Every herd needs a shepherd. Every agent needs a statute.</p>
                </div>

                <section class="flex flex-col gap-3">
                    <h2 class="typ-subtitle">The Problem</h2>
                    <p>AI agents are dumb like sheep. Out of the box, they wander. They hallucinate. They forget. They contradict themselves between sessions. They have no memory, no boundaries, no chain of command.</p>
                    <p>And the industry's answer? Make the sheep bigger. More parameters. More context. More tokens. But size does not solve governance. A larger sheep is still a sheep.</p>
                </section>

                <section class="flex flex-col gap-3">
                    <h2 class="typ-subtitle">The Thesis</h2>
                    <p>The answer is not a bigger sheep. The answer is a shepherd.</p>
                    <p>Give agents a statute - a set of rules, constraints, and directives - and they transform. Sheep governed by statute become soldiers. They have a codex, boundaries, a commanding officer. They know what they can do, what they must not do, and who they report to.</p>
                    <p>This is not about restricting AI. It is about commanding it.</p>
                </section>

                <section class="flex flex-col gap-3">
                    <h2 class="typ-subtitle">Why "Shepard"?</h2>
                    <p>The name carries a dual meaning.</p>
                    <p><span class="text-highlighted">Commander Shepard</span> - the protagonist of Mass Effect. A human leader who commands a diverse squad of specialists. Each specialist is powerful on their own, but it is the commander who decides the mission, the rules of engagement, and the acceptable losses. That is the model.</p>
                    <p><span class="text-highlighted">A shepherd</span> - the oldest governance role in human history. Someone who watches over the flock, guides them to pasture, and keeps the wolves at bay. Not by doing the grazing, but by setting the boundaries.</p>
                </section>

                <section class="flex flex-col gap-3">
                    <h2 class="typ-subtitle">What This Blog Covers</h2>
                    <ul class="list-disc list-inside flex flex-col gap-2 text-muted">
                        <li><span class="text-highlighted">The governance system</span> - a framework for commanding AI agents at scale</li>
                        <li><span class="text-highlighted">Architecture</span> - pastures, gates, staffs, memory, the eye - each piece explained</li>
                        <li><span class="text-highlighted">Practice</span> - real configurations, real trade-offs, real failures</li>
                        <li><span class="text-highlighted">Philosophy</span> - why governance is the missing layer, and what happens without it</li>
                    </ul>
                </section>

                <section class="flex flex-col gap-3">
                    <h2 class="typ-subtitle">About the Author</h2>
                    <div class="flex items-center gap-3">
                        <u-avatar src="/icon.png" size="lg" />
                        <div>
                            <p class="font-semibold text-highlighted">Shepard</p>
                            <p class="text-sm text-muted">Building the system. Writing the field manual.</p>
                        </div>
                    </div>
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
    description: "The Shepherd's Manifesto - every herd needs a shepherd, every agent needs a statute.",
});
</script>
