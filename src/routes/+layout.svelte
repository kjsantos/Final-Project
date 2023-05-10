<script>
	import '../app.css'
	import Navbar from './Navbar.svelte'
	import Sidebar from './Sidebar.svelte'

	let open = false
</script>

<Sidebar bind:open />
<Navbar bind:sidebar={open} />

<svelte:head>
	<link rel="stylesheet" href="https://use.typekit.net/qem3paa.css" />
	<style lang="postcss">
		h1 {
			color: #9ab3ae;
			font-style: normal;
			font-weight: 200;
			font-size: 4.75rem;
			line-height: 1.5;
			font-family: 'clarendon-urw-extra-wide', serif;
		}
		p {
			color: #abb3ae;
			font-style: normal;
			font-weight: 600;
			font-size: 1rem;
			line-height: 2rem;
			font-family: 'josefin-sans', sans-serif;
		}
		a {
			color: #f1ffe8;
			font-style: normal;
			font-weight: 200;
			font-size: 1.75rem;
			line-height: 1.25;
			font-family: 'clarendon-urw-extra-wide', serif;
		}
		body {
			background-color: #a3b39a;
			padding: 0;
		}
		.box {
			background-color: #9ab3ae;
		}
		.ticker {
			color: #f1ffe8;
			font-style: italic;
			font-weight: 600;
			font-family: 'obviously', sans-serif;
		}
		@media (min-width: 480px) {
			h1 {
				font-size: 1.75rem;
				line-height: 1.5;
			}
			p {
				font-size: 0.25rem;
				line-height: 1rem;
			}
			a {
				font-size: 0.5rem;
				line-height: 1.25;
			}
			.box {
				width: 45%;
				height: 45%;
			}
			.container {
				max-width: 480px;
			}
		}
		@media (min-width: 640px) {
			h1 {
				font-size: 2.75rem;
				line-height: 1.5;
			}
			p {
				font-size: 0.5rem;
				line-height: 1rem;
			}
			a {
				font-size: 1rem;
				line-height: 1.25;
			}
			.box {
				width: 60%;
				height: 60%;
			}
			.container {
				max-width: 640px;
			}
		}
		@media (min-width: 768px) {
			h1 {
				font-size: 3.5rem;
				line-height: 1.5;
			}
			p {
				font-size: 0.5rem;
				line-height: 0.5rem;
			}
			a {
				font-size: 1rem;
				line-height: 1.25;
			}
			.box {
				width: 60%;
				height: 60%;
			}
			.container {
				max-width: 768px;
			}
		}
		@media (min-width: 1024px) {
			h1 {
				font-size: 4rem;
				line-height: 1.5;
			}
			p {
				font-size: 1.5rem;
				line-height: 2rem;
			}
			a {
				font-size: 1rem;
				line-height: 1.25;
			}
			.box {
				width: 70%;
				height: 70%;
			}
			.container {
				max-width: 1024px;
			}
		}
		@media (min-width: 1280px) {
			h1 {
				font-size: 4rem;
				line-height: 1.5;
			}
			p {
				font-size: 1.5rem;
				line-height: 2rem;
			}
			a {
				font-size: 2rem;
				line-height: 1.25;
			}
			.box {
				width: 80%;
				height: 80%;
			}
			.container {
				max-width: 1280px;
			}
		}
		@media (min-width: 1536px) {
			h1 {
				font-size: 4.75rem;
				line-height: 1.5;
			}
			p {
				font-size: 2rem;
				line-height: 1rem;
			}
			a {
				font-size: 2.25rem;
				line-height: 1.25;
			}
			.box {
				width: 100%;
				height: 100%;
			}
			.container {
				max-width: 1536px;
			}
			.ticker {
				display: inline-block;
				box-sizing: content-box;
				padding-right: 100%;
				height: 4rem;
				line-height: 4rem;
				white-space: nowrap;
			}
		}
	</style>
</svelte:head>

<slot />
