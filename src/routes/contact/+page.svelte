<script>
	import { fade } from 'svelte/transition'
</script>

<svelte:head>
	<title>Contact — Kailen Santos</title>
</svelte:head>

<main
	class="flex min-h-screen items-center justify-center px-6"
	in:fade={{ duration: 400 }}>
	<div class="contact-card">
		<h1>Say hello.</h1>
		<p class="subtitle">
			I'm always open to conversations about data, design, and technology.
		</p>
		<a
			href="mailto:kailenjsantos@gmail.com"
			class="email-link"
			aria-label="Send email to kailenjsantos@gmail.com">
			kailenjsantos@gmail.com
		</a>
	</div>
</main>

<style lang="postcss">
	.contact-card {
		max-width: 560px;
		width: 100%;
		background-color: #FFF5F5;
		border-radius: 1.5rem 1.5rem 0 1.5rem;
		padding: 3rem 3.5rem;
		box-shadow: 0 8px 40px rgba(0, 0, 0, 0.14);
		text-align: center;
	}

	h1 {
		font-family: 'clarendon-urw-extra-wide', serif;
		font-size: 3.5rem;
		font-weight: 200;
		color: #3d6258;
		line-height: 1.2;
		margin-bottom: 1rem;
	}

	.subtitle {
		font-family: 'josefin-sans', sans-serif;
		font-size: 1rem;
		color: #4a6a62;
		line-height: 1.6;
		font-weight: 400;
		margin-bottom: 2rem;
	}

	.email-link {
		display: inline-block;
		font-family: 'josefin-sans', sans-serif;
		font-size: 1.1rem;
		font-weight: 600;
		color: #3d6258;
		text-decoration: none;
		border-bottom: 2px solid transparent;
		transition: border-color 0.2s ease, color 0.2s ease;
		padding-bottom: 2px;
	}

	.email-link:hover {
		color: #1e3830;
		border-color: #3d6258;
	}

	@media (max-width: 600px) {
		h1 {
			font-size: 2.5rem;
		}

		.contact-card {
			padding: 2rem 1.5rem;
		}
	}
</style>
