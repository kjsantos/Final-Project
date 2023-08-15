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
			class="mx-52 my-10 flex h-full justify-between rounded-t-3xl rounded-bl-3xl p-8 shadow-2xl shadow-slate-800"
			style="background-color: #FFF5F5"
			in:fly={{ y: 300, duration: 1200 }}
			out:fade={{ duration: 100 }}>
			<div class="justify-items-left container w-auto">
				<div class="pl-26 w-2/5">
					<h2
						in:fly={{ y: 300, duration: 1000, delay: 100 }}
						out:fade={{ duration: 100 }}>
						Interactive Campaign Finance Story
					</h2>
					<br />
					<p
						in:fly={{ y: 300, duration: 1500, delay: 50 }}
						out:fade={{ duration: 100 }}>
						A click-through visualization created using Svelte and
						Tailwind.css. Data obtained from OCPF.
					</p>
				</div>
			</div>
		</div>
		<div
			class="mx-52 my-10 flex h-full justify-between rounded-t-3xl rounded-bl-3xl p-8 shadow-2xl shadow-slate-800"
			style="background-color: #FFF5F5"
			in:fly={{ y: 300, duration: 1200 }}
			out:fade={{ duration: 100 }}>
			<div class="justify-items-left container w-auto">
				<div class="pl-26 w-2/5">
					<h2
						in:fly={{ y: 300, duration: 1000, delay: 100 }}
						out:fade={{ duration: 100 }}>
						NYPD Complaint Review Analysis
					</h2>
					<br />
					<p
						in:fly={{ y: 300, duration: 1500, delay: 50 }}
						out:fade={{ duration: 100 }}>
						Mini investigative piece featuring D3 visualizations and
						analysis in Python and R. Created using Reveal.js.
					</p>
				</div>
			</div>
		</div>
	{/if}
</main>
