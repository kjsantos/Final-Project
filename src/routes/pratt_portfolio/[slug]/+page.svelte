<script>
	export let data

	import '/src/app.css'
</script>

<div class="flex-column container mx-auto w-2/3">
	<br /><br />
	<div class="flex-column container w-4/5 pb-4">
		<h1>{data.post.title}</h1>
	</div>

	<img src={data.post.thumbnail} class=" mx-auto w-fit pb-6" alt="" />
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
