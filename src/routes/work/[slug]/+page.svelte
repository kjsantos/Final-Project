<script>
	export let data
	import GotoTop from '$lib/components/GotoTop.svelte'
</script>

<svelte:head>
	<title>{data.project.title} — Kailen Santos</title>
</svelte:head>

<main class="min-h-screen py-20">
	<article class="mx-auto max-w-3xl px-6">
		<!-- Breadcrumb -->
		<nav class="mb-8" aria-label="Breadcrumb">
			<a href="/work" class="back-link">← Back to Work</a>
		</nav>

		<!-- Header -->
		<header class="mb-8">
			<div class="mb-4 flex flex-wrap gap-2">
				{#each data.project.tags as tag}
					<span class="skill-tag">{tag}</span>
				{/each}
			</div>
			<h1>{data.project.title}</h1>
		</header>

		<!-- Thumbnail -->
		<div class="thumbnail-wrap mb-8">
			<img
				src={data.project.thumbnail}
				alt="Preview of {data.project.title}"
				class="thumbnail" />
		</div>

		<!-- Body content -->
		<section class="content">
			{@html data.project.content}
		</section>

		<!-- CTA -->
		<div class="mt-12">
			<a
				href={data.project.link}
				class="cta-btn"
				target="_blank"
				rel="noopener noreferrer">
				View Project ↗
			</a>
		</div>

		<!-- Tech stack -->
		{#if data.project.tech.length > 0}
			<div class="mt-10 flex items-center gap-4 flex-wrap">
				{#each data.project.tech as icon}
					<img
						src="/images/{icon}"
						alt={icon.replace('-logo.png', '')}
						class="h-10 w-auto opacity-70" />
				{/each}
			</div>
		{/if}
	</article>
</main>

<GotoTop showAtPixel={300} />

<style lang="postcss">
	h1 {
		color: white;
		font-family: 'clarendon-urw-extra-wide', serif;
		font-size: 3rem;
		font-weight: 200;
		line-height: 1.3;
		margin-bottom: 0.5rem;
	}

	.back-link {
		font-family: 'josefin-sans', sans-serif;
		font-size: 0.95rem;
		color: #9ab3ae;
		text-decoration: none;
		transition: color 0.2s;
	}

	.back-link:hover {
		color: #f1ffe8;
	}

	.thumbnail-wrap {
		border-radius: 12px;
		overflow: hidden;
		box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
	}

	.thumbnail {
		width: 100%;
		height: auto;
		display: block;
	}

	.skill-tag {
		font-family: 'josefin-sans', sans-serif;
		font-size: 0.7rem;
		font-weight: 700;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		padding: 0.25rem 0.7rem;
		border-radius: 4px;
		background-color: rgba(154, 179, 174, 0.2);
		color: #9ab3ae;
		border: 1px solid rgba(154, 179, 174, 0.4);
	}

	.content :global(p.blog) {
		color: #e2e8e4;
		font-family: 'josefin-sans', sans-serif;
		font-size: 1.1rem;
		font-weight: 400;
		line-height: 1.85;
		text-align: left;
	}

	.content :global(a.link) {
		color: #9ab3ae;
		text-decoration: underline;
		text-underline-offset: 3px;
		transition: color 0.2s;
		font-size: inherit;
		font-family: inherit;
		font-weight: 500;
	}

	.content :global(a.link:hover) {
		color: #f1ffe8;
	}

	.content :global(strong) {
		color: #f1ffe8;
		font-weight: 700;
	}

	.cta-btn {
		display: inline-block;
		padding: 0.75rem 1.75rem;
		border: 2px solid #9ab3ae;
		border-radius: 9999px;
		font-family: 'josefin-sans', sans-serif;
		font-size: 0.95rem;
		font-weight: 600;
		color: #9ab3ae;
		text-decoration: none;
		transition: background-color 0.2s ease, color 0.2s ease;
	}

	.cta-btn:hover {
		background-color: #9ab3ae;
		color: #f1ffe8;
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 2rem;
		}
	}
</style>
