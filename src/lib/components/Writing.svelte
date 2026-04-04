<script lang="ts">
import Saos from 'saos'
import { posts } from '$lib/writing.js'
</script>

<section class="writing-section" aria-label="Writing">
{#each posts as { title, subtitle, link, thumbnail }}
<Saos
animation={'fade-in .3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'}
animation_out={'slide-out-fwd-center 0.3s cubic-bezier(0.550, 0.085, 0.680, 0.530) both'}
top={80}
bottom={120}>
<a
href={link}
class="writing-card"
target={link.startsWith('http') ? '_blank' : undefined}
rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}>
<div class="card-thumb">
<img
src={thumbnail}
alt="Thumbnail for {title}" />
</div>
<div class="card-body">
<h2>{title}</h2>
<p>{subtitle}</p>
</div>
</a>
</Saos>
{/each}
</section>

<style>
.writing-section {
display: flex;
flex-direction: column;
gap: 1.25rem;
}

.writing-card {
display: flex;
flex-direction: row;
align-items: center;
gap: 1.5rem;
background-color: #FFF5F5;
border-radius: 1.25rem 1.25rem 0 1.25rem;
box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);
padding: 1.5rem;
text-decoration: none;
color: inherit;
transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.writing-card:hover {
transform: translateY(-3px);
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
}

.card-thumb {
flex-shrink: 0;
width: 120px;
height: 90px;
border-radius: 0.75rem;
overflow: hidden;
background-color: #e8ede8;
}

.card-thumb img {
width: 100%;
height: 100%;
object-fit: cover;
}

.card-body {
flex: 1;
}

.card-body h2 {
font-family: 'clarendon-urw-extra-wide', serif;
font-size: 1.3rem;
font-weight: 400;
color: #6a8a7e;
line-height: 1.3;
margin-bottom: 0.5rem;
}

.card-body p {
font-family: 'josefin-sans', sans-serif;
font-size: 0.9rem;
color: #8a9ba8;
line-height: 1.5;
font-weight: 400;
}

@media (max-width: 560px) {
.writing-card {
flex-direction: column;
align-items: flex-start;
}

.card-thumb {
width: 100%;
height: 160px;
}
}
</style>
