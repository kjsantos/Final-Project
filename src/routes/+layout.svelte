<script>
import '../app.css'
import Navbar from '$lib/components/Navbar.svelte'
import Sidebar from '$lib/components/Sidebar.svelte'

export let open = false
</script>

<Sidebar bind:open />
<Navbar bind:sidebar={open} />

<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="description" content="Kailen Santos — data professional at the MTA. Portfolio of data visualization, web development, and research projects." />
	<meta property="og:title" content="Kailen Santos" />
	<meta property="og:description" content="Data professional at the MTA. Portfolio of data visualization, web development, and research projects." />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary" />
	<link rel="stylesheet" href="https://use.typekit.net/qem3paa.css" />
</svelte:head>

<slot />
