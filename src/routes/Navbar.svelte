<script>
	import Hamburger from './Hamburger.svelte'
	import Ticker from './Ticker.svelte'

	export let sidebar = false
</script>

<header class="flex items-center justify-between p-2">
	<nav class="flex">
		<Hamburger bind:open={sidebar} />
		<Ticker bind:open={sidebar} />
	</nav>
</header>
