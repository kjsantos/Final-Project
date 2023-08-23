<script lang="ts">
	import GotoTop from '$lib/components/GotoTop.svelte'
	import Writing from '$lib/components/Writing.svelte'

	export let data
</script>

<main>
	<Writing />

	<GotoTop showAtPixel={50} />
</main>
