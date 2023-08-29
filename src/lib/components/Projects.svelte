<script>
	import { posts } from '$lib/projects.js'
	import { fade } from 'svelte/transition'
	import Test from './Test.svelte'
</script>
<main>
		<div
			class="flex-column h-screen snap-y snap-mandatory overflow-auto snap-always"
			in:fade={{duration: 600, delay: 1 }}
			out:fade={{duration: 600 }}>
			{#each posts as { slug, title, subtitle, thumbnail, link }, i}
				{#if i % 2 == 1}
					<div
						class=" flex h-screen snap-start bg-[#A1B5AA] space-x-5">
						<div class="flex-column h-auto p-10 w-4/5 justify-center my-auto">
							<h1 style='text-align: left; font-size: 3.75rem; color: #D9D2B0; text-shadow: 1px 1px 3px gray;'>{title}</h1>
							<div class="flex h-fit pt-6">
								<br />{@html subtitle}
							</div>
						</div>
						<div class="flex container"><img
							class="object-contain my-auto h-screen p-10 rounded-md"
							src="{thumbnail}"
							alt="" />
						</div>
					</div>
				{:else}
					<div
						class=" flex h-screen snap-start bg-[#a7c1c2] space-x-5">
						<div class="flex container w-full"><img
							class=" object-fill my-auto w-full p-10 rounded-md"
							src="{thumbnail}"
							alt="" />
						</div>
						<div class="flex-column h-auto p-10 w-4/5 justify-center my-auto">
							<h1 style='text-align: right; font-size: 3.75rem; color: #DDF2D8; text-shadow: 1px 1px 3px SlateGray;'>{title}</h1>
							<div class="flex h-fit pt-6">
								<br />{@html subtitle}
							</div>
						</div>
					</div>
				{/if}
			{/each}
			
		</div>
</main>

<style>

</style>
