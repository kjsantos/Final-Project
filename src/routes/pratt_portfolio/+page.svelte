<script>
	import PortfolioHeader from '$lib/components/PortfolioHeader.svelte'
	import { fly, fade } from 'svelte/transition'
	import { onMount } from 'svelte'
	import PrattProjects from '$lib/components/PrattProjects.svelte'

	let animate = false

	onMount(() => {
		animate = true
	})
</script>

<main>
	{#if animate}
		<div
			class="flex-column h-screen snap-y snap-mandatory snap-always overflow-auto"
			in:fade={{ duration: 600, delay: 200 }}
			out:fade={{ duration: 600 }}>
			<div class=" flex h-screen snap-start space-x-5">
				<img
					class=" my-auto ml-48 flex h-1/2 justify-items-center rounded-full border-8 shadow-gray-400"
					alt="Kailen Santos in San Francisco"
					src="/images/IMG_0624.jpg"
					in:fly={{ y: 150, duration: 1000, delay: 1 }}
					out:fade={{ duration: 600, delay: 1 }} />
				<PortfolioHeader />
			</div>

			<div class="mb-10 flex h-fit snap-start justify-center space-x-5">
				<div class="container w-full">
					<PrattProjects />
				</div>
			</div>
		</div>
	{/if}
</main>
