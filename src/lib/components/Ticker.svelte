<script>
	import Marquee from 'svelte-fast-marquee'
	let play = true
</script>

<aside class="my-auto flex overflow-visible pl-20 pt-1">
	<Marquee speed={40} {play}>
		<p class="ticker text-right">
			&nbsp;&nbsp;Data Engineer &amp; Web Developer at the MTA
			&nbsp;&nbsp;&nbsp;<br />
		</p>
		<p class="ticker text-right">
			Building tools that move New York &nbsp;&nbsp;&nbsp;<br />
		</p>
		<p class="ticker text-right">
			Made with SvelteKit and Tailwind &nbsp;<br />
		</p>
	</Marquee>
</aside>

<style lang="postcss">
	aside {
		left: 10%;
		transition: right 0.3s ease-in-out;
		max-height: fit-content;
	}
</style>
