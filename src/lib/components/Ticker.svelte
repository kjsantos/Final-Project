<script>
	import Marquee from 'svelte-fast-marquee'
	let play = true
</script>

<aside class="my-auto flex overflow-visible pl-20 pt-1">
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
		left: 10%;
		transition: right 0.3s ease-in-out;
		max-height: fit-content;
	}
</style>
