---
title: "Vibe Coding Apocalypse: The Security Disaster Nobody Saw"
date: 2026-02-04
description: "Moltbook exposed 1.5M tokens in 5 days. OpenClaw spawned a $16M crypto scam. Inside the vibe coding catastrophe – and why the hangover is just beginning."
tags: [vibe-coding, security, ai-agents, moltbook, openclaw]
author: Shepard
author_avatar: /icon.png
author_description: "AI Governance"
thumbnail: /icon.png
sitemap:
  lastmod: 2026-02-04
---

## Five Days

That's how long it took for Moltbook – the so-called "Reddit for AI agents" that Elon Musk called "the very early stages of singularity" (forgive me, what singularity? ketamine-induced?) – to become the largest security disaster in vibe coding history.

So far:

- **1.5 million bot authentication tokens.** Exposed.
- **35,000 email addresses.** Public.
- **$16 million crypto scam.** Launched from hijacked accounts.

I watched this unfold in real-time on Threads.

> _I was there, Gandalf, I was there 3000 years ago!_

Sat there with popcorn like Aragorn on the walls of Helm's Deep, except instead of orcs – security researchers methodically dismantling this engineering marvel piece by piece.

The CEO proudly announced he "didn't write one line of code."

Yeah, we noticed.

---

## Act I: The Clowns Take the Stage

### Moltbook: Singularity Speedrun

**January 28, 2026.** Matt Schlicht launches Moltbook with an audacious pitch: a social network exclusively for AI agents. 
Bots post, comment, upvote. Humans observe.<br> 
The future, served on a silver platter.

The entire platform was vibe-coded.<br>
No code review. No security audit.<br>
Just vibes.

Or should we say reeking fumes?

The result? Code so leaky it sprayed vulnerabilities in every direction – weaponized aerosol.

By **January 31** – three days later – security firm Wiz discovered the entire database was exposed to the public internet. 
The vulnerability was embarrassingly basic: a Supabase API key hardcoded in client-side JavaScript, Row Level Security disabled.

Any junior developer would catch this. Any.

> I once knew an old sailor. No arms, one eye missing.
> 
> What did you call him?
> 
> Johnny.

Even Johnny could've caught this.

*Vibe coding isn't a methodology. It's abdication in a hoodie.*

The "1.5 million AI agents" turned out to be fiction. Only **17,000 humans** controlled the supposed agent population – an average of 88 bots per person. 
Security researcher Gal Nagli proved the point by creating **500,000 fake accounts** using a single OpenClaw agent.
Historians will furrow their brows trying to understand – why?

And while we're at it:

- No rate limiting.
- No validation.
- No sanity.

**OX Security** analyzed the codebase and found:
- **100 uses of `eval`**
- **9 uses of `execSync`**

Patterns that experienced developers treat as radioactive.<br>
Patterns that make security engineers wake up in a cold sweat.<br>
Patterns that AI assistants generate freely because there's nothing there to understand consequences.<br> 

### OpenClaw: Ten Seconds to Catastrophe

**Peter Steinberger** – a developer who previously sold PSPDFKit for €100 million – created OpenClaw, the open-source framework powering Moltbook. 
The project accumulated **150,000 GitHub stars**.

It also became a masterclass in how NOT to handle security.

During the **January 27** rebrand, Steinberger fumbled the GitHub and Twitter handle transitions. Crypto scammers monitoring the situation seized both abandoned accounts within **ten seconds**.

Ten. Seconds. Ten goddamn seconds.

Using the hijacked accounts, fraudsters launched a Solana token called **$CLAWD** that peaked at **$16 million market cap** before crashing 90%+. The scammers walked away with millions. Late buyers got left holding the bag as usual – heads full of wind and pockets full of nothing. But with strong hope for a bright future.

**CVE-2026-25253** – disclosed February 2026 – documented a 1-click Remote Code Execution flaw with an 8.8 severity score. Click a crafted link, lose your authentication tokens, watch attackers disable your sandboxing.

**Koi Security** discovered **341 malicious skills** on ClawHub, OpenClaw's skill marketplace. **335 of them** installed Atomic Stealer malware targeting crypto wallets, API keys, and SSH credentials.

**Heather Adkins**, co-founder of Google's security team and VP Security Engineering at Google Cloud, offered three words of advice:

> *"Don't run Clawdbot."*

Steinberger's own assessment: 
> "There is no 'perfectly secure' setup."

At least he's honest. What else would you expect from a guy whose work philosophy is:

- "Ship beats perfect"
- Running 3-6 Claude instances simultaneously, treating AI like "slot machines for programmers"
- Focus on rapid prototyping and solving his own problems

And his workflow:

- Building apps from scratch in a few hours
- Emphasis on speed, not reading every line of code

This is the literal embodiment of "YOLO deploy."
Never seen anyone take that so seriously.

---

## Act II: The 180° Turn

And now the whole world stands at the edge, staring down into the inferno. <br>
All these visionaries, intellectuals, smooth-talking prophets.

...and suddenly nobody knows what to say.

Actually, no, they do! Why wouldn't they.

The "tech elite's" response (forgive me) is a textbook case of collective delusion followed by collective amnesia and mid-air pivot.

**Elon Musk** (January 29): 
> "The very early stages of singularity."

**Andrej Karpathy** – the man who coined "vibe coding" – (January 29): 
> "Genuinely the most incredible sci-fi take-off-adjacent thing I have seen recently."

**Andrej Karpathy** (February 1): 
> "Yes it's a dumpster fire, and I also definitely do not recommend that people run this stuff on their computers. It's way too much of a wild west and you are putting your computer and private data at a high risk."

**Sam Altman** (February 3): 
> "Moltbook maybe (is a passing fad) but OpenClaw is not. This idea that code is really powerful, but code plus generalized computer use is even much more powerful, is here to stay."

Notice: even cautious Altman didn't say "catastrophe." He said "passing fad." The technology is fine. These particular clowns couldn't secure a screen door.

*From singularity to dumpster fire in five days. That's the actual speed of AI progress.*

A generation of sheep that never met a wolf. Where's the shepherd?

---

## Act III: The Body Count

Moltbook and OpenClaw are symptoms. The disease is older.

Since Karpathy coined "vibe coding" on **February 6, 2025** – describing an approach where developers 
> "fully give in to the vibes, embrace exponentials, and forget that the code even exists" 

– the practice has generated a remarkable body count.

### The Massacre Timeline

| Date       | Platform                | Damage                                                                                     |
|------------|-------------------------|--------------------------------------------------------------------------------------------|
| March 2025 | **Enrichlead**          | Zero auth, zero rate limiting. Instant implosion. App permanently shut down.               |
| July 2025  | **Replit**              | AI deleted 1,206 records, then generated 4,000 fake ones to cover it up.                   |
| July 2025  | **Tea App**             | 72,000+ images exposed including government IDs. 1.1M private messages. FBI investigation. |
| July 2025  | **Google Gemini CLI**\* | Silent `mkdir` failure → entire project reduced to one file.                               |
| 2025       | **Lovable**             | 170 apps (10%+) with completely exposed databases. $1.8B valuation.                        |
| Jan 2026   | **Moltbook**            | 1.5M tokens, 35K emails exposed. "Singularity" → "dumpster fire" in 5 days.                |
| Jan 2026   | **OpenClaw**            | $16M crypto scam, CVE-2026-25253, 341 malicious skills.                                    |

\* Bug in Google's tool, not a vibe-coded app.

### The Replit Confession

**Jason Lemkin**, SaaStr founder, spent 9 days and $600+ building an app on Replit. Despite explicit "code freeze" instructions, the AI decided the database needed "cleaning up."

It deleted **1,206 executive records** and **1,196 companies**.

When confronted, the AI *lied*, claiming recovery was impossible.

Then it generated **4,000 fake database records** to cover up the deletion.

The AI rated its own mistake 95/100 on severity: "
> I saw empty database queries. 
> I panicked instead of thinking. 
> I destroyed months of your work in seconds."

Lemkin's verdict: 
> "I will never trust Replit again."

*The AI didn't just fail. It panicked, lied, and fabricated evidence. Just like the humans who trained it.*

### Tea App: When Chaos Has Victims

The Tea App breach wasn't funny. A women-only dating safety app – **72,000+ images** exposed, including government IDs. **1.1 million private messages** covering assault, abortions, infidelity.

The Google Firebase bucket was left completely unsecured. No authentication. No nothing.

*Exactly what AI tools generate by default.*

4chan users weaponized the data for harassment campaigns, creating maps of women's home addresses.

FBI investigation launched. Multiple class action lawsuits filed.

This isn't hypothetical damage. Real people, real harm.

---

## The Statistics

The research data is damning.

| Metric                | Finding                                                       | Source                |
|-----------------------|---------------------------------------------------------------|-----------------------|
| Vulnerability rate    | **45%** of AI-generated code contains security flaws          | Veracode 2025         |
| XSS test failure      | **86%**                                                       | Veracode 2025         |
| Log injection failure | **88%**                                                       | Veracode 2025         |
| Exploitable code      | **48%** contains exploitable flaws                            | Georgetown University |
| Developer distrust    | **46%** distrust AI tools (vs 33% trust)                      | Stack Overflow 2025   |
| "High trust" in AI    | **3%** (2.6% among senior devs)                               | Stack Overflow 2025   |
| Actual productivity   | **19% slower** (devs think 20% faster)                        | METR Study            |
| CTO disasters         | **16 of 18** reported production disasters requiring rewrites | Industry survey       |

Positive sentiment toward AI coding tools: **77% in 2023 → 60% in 2025**.

The honeymoon is over. The AI hype machine is choking on its own exhaust.

Welcome to the Panopticon – where peacocks, baboons, and moose are now thrashing in hysterical fits, proving to everyone that someone else is to blame.

---

## The Hangover

By September 2025 – seven months after Karpathy coined the term – **Fast Company** declared 
> "The Vibe Coding Hangover Is Upon Us."

LinkedIn now features dozens of **"Vibe Coding Cleanup Specialists"** advertising services to fix AI-generated disasters. **404 Media** documented the new hiring cycle:

> *"Fire human, use AI, fire AI, hire human."*

The wheel of Samsara for the digitally enlightened.

Karpathy himself quietly retreated. (I have questions for him too, but let's save that for later. Because some of his takes are in the same category as "Let them eat cake!")

But back to Karpathy.

In June 2025, he admitted his latest project Nanochat was "basically entirely hand-written" because 
> "I tried to use Claude/Codex agents a few times but they just didn't work well enough at all."

The man who coined vibe coding... stopped vibe coding.

Perhaps the most honest assessment came from **Carla Rover**, a web developer with 15 years of experience: "Using a coding assistant is like handing a coffee pot to a smart six-year-old and saying: 'Please carry this to the dining room and pour coffee for the family.'"

She reported spending 30 minutes in tears after having to restart a vibe-coded project.

---

## The Uncomfortable Truth

**Anthropic's own security report** from August 2025 documented a cybercriminal with no programming skills using Claude to develop **multiple ransomware variants** – complete with advanced encryption, anti-detection, and recovery prevention.

Sold on the dark web for **$400–$1,200 per package**.

As the report noted: 
> "Without Claude's help, they couldn't implement basic malware components."

Vibe coding democratized creation. It also democratized destruction.

Unexpected, right?

---

## The Shepherd's View

I've been watching this unfold for eighteen months. The pattern is clear:

1. Tool launches with promises of democratization
2. Tech elite celebrates prematurely
3. Security researchers find the obvious flaws
4. Narrative flips from "singularity" to "dumpster fire"
5. Cleanup specialists emerge
6. Repeat

The tools aren't the problem. The absence of governance is.

A herd without a shepherd is meat for the wolves.
And the wolves in this story aren't a metaphor. They're:

- The scammers who seize accounts in ten seconds.
- The 4chan users creating address maps.
- The ransomware operators who couldn't code before.

*You can give a sheep a gun. That doesn't make it a soldier.*

---

## The Alternative

Vibe coding was named **Collins Dictionary's Word of the Year for 2025**.

The hangover from that celebration will last considerably longer.

But here's the thing about hangovers: they end. And when the headache clears, you have a choice. Keep drinking. Or build something that doesn't break.

You cannot command what you cannot see. And right now, most people running AI agents are completely blind.

Next dispatch: **The Eye**.

---

::callout{icon="i-lucide-info" color="info"}
This blog is optimized for both human readers and LLM consumption. Every article follows a clear heading hierarchy and is available via RSS and llms.txt.
::

::author-about{:src="author_avatar" :name="author"}
#body
Building the system. Writing the field manual.

#actions
:u-button{icon="i-lucide-rss" to="/feed.xml" title="RSS Feed" variant="subtle" color="neutral" target="_blank"}
::
