<script>
	import { onMount } from 'svelte'
	import { fade, fly } from 'svelte/transition'
	let animate = false

	onMount(() => {
		animate = true
	})
</script>

<main class="m-auto">
	{#if animate}
		<div
			class="container mx-auto flex w-2/3 rounded-t-3xl rounded-bl-3xl align-middle shadow-2xl shadow-slate-800"
			style="background-color: #FFF5F5">
			<img
				class=" mx-6 my-auto flex h-64 rounded-full border-8 shadow-gray-400"
				alt="Kailen Santos in San Francisco"
				src="/images/IMG_0624.jpg"
				in:fly={{ y: 150, duration: 1000 }}
				out:fade={{ duration: 100 }} />
			<div class="container flex w-full">
				<div
					class="flex-row content-center justify-center px-10 py-6 text-right">
					<h1
						in:fly={{ y: 150, duration: 1000 }}
						out:fade={{ duration: 100 }}>
						Kailen Santos
					</h1>
					<br />
					<p
						in:fly={{ y: 200, duration: 1500, delay: 50 }}
						out:fade={{ duration: 80 }}
						style="font-size: 1.25em;">
						Hi there! I am a data analyst with a passion for data
						visualization and data storytelling. As a Master's
						Student at the Pratt Institute School of Information, I
						am interested in the intersection of data, design, and
						technology. Let's build something together!
					</p>
				</div>
			</div>
		</div>
	{/if}
</main>
