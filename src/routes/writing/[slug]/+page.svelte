<script>
export let data
import GotoTop from '$lib/components/GotoTop.svelte'
</script>

<svelte:head>
	<title>{data.post.title} — Kailen Santos</title> 
</svelte:head>

<main class="min-h-screen py-16">
<div class="mx-auto max-w-3xl px-6">

<nav class="mb-6" aria-label="Breadcrumb">
<a href="/writing" class="back- Back to Writing</a>link">
</nav>

<article class="content-card">

<header class="mb-8">
<h1>{data.post.title}</h1>
{#if data.post.subtitle}
<p class="article-sub">{data.post.subtitle}</p>
{/if}
</header>

{#if data.post.image}
<div class="hero-image-wrap mb-8">
<img src={data.post.image} alt="Illustration for {data.post.title}" class="hero-image" />
</div>
{/if}

{#if data.post.content}
<section class="article-body">
{@html data.post.content}
</section>
{/if}

{#if data.post.link && data.post.link.startsWith('http')}
<div class="mt-10">
<a href={data.post.link} class="cta-btn" target="_blank" rel="noopener noreferrer">
Read full piece 
</a>
</div>
{/if}

</article>
</div>
</main>

<GotoTop showAtPixel={300} />

<style>
.back-link {
font-family: 'josefin-sans', sans-serif;
font-size: 0.95rem;
color: #2c4a42;
font-weight: 600;
text-decoration: none;
transition: color 0.2s;
}
.back-link:hover {
color: #1e3830;
text-decoration: underline;
}

.content-card {
background-color: #FFF5F5;
border-radius: 1.25rem 1.25rem 0 1.25rem;
box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);
padding: 2.5rem 3rem;
}

h1 {
font-family: 'clarendon-urw-extra-wide', serif;
font-size: 2.75rem;
font-weight: 200;
color: #3d6258;
line-height: 1.25;
margin-bottom: 0.5rem;
}

.article-sub {
font-family: 'josefin-sans', sans-serif;
font-size: 1rem;
color: #4a6a62;
font-weight: 400;
line-height: 1.6;
}

.hero-image-wrap {
border-radius: 10px;
overflow: hidden;
box-shadow: 0 2px 12px rgba(0, 0, 0, 0.14);
}
.hero-image {
width: 100%;
height: auto;
display: block;
}

.article-body :global(p.blog) {
font-family: 'josefin-sans', sans-serif;
font-size: 1.05rem;
color: #2c4a42;
font-weight: 400;
line-height: 1.85;
margin-bottom: 1.25rem;
}
.article-body :global(b) {
color: #1e3830;
font-weight: 700;
font-family: 'josefin-sans', sans-serif;
font-size: inherit;
}
.article-body :global(a.link) {
color: #3d6258;
text-decoration: underline;
text-underline-offset: 3px;
font-family: inherit;
font-size: inherit;
font-weight: 600;
transition: color 0.2s;
}
.article-body :global(a.link:hover) {
color: #1e3830;
}

.cta-btn {
display: inline-block;
padding: 0.75rem 1.75rem;
border: 2px solid #3d6258;
border-radius: 9999px;
font-family: 'josefin-sans', sans-serif;
font-size: 0.95rem;
font-weight: 600;
color: #3d6258;
text-decoration: none;
transition: background-color 0.2s ease, color 0.2s ease;
}
.cta-btn:hover {
background-color: #3d6258;
color: #FFF5F5;
}

@media (max-width: 768px) {
h1 { font-size: 2rem; }
.content-card { padding: 1.75rem 1.5rem; }
}
</style>
