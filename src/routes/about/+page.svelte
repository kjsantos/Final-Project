<script>
	import TitleCard from '$lib/components/TitleCard.svelte'
	import { fade } from 'svelte/transition'
</script>

<div class="min-h-screen pt-20 pb-16 px-6" in:fade={{ duration: 400 }}>
	<div class="mx-auto max-w-3xl">
		<TitleCard />

		<div class="about-body mt-12">
			<h2>About me</h2>
			<p>
				I'm a data professional at the Metropolitan Transportation Authority (MTA), where I work on tools
				that make capital planning data accessible to the public — from interactive dashboards
				tracking billions of dollars in transit investment to public-facing websites supporting
				the agency's long-range planning efforts.
			</p>
			<p>
				My background combines a Master of Science in Library and Information Science
				from the Pratt Institute School of Information with years of hands-on experience
				in data journalism, visualization, and engineering. Before the MTA, I wrote data-driven
				stories for the Boston University News Service and contributed tutorials and analyses
				to the Open Data Science Conference.
			</p>
			<p>
				I'm drawn to the intersection of data, design, and technology — the places where
				careful analysis and thoughtful presentation combine to make complex information
				legible and actionable. Whether that's a neural network predicting street safety
				or an interactive map of subway capital projects, I believe the best data work
				is the kind that connects to people's real lives.
			</p>
			<p>
				When I'm not in the data, I write. You can find some of that work in the
				<a href="/writing">Writing</a> section.
			</p>
		</div>
	</div>
</div>

<style lang="postcss">
	.about-body {
		background-color: #FFF5F5;
		border-radius: 1.5rem 1.5rem 0 1.5rem;
		padding: 2.5rem 3rem;
		box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
	}

	h2 {
		font-family: 'clarendon-urw-extra-wide', serif;
		font-size: 2rem;
		font-weight: 200;
		color: #9ab3ae;
		margin-bottom: 1.25rem;
	}

	p {
		font-family: 'josefin-sans', sans-serif;
		font-size: 1rem;
		color: #4a5568;
		line-height: 1.8;
		font-weight: 400;
		margin-bottom: 1.25rem;
	}

	a {
		color: #9ab3ae;
		text-decoration: underline;
		text-underline-offset: 3px;
		font-size: inherit;
		font-weight: 600;
	}

	a:hover {
		color: #6a8a7e;
	}

	@media (max-width: 640px) {
		.about-body {
			padding: 1.5rem;
		}
	}
</style>

