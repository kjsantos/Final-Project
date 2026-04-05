<script>
import { fade } from 'svelte/transition'
</script>

<svelte:head>
<title>About — Kailen Santos</title>
</svelte:head>

<main class="min-h-screen pt-20 pb-16" in:fade={{ duration: 400 }}>
<section class="mx-auto max-w-3xl px-6">

<h1 class="page-title">About</h1>

<!-- Profile card -->
<div class="profile-card">
<img
class="profile-photo"
src="/images/IMG_0624.jpg"
alt="Kailen Santos in San Francisco" />
<div class="profile-text">
<h2>Kailen Santos</h2>
<p class="tagline">Data Engineer &amp; Web Developer at the MTA</p>
</div>
</div>

<!-- Bio body -->
<div class="about-body">
<p>
I'm a data professional at the Metropolitan Transportation Authority (MTA), where I work on tools
that make capital planning data accessible to the public — from interactive dashboards
tracking billions of dollars in transit investment to public-facing websites supporting
the agency's long-range planning efforts.
</p>
<p>
My background combines a Master of Science in Library and Information Science
from the Pratt Institute School of Information with years of hands-on experience
in data journalism, visualization, and engineering. Before the MTA, I wrote data-driven
stories for the Boston University News Service and contributed tutorials and analyses
to the Open Data Science Conference.
</p>
<p>
I'm drawn to the intersection of data, design, and technology — the places where
careful analysis and thoughtful presentation combine to make complex information
legible and actionable. Whether that's a neural network predicting street safety
or an interactive map of subway capital projects, I believe the best data work
is the kind that connects to people's real lives.
</p>
<p>
When I'm not in the data, I write. You can find some of that work in the
<a href="/writing">Writing</a> section.
</p>
</div>

</section>
</main>

<style>
.page-title {
font-family: 'clarendon-urw-extra-wide', serif;
font-size: 4rem;
font-weight: 200;
color: #2c4a42;
line-height: 1.2;
margin-bottom: 1.5rem;
}

/* Profile card */
.profile-card {
display: flex;
align-items: center;
gap: 2rem;
background-color: #FFF5F5;
border-radius: 1.25rem 1.25rem 0 1.25rem;
box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);
padding: 2rem 2.5rem;
margin-bottom: 1.25rem;
}

.profile-photo {
width: 110px;
height: 110px;
border-radius: 50%;
object-fit: cover;
border: 4px solid #b2dbce;
flex-shrink: 0;
}

.profile-text h2 {
font-family: 'clarendon-urw-extra-wide', serif;
font-size: 1.75rem;
font-weight: 200;
color: #3d6258;
line-height: 1.2;
margin-bottom: 0.35rem;
}

.tagline {
font-family: 'josefin-sans', sans-serif;
font-size: 0.95rem;
color: #4a6a62;
font-weight: 600;
}

/* Bio */
.about-body {
background-color: #FFF5F5;
border-radius: 1.25rem 1.25rem 0 1.25rem;
box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);
padding: 2rem 2.5rem;
}

.about-body p {
font-family: 'josefin-sans', sans-serif;
font-size: 1rem;
color: #4a6a62;
line-height: 1.8;
font-weight: 400;
margin-bottom: 1.25rem;
}

.about-body p:last-child {
margin-bottom: 0;
}

.about-body a {
color: #3d6258;
font-size: inherit;
font-weight: 600;
text-decoration: underline;
text-underline-offset: 3px;
}

.about-body a:hover {
color: #1e3830;
}

@media (max-width: 560px) {
.page-title { font-size: 2.5rem; }

.profile-card {
flex-direction: column;
align-items: flex-start;
gap: 1.25rem;
}
}
</style>
