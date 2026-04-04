<script>
	export let data
	import GotoTop from '$lib/components/GotoTop.svelte'
</script>

<svelte:head>
	<title>{data.post.title} — Kailen Santos</title>
</svelte:head>

<main class="min-h-screen py-20">
	<article class="mx-auto max-w-3xl px-6">

		<nav class="mb-8" aria-label="Breadcrumb">
			<a href="/writing" class="back-link">← Back to Writing</a>
		</nav>

		<header class="mb-8">
			<h1>{data.post.title}</h1>
			{#if data.post.subtitle}
				<p class="article-sub">{data.post.subtitle}</p>
			{/if}
		</header>

		{#if data.post.image}
			<div class="hero-image-wrap mb-10">
				<img src={data.post.image} alt="Illustration for {data.post.title}" class="hero-image" />
			</div>
		{/if}

		{#if data.post.content}
			<section class="article-body">
				{@html data.post.content}
			</section>
		{/if}

		{#if data.post.link && data.post.link.startsWith('http')}
			<div class="mt-12">
				<a href={data.post.link} class="cta-btn" target="_blank" rel="noopener noreferrer">Read full piece ↗</a>
			</div>
		{/if}

	</article>
</main>

<GotoTop showAtPixel={300} />

<style>
	h1 { font-family: 'clarendon-urw-extra-wide', serif; font-size: 3rem; font-weight: 200; color: #9ab3ae; line-height: 1.3; margin-bottom: 0.75rem; }
	.article-sub { font-family: 'josefin-sans', sans-serif; font-size: 1rem; color: #8a9ba8; font-weight: 400; line-height: 1.6; }
	.back-link { font-family: 'josefin-sans', sans-serif; font-size: 0.95rem; color: #9ab3ae; text-decoration: none; transition: color 0.2s; }
	.back-link:hover { color: #f1ffe8; }
	.hero-image-wrap { border-radius: 12px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.2); }
	.hero-image { width: 100%; height: auto; display: block; }
	.article-body :global(p.blog) { font-family: 'josefin-sans', sans-serif; font-size: 1.05rem; color: #e2e8e4; font-weight: 400; line-height: 1.85; margin-bottom: 1.25rem; }
	.article-body :global(b) { color: #f1ffe8; font-weight: 700; font-family: 'josefin-sans', sans-serif; font-size: inherit; padding-top: 0; }
	.article-body :global(a.link) { color: #9ab3ae; text-decoration: underline; text-underline-offset: 3px; font-family: inherit; font-size: inherit; font-weight: 500; transition: color 0.2s; }
	.article-body :global(a.link:hover) { color: #f1ffe8; }
	.cta-btn { display: inline-block; padding: 0.75rem 1.75rem; border: 2px solid #9ab3ae; border-radius: 9999px; font-family: 'josefin-sans', sans-serif; font-size: 0.95rem; font-weight: 600; color: #9ab3ae; text-decoration: none; transition: background-color 0.2s ease, color 0.2s ease; }
	.cta-btn:hover { background-color: #9ab3ae; color: #f1ffe8; }
	@media (max-width: 768px) { h1 { font-size: 2rem; } }
</style>
