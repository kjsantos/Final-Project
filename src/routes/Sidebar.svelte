<script>
	export let open = false

	function handleClick() {
		open = !open
	}
</script>

<aside
	class="absolute h-full w-1/6 rounded-e-lg text-gray-600 shadow-lg"
	style="background-color: #A3B39A"
	class:open>
	<nav class="p-12 text-xl">
		<br />
		<a class="block p-1 hover:text-gray-900" on:click={handleClick} href="/"
			>Home</a>
		<a
			class="block p-1 hover:text-gray-900"
			on:click={handleClick}
			href="/about">About</a>
		<a
			class="block p-1 hover:text-gray-900"
			on:click={handleClick}
			href="/projects">Projects</a>
		<a
			class="block p-1 hover:text-gray-900"
			on:click={handleClick}
			href="/writing">Writing</a>
		<a
			class="block p-1 hover:text-gray-900"
			on:click={handleClick}
			href="/contact">Contact</a>
	</nav>
</aside>

<style>
	aside {
		left: -100%;
		transition: left 0.3s ease-in-out;
	}

	.open {
		position: absolute;
		left: 0;
	}
</style>
