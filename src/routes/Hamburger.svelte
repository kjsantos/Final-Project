<script>
	export let open = false
</script>

<button
	class=" ml-2 cursor-pointer pr-8 pt-1 text-green-100 hover:text-gray-700 focus:outline-none"
	class:open
	on:click={() => (open = !open)}>
	<svg width="50" height="50">
		<circle
			id="circle"
			cx="20"
			cy="22"
			r="20"
			fill="#A3B39A"
			opacity=".4" />
		<line id="top" x1="6" y1="14" x2="32" y2="14" />
		<line id="middle" x1="6" y1="22" x2="24" y2="22" />
		<line id="bottom" x1="6" y1="30" x2="32" y2="30" />
	</svg>
</button>

<style>
	svg {
		transition: transform 0.3s ease-in-out;
		min-height: 50px;
	}

	svg line {
		stroke: currentColor;
		stroke-width: 3;
		transition: transform 0.3s ease-in-out;
	}

	button {
		z-index: 20;
	}

	.open svg {
		transform: scale(0.7);
	}

	.open circle {
		opacity: 0;
	}

	.open #top {
		transform: translate(17px, 0px) rotate(45deg);
	}

	.open #middle {
		opacity: 0;
	}

	.open #bottom {
		transform: translate(-14px, 15px) rotate(-45deg);
	}
</style>
