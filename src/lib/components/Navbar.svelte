<script>
	import Hamburger from './Hamburger.svelte'
	import Ticker from './Ticker.svelte'

	export let sidebar = false
</script>

<header class="fixed my-auto bg-transparent">
	<nav class="flex">
		<Hamburger bind:open={sidebar} />
	</nav>
</header>

<style>
	.fixed {
		display: flex;
		position: fixed;
		top: 0;
		justify-content: left;
		vertical-align: center;
		z-index: 30;
		background-color: transparent;
		padding: 0.2rem;
		width: 100%;
	}
</style>
