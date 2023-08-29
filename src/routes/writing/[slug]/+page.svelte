<script>
	export let data

	import '/src/app.css'
</script>

<div class="flex-column container mx-auto w-3/5">
	<br /><br />
	<div class="flex-column container w-1/2">
		<h1>{data.post.title}</h1>
		<img src={data.post.image} alt="" />
	</div>
	{@html data.post.content}
	<br /><br />
</div>

<style lang="postcss">
	h1 {
		color: white;
	}

	p {
		color: white;
		font-style: normal;
		font-weight: 200;
		font-size: 1.5rem;
		line-height: 2rem;
		font-family: 'josefin-sans', sans-serif;
	}
</style>
