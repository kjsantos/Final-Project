<script>
	export let open = false

	import Hamburger from "./Hamburger.svelte";

	function handleClick() {
		open = !open
	}
</script>

<aside
	class="fixed h-screen w-screen rounded-e-sm flex justify-center items-center text-gray-600"
	style="background-color: #B2DBCE; z-index: 10;"
	class:open>
	<nav class="p-12 text-xl my-auto h-fit ">
		<a 
			class="block p-10 hover:text-gray-900 text-center" 
			on:click={handleClick} 
			href="/"
			data-sveltekit-preload-data>Home</a>
		<a
		class="block p-10 hover:text-gray-900 text-center"
		on:click={handleClick}
			href="/about"
			data-sveltekit-preload-data>About</a>
		<a
			class="block p-10 hover:text-gray-900 text-center"
			on:click={handleClick}
			href="/projects"
			data-sveltekit-preload-data>Projects</a>
		<a
			class="block p-10 hover:text-gray-900 text-center"
			on:click={handleClick}
			href="/writing"
			data-sveltekit-preload-data>Writing</a>
			<a
			class="block p-10 hover:text-gray-900 text-center"
			on:click={handleClick}
			href="/contact"
			data-sveltekit-preload-data>Contact</a>
	</nav>
</aside>

<style>
	aside {
		top: -100%;
		transition: top 0.3s ease-in;
	}

	.open {
		position: absolute;
		top: 0%;
		text-justify: center;
		transition: top 0.5s ease-in;
	}
</style>