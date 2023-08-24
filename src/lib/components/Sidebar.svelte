<script>
	export let open = false

	import Hamburger from "./Hamburger.svelte";

	function handleClick() {
		open = !open
	}
</script>

<aside
	class="fixed h-full top-0 w-1/6 rounded-e-sm text-gray-600 shadow-sm"
	style="background-color: #56664E"
	class:open>
	<Hamburger bind:open />
	<nav class="p-12 text-xl">
		<br />
		<a 
			class="block p-1 hover:text-gray-900" 
			on:click={handleClick} 
			href="/"
			data-sveltekit-reload>Home</a>
		<a
			class="block p-1 hover:text-gray-900"
			on:click={handleClick}
			href="/about"
			data-sveltekit-preload-data>About</a>
		<a
			class="block p-1 hover:text-gray-900"
			on:click={handleClick}
			href="/projects"
			data-sveltekit-preload-data>Projects</a>
		<a
			class="block p-1 hover:text-gray-900"
			on:click={handleClick}
			href="/writing"
			data-sveltekit-preload-data>Writing</a>
		<a
			class="block p-1 hover:text-gray-900"
			on:click={handleClick}
			href="/contact"
			data-sveltekit-preload-data>Contact</a>
	</nav>
</aside>

<style>
	aside {
		left: -100%;
		transition: left 0.1s ease-in-out;
	}

	.open {
		position: fixed;
		left: 0%;
		z-index: 55;
	}
</style>