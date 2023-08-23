<script>
	export let data
</script>

<div>
	<main>
		<slot />
	</main>
</div>

<style>
	p {
		color: white;
		font-style: normal;
		font-weight: 600;
		font-size: 1rem;
		font-family: 'josefin-sans', sans-serif;
	}

	b {
		color: slategrey;
		font-weight: 800;
		font-size: 1rem;
		line-height: 2rem;
		font-family: 'josefin-sans', sans-serif;
	}
</style>
