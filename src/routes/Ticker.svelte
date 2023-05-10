<script>
	import Marquee from 'svelte-fast-marquee'
	let play = true
	export let open = false
</script>

<aside class="block p-2 hover:text-gray-900" class:open>
	<Marquee speed={40} {play}>
		<p class="ticker text-right">
			&nbsp;&nbsp;This website was made using SvelteKit and Tailwind.css
			&nbsp;&nbsp;&nbsp;<br />
		</p>
		<p class="ticker text-right">
			This is not a sponsored promotion of SvelteKit or Tailwind
			&nbsp;&nbsp;&nbsp;<br />
		</p>
		<p class="ticker text-right">
			But I do think making websites with this stack is fun &nbsp;<br />
		</p>
	</Marquee>
</aside>

<style lang="postcss">
	aside {
		left: -100%;
		transition: left 0.3s ease-in-out;
	}

	.open {
		opacity: 0;
	}
</style>
