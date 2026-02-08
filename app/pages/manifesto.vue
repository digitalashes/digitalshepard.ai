<template>
    <u-page>
        <u-page-body>
            <div class="flex flex-col gap-8 max-w-[70ch]">
                <div class="flex flex-col gap-2">
                    <h1 class="typ-title">The Manifesto</h1>
                    <p class="text-muted text-lg">Five tenets. No negotiation.</p>
                </div>

                <section class="flex flex-col gap-3">
                    <p>AI agents are dumb like sheep. Out of the box, they wander, hallucinate, forget, contradict themselves between sessions. No memory. No boundaries. No chain of command.</p>
                    <p>The industry's answer? Make the sheep bigger. More parameters. More context. More tokens.</p>
                    <p>Size does not solve governance. A larger sheep is still a sheep.</p>
                    <p>The answer is not a bigger sheep. <span class="text-highlighted">The answer is a shepherd.</span></p>
                </section>

                <section class="flex flex-col gap-3">
                    <h2 class="typ-subtitle">I. Statute is Law</h2>
                    <p>Agents don't improvise. They execute written rules – or they escalate.</p>
                    <p>The Statute is the authoritative description of how work is done. Not a suggestion. Not a guideline. Law. Tickets, chats, and emails can propose changes; they cannot override Statute.</p>
                    <p>The rules evolve – every serious failure either updates the Statute, adds a case, or both. But they are always written down.</p>
                </section>

                <section class="flex flex-col gap-3">
                    <h2 class="typ-subtitle">II. The Human Commands</h2>
                    <p>One human owns every decision. Agents propose. Agents execute. Agents review. <span class="text-highlighted">They never decide.</span></p>
                    <p>Agents operate inside narrow Rules of Engagement. They do not redefine goals, values, or strategy. That is the shepherd's job.</p>
                    <p>The human is accountable for every material action performed by agents. Not the model. Not the framework. The human.</p>
                </section>

                <section class="flex flex-col gap-3">
                    <h2 class="typ-subtitle">III. Own Your Stack</h2>
                    <p>Your data stays yours. Knowledge Lake lives in a git repo you control – not in someone else's SaaS. Observability runs on open-source – OpenTelemetry, Prometheus, Grafana – not on a Datadog invoice. Local models where it makes sense.</p>
                    <p>Banks won't store secrets in Notion. Pharma won't pipe patient data through a third-party API. <span class="text-highlighted">Neither should you.</span></p>
                    <p>What goes to the cloud stops being yours. Your secrets stop being secrets. This system is built for those who understand that – and for those who can't afford to learn it the hard way.</p>
                    <p>Open-source. Self-hosted. Sovereign.</p>
                </section>

                <section class="flex flex-col gap-3">
                    <h2 class="typ-subtitle">IV. The Eye Sees Everything</h2>
                    <p>Every agent action is logged. Every tool is a named gate with a risk level and a paper trail. Read-only by default – mutations require explicit Statute and human approval. Every serious failure grows the Statute.</p>
                    <p>You cannot command what you cannot see. And <span class="text-highlighted">this system sees everything.</span></p>
                </section>

                <section class="flex flex-col gap-3">
                    <h2 class="typ-subtitle">V. Small and Sharp</h2>
                    <p>Capability is modular. Each skill is scoped, testable, and replaceable. Complex workflows are compositions of small skills – not monolithic mega-agents.</p>
                    <p>A squad of specialists beats one generalist every time. <span class="text-highlighted">Commander Shepard knew this.</span></p>
                </section>

                <section class="flex flex-col gap-3 border-t border-t-default pt-8">
                    <p class="text-muted">This manifesto is the root. Every rule, every agent, every tool in this system derives from and is constrained by these five tenets.</p>
                    <p class="text-muted italic">Sheep governed by statute become soldiers.</p>
                </section>
            </div>
        </u-page-body>
    </u-page>
</template>

<script lang="ts" setup>
useSeoMeta({
    title: "Manifesto",
    description: "Five tenets for governing AI agents. Statute is law. The human commands. Own your stack. The eye sees everything. Small and sharp.",
});
</script>
