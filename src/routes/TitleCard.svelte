<script>
	import { onMount } from 'svelte'
	import { fade, fly } from 'svelte/transition'
	let animate = false

	onMount(() => {
		animate = true
	})
</script>

<main>
	{#if animate}
		<div
			class="container mx-32 my-10 flex w-4/5 justify-between rounded-t-3xl rounded-bl-3xl p-8 shadow-2xl shadow-slate-800"
			style="background-color: #FFF5F5">
			<div
				class="box my-16 flex justify-center rounded-full shadow-slate-800 sm:p-1 md:p-2 xl:p-6"
				in:fly={{ y: 300, duration: 1000 }}
				out:fade={{ duration: 100 }}>
				<img
					class="flex justify-center rounded-full border-2 border-transparent shadow-gray-400"
					alt="Kailen Santos in San Francisco"
					src="/images/IMG_0624.jpg" />
			</div>
			<div class="container flex justify-items-end">
				<div
					class="ml-26 flex-column text-right sm:mt-6 sm:p-2 md:mt-20 md:p-4 xl:mt-32 xl:p-8">
					<h1
						in:fly={{ y: 300, duration: 1000, delay: 100 }}
						out:fade={{ duration: 100 }}>
						Kailen Santos
					</h1>
					<br /><br />
					<p
						in:fly={{ y: 300, duration: 1500, delay: 250 }}
						out:fade={{ duration: 100 }}>
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
