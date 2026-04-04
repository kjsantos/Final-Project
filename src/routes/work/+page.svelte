<script>
	import { projects } from '$lib/work.js'
	import { fade } from 'svelte/transition'
	import GotoTop from '$lib/components/GotoTop.svelte'

	const ALL = 'All'
	const tags = [ALL, 'Data Visualization', 'Web Development', 'Data Analysis', 'Machine Learning', 'UX Research']

	let activeTag = ALL

	$: filtered = activeTag === ALL
		? projects
		: projects.filter((p) => p.tags.includes(activeTag))
</script>

<svelte:head>
	<title>Work — Kailen Santos</title>
</svelte:head>

<main class="min-h-screen pt-20 pb-16" in:fade={{ duration: 400 }}>
	<section class="mx-auto max-w-6xl px-6">
		<h1 class="mb-2">Work</h1>
		<p class="mb-10" style="font-size: 1.1rem; color: #9ab3ae;">
			A selection of projects spanning data visualization, web development, machine learning, and UX research.
		</p>

		<!-- Filter bar -->
		<div class="mb-10 flex flex-wrap gap-3" role="group" aria-label="Filter projects by skill">
			{#each tags as tag}
				<button
					class="filter-btn"
					class:active={activeTag === tag}
					on:click={() => (activeTag = tag)}
					aria-pressed={activeTag === tag}>
					{tag}
				</button>
			{/each}
		</div>

		<!-- Project grid -->
		<div class="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
			{#each filtered as project (project.slug)}
				<a
					href="/work/{project.slug}"
					class="project-card group"
					in:fade={{ duration: 300 }}>
					<div class="card-image-wrap">
						<img
							src={project.thumbnail}
							alt="Preview of {project.title}"
							class="card-image" />
					</div>
					<div class="card-body">
						<h2 class="card-title">{project.title}</h2>
						<p class="card-desc">{project.description}</p>

						<!-- Skill tags -->
						<div class="mt-3 flex flex-wrap gap-2">
							{#each project.tags as tag}
								<span class="skill-tag">{tag}</span>
							{/each}
						</div>

						<!-- Tech icons -->
						{#if project.tech.length > 0}
							<div class="mt-4 flex items-center gap-3">
								{#each project.tech as icon}
									<img
										src="/images/{icon}"
										alt={icon.replace('-logo.png', '')}
										class="h-7 w-auto opacity-70 group-hover:opacity-100 transition-opacity" />
								{/each}
							</div>
						{/if}
					</div>
				</a>
			{/each}
		</div>

		{#if filtered.length === 0}
			<p class="mt-16 text-center" style="color: #9ab3ae;">No projects in this category yet.</p>
		{/if}
	</section>
</main>

<GotoTop showAtPixel={300} />

<style lang="postcss">
	h1 {
		color: #9ab3ae;
		font-family: 'clarendon-urw-extra-wide', serif;
		font-size: 4rem;
		font-weight: 200;
		line-height: 1.2;
	}

	p {
		font-family: 'josefin-sans', sans-serif;
	}

	/* Filter buttons */
	.filter-btn {
		border: 2px solid #9ab3ae;
		border-radius: 9999px;
		padding: 0.4rem 1.1rem;
		font-family: 'josefin-sans', sans-serif;
		font-size: 0.875rem;
		font-weight: 600;
		color: #9ab3ae;
		background: transparent;
		cursor: pointer;
		transition: background-color 0.2s ease, color 0.2s ease;
	}

	.filter-btn:hover,
	.filter-btn.active {
		background-color: #9ab3ae;
		color: #f1ffe8;
	}

	/* Cards */
	.project-card {
		display: flex;
		flex-direction: column;
		border-radius: 1.25rem 1.25rem 0 1.25rem;
		background-color: #FFF5F5;
		box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);
		overflow: hidden;
		transition: transform 0.2s ease, box-shadow 0.2s ease;
		text-decoration: none;
		color: inherit;
	}

	.project-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
	}

	.card-image-wrap {
		width: 100%;
		height: 180px;
		overflow: hidden;
		background-color: #e8ede8;
	}

	.card-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.3s ease;
	}

	.project-card:hover .card-image {
		transform: scale(1.03);
	}

	.card-body {
		padding: 1.25rem 1.5rem 1.5rem;
		flex: 1;
		display: flex;
		flex-direction: column;
	}

	.card-title {
		font-family: 'clarendon-urw-extra-wide', serif;
		font-size: 1.25rem;
		font-weight: 400;
		color: #6a8a7e;
		line-height: 1.3;
		margin-bottom: 0.5rem;
	}

	.card-desc {
		font-family: 'josefin-sans', sans-serif;
		font-size: 0.875rem;
		color: #8a9ba8;
		line-height: 1.5;
		font-weight: 400;
	}

	.skill-tag {
		font-family: 'josefin-sans', sans-serif;
		font-size: 0.7rem;
		font-weight: 700;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		padding: 0.2rem 0.6rem;
		border-radius: 4px;
		background-color: #e8ede8;
		color: #6a8a7e;
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 2.5rem;
		}
	}
</style>
