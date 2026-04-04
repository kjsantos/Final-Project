<script lang="ts">
import GotoTop from '$lib/components/GotoTop.svelte'
import Writing from '$lib/components/Writing.svelte'
import { fade } from 'svelte/transition'
</script>

<svelte:head>
<title>Writing — Kailen Santos</title>
</svelte:head>

<main class="min-h-screen pt-20 pb-16" in:fade={{ duration: 400 }}>
<section class="mx-auto max-w-3xl px-6">
<h1 class="page-title">Writing</h1>
<p class="page-sub">Essays, tutorials, and data journalism.</p>

<Writing />
</section>
</main>

<GotoTop showAtPixel={300} />

<style>
.page-title {
font-family: 'clarendon-urw-extra-wide', serif;
font-size: 4rem;
font-weight: 200;
color: #2c4a42;
line-height: 1.2;
margin-bottom: 0.5rem;
}

.page-sub {
font-family: 'josefin-sans', sans-serif;
font-size: 1.1rem;
color: #3d6258;
margin-bottom: 2.5rem;
font-weight: 400;
}

@media (max-width: 768px) {
.page-title { font-size: 2.5rem; }
}
</style>
