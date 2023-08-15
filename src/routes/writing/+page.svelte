<script lang="ts">
	import GotoTop from '$lib/components/GotoTop.svelte'
	import Project from './Project.svelte'

	function handleObserver(x: CustomEvent<any>) {
		console.info(x.detail.observing)
	}
</script>

<main>
	<Project />

	<GotoTop showAtPixel={50} />
</main>
