<script>
	import { onMount, onDestroy } from 'svelte'
	import { slide } from 'svelte/transition'

	let greetings = [
		'a Data Analyst',
		'a Programmer',
		'a Researcher',
		'a Designer',
		'a Writer',
	]
	let index = 0
	let roller

	onMount(() => {
		roller = setInterval(() => {
			if (index === greetings.length - 1) index = 0
			else index++
		}, 2250)
	})

	onDestroy(() => {
		clearInterval(roller)
	})
</script>

{#key index}
	<div class=" container flex-shrink justify-end bg-purple-100">
		<h1 transition:slide class=" bg-purple-100">{greetings[index]}</h1>
	</div>
{/key}
