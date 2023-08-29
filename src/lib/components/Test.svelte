<script>
	export let showOnPx = 150
	let hidden = true

	function goTop() {
		document.body.scrollIntoView()
	}

	function scrollContainer() {
		return document.documentElement || document.body
	}

	function handleOnScroll() {
		if (!scrollContainer()) {
			return
		}

		if (scrollContainer().scrollTop > showOnPx) {
			hidden = false
		} else {
			hidden = true
		}
	}
</script>

<svelte:window on:scroll={handleOnScroll} />

<div class="back-to-top" on:click={goTop} class:hidden>Back to top</div>

<style>
	.back-to-top {
		position: fixed;
		right: 20px;
		bottom: 20px;
		opacity: 1;
		z-index: 99;
		transition: opacity 0.5s, visibility 0.5s;
		background-color: black;
		color: white;
		user-select: none;
	}

	.back-to-top.hidden {
		visibility: hidden;
		opacity: 0;
	}
</style>
