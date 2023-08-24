<script>
	import Hamburger from './Hamburger.svelte'
	import Ticker from './Ticker.svelte'

	export let sidebar = false
</script>

<header class="fixed my-auto">
	<nav class="flex align-bottom">
		<Hamburger bind:open={sidebar} />
	</nav>

	<Ticker bind:open={sidebar} />
</header>

<style>
	.fixed {
		--tw-bg-opacity: 0;
		--tw-backdrop-blur: blur(4px);
		display: flex;
		position: fixed;
		top: 0;
		justify-content: center;
		align-items: center;
		z-index: 30;
		background-color: rgb(163, 179, 154);
		padding: 0.2rem;
		width: 100%;
	}
</style>
