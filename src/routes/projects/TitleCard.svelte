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
			class="mx-32 my-10 flex h-full justify-between rounded-t-3xl rounded-bl-3xl p-8 shadow-2xl shadow-slate-800"
			style="background-color: #FFF5F5">
			<div
				class="box w-2/5 justify-center rounded-3xl shadow-2xl shadow-slate-800"
				in:fly={{ y: 300, duration: 1000 }}
				out:fade={{ duration: 100 }}>
				<img
					class="m-12 justify-center rounded-3xl border-2 border-neutral-400 shadow-2xl shadow-gray-400"
					alt="Kailen Santos in San Francisco"
					src="/images/IMG_0624.jpg" />
			</div>
			<div class="container w-auto justify-items-end">
				<div class="pl-26 mt-32 text-right">
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
						visualization and <br />data storytelling. As a Master's
						Student at the Pratt Institute <br />School of
						Information, I am interested in the intersection of
						<br />data, design, and technology. Let's build
						something together!
					</p>
				</div>
			</div>
		</div>
	{/if}
</main>
