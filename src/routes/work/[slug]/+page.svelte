<script>
	import GotoTop from '$lib/components/GotoTop.svelte'
	import { techAlt } from '$lib/techNames.js'
	let { data } = $props()
</script>

<svelte:head>
	<title>{data.project.title} — Kailen Santos</title>
</svelte:head>

<main class="min-h-screen py-16">
	<div class="mx-auto max-w-3xl px-6">

		<nav class="mb-6" aria-label="Breadcrumb">
			<a href="/work" class="back-link">← Back to Work</a>
		</nav>

		<article class="content-card">

			<header class="mb-6">
				<div class="mb-4 flex flex-wrap gap-2">
					{#each data.project.tags as tag}
						<span class="skill-tag">{tag}</span>
					{/each}
				</div>
				<h1>{data.project.title}</h1>
			</header>

			<div class="thumbnail-wrap mb-8">
				<img
					src={data.project.thumbnail}
					alt="Screenshot of {data.project.title}"
					title={data.project.title}
					class="thumbnail" />
			</div>

			<section class="content">
				{@html data.project.content}
			</section>

			<div class="mt-10">
				<a
					href={data.project.link}
					class="cta-btn"
					target="_blank"
					rel="noopener noreferrer">
					View Project ↗
				</a>
			</div>

			{#if data.project.tech.length > 0}
				<div class="mt-10 flex items-center gap-4 flex-wrap tech-stack" aria-label="Technologies used">
					{#each data.project.tech as icon}
						<img
							src="/images/{icon}"
							alt={techAlt(icon)}
							title={techAlt(icon)}
							class="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity" />
					{/each}
				</div>
			{/if}

		</article>
	</div>
</main>

<GotoTop showAtPixel={300} />

<style lang="postcss">
	.back-link {
		font-family: 'josefin-sans', sans-serif;
		font-size: 0.95rem;
		color: #2c4a42;
		text-decoration: none;
		font-weight: 600;
		transition: color 0.2s;
	}
	.back-link:hover {
		color: #1e3830;
		text-decoration: underline;
	}

	.content-card {
		background-color: #FFF5F5;
		border-radius: 1.25rem 1.25rem 0 1.25rem;
		box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);
		padding: 2.5rem 3rem;
	}

	h1 {
		font-family: 'clarendon-urw-extra-wide', serif;
		font-size: 2.75rem;
		font-weight: 200;
		color: #3d6258;
		line-height: 1.25;
		margin-bottom: 0.5rem;
	}

	.skill-tag {
		font-family: 'josefin-sans', sans-serif;
		font-size: 0.7rem;
		font-weight: 700;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		padding: 0.25rem 0.7rem;
		border-radius: 4px;
		background-color: rgba(61, 98, 88, 0.1);
		color: #3d6258;
		border: 1px solid rgba(61, 98, 88, 0.3);
	}

	.thumbnail-wrap {
		border-radius: 10px;
		overflow: hidden;
		box-shadow: 0 2px 12px rgba(0, 0, 0, 0.14);
	}
	.thumbnail {
		width: 100%;
		height: auto;
		display: block;
	}

	.content :global(p.blog) {
		color: #2c4a42;
		font-family: 'josefin-sans', sans-serif;
		font-size: 1.05rem;
		font-weight: 400;
		line-height: 1.85;
		text-align: left;
		margin-bottom: 0;
	}
	.content :global(img) {
		max-width: 100%;
		border-radius: 0.75rem;
		margin: 1.5rem 0;
	}
	.content :global(a.link) {
		color: #3d6258;
		text-decoration: underline;
		text-underline-offset: 3px;
		font-size: inherit;
		font-family: inherit;
		font-weight: 600;
		transition: color 0.2s;
	}
	.content :global(a.link:hover) {
		color: #1e3830;
	}
	.content :global(strong) {
		color: #1e3830;
		font-weight: 700;
	}

	.cta-btn {
		display: inline-block;
		padding: 0.75rem 1.75rem;
		border: 2px solid #3d6258;
		border-radius: 9999px;
		font-family: 'josefin-sans', sans-serif;
		font-size: 0.95rem;
		font-weight: 600;
		color: #3d6258;
		text-decoration: none;
		transition: background-color 0.2s ease, color 0.2s ease;
	}
	.cta-btn:hover {
		background-color: #3d6258;
		color: #FFF5F5;
	}

	.tech-stack {
		border-top: 1px solid rgba(61, 98, 88, 0.15);
		padding-top: 1.5rem;
	}

	@media (max-width: 768px) {
		h1 { font-size: 2rem; }
		.content-card { padding: 1.75rem 1.5rem; }
	}
</style>
