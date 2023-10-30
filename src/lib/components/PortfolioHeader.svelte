<script>
	import { onMount } from 'svelte'
	import { fade, fly } from 'svelte/transition'
	import Rolodex from './Rolodex.svelte'
	import TitleCard from './TitleCard.svelte'
	let animate = false

	onMount(() => {
		animate = true
	})
</script>

<main class="m-auto">
	{#if animate}
		<div
			class=" mr-24 mt-12 flex justify-end pr-4"
			in:fly={{ y: 150, duration: 1000 }}
			out:fade={{ duration: 100 }}>
			<h1 class="text-right">
				Kailen Santos is <Rolodex />
			</h1>
		</div>
		<br />

		<div
			class=" container ml-auto mr-24 flex w-3/4 justify-items-end"
			in:fly={{ y: 150, duration: 2000, delay: 50 }}
			out:fade={{ duration: 200, delay: 200 }}>
			<h3 class="justify-end text-right">
				Welcome to my portfolio! Here, you can find a list of works that
				encapsulate the learning outcomes of my time in the Data
				Analytics and Visualization Master's Program at The Pratt
				Institute. Scroll down to view my selected projects.
			</h3>
		</div>
	{/if}
</main>
