<script>
import '../app.css'
import Navbar from '$lib/components/Navbar.svelte'
import Sidebar from '$lib/components/Sidebar.svelte'

export let open = false
</script>

<Sidebar bind:open />
<Navbar bind:sidebar={open} />

<svelte:head>
<link rel="stylesheet" href="https://use.typekit.net/qem3paa.css" />
</svelte:head>

<slot />
