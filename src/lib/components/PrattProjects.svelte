<script>
	import { posts } from '$lib/projects.js'
	import { fade } from 'svelte/transition'
	import Test from './Test.svelte'
</script>

<main>
	<div
		class="container my-auto h-screen snap-y snap-mandatory snap-always overflow-hidden"
		in:fade={{ duration: 600, delay: 1 }}
		out:fade={{ duration: 600 }}>
		<div class="container my-20 flex space-x-20 p-4 align-middle">
			<div class=" w-2/5 flex-auto justify-between hover:scale-105">
				<a href="/pratt_portfolio/nypd-story/" target="_blank">
					<h2 class="text-center">
						NYPD Complaint Review Board Story
					</h2>
					<p class="text-center">
						A short narrative piece diving into data surrounding the
						NYPD's internal complaint review board process
					</p>
					<div class="flex items-center justify-center space-x-4 p-4">
						<img
							class="h-12"
							src="/images/jupyter-logo.png"
							alt="jupyter icon" />
						<img
							class="h-12"
							src="/images/d3-logo.png"
							alt="d3 icon" />
						<img
							class="h-12"
							src="/images/r-logo.png"
							alt="r icon" />
					</div>
				</a>
			</div>

			<div class="w-2/5 flex-auto justify-around hover:scale-105">
				<a href="/pratt_portfolio/nba-analysis/" target="_blank">
					<h2 class="text-center">
						NBA 3-Pointer Statistical Analysis
					</h2>
					<p class="text-center">
						A look into the emerging trends of 3-point shooting in
						the NBA throughout history
					</p>

					<div class="flex items-center justify-center space-x-4 p-4">
						<img
							class="h-12"
							src="/images/python-logo.png"
							alt="python icon" />
						<img
							class="h-12"
							src="/images/r-logo.png"
							alt="r icon" />
						<img
							class="h-12"
							src="/images/javascript-logo.png"
							alt="javascript icon" />
					</div>
				</a>
			</div>

			<div class="w-2/5 flex-auto justify-around hover:scale-105">
				<a href="/pratt_portfolio/twitter-analysis" target="_blank">
					<h2 class="text-center">
						Twitter Sentiment Analysis Dashboard
					</h2>
					<p class="text-center">
						An analysis of extremist political movements in the U.S.
						and how they are viewed critically on Twitter
					</p>

					<div class="flex items-center justify-center space-x-4 p-4">
						<img
							class="h-12"
							src="/images/tableau-logo.png"
							alt="tableau icon" />
						<img
							class="h-12"
							src="/images/jupyter-logo.png"
							alt="jupyter icon" />
					</div>
				</a>
			</div>
		</div>
		<div class="container my-16 flex justify-center space-x-20 p-2">
			<div class="w-1/5 flex-auto justify-around hover:scale-105">
				<a href="/pratt_portfolio/ocpf-story/" target="_blank">
					<h2 class="text-center">
						U.S. Elections PAC Funding Analysis
					</h2>
					<p class="text-center">
						A Project tracking the sources of donations and PAC
						funding for top 2020 Midterm Election Candidates
					</p>
					<div class="flex items-center justify-center space-x-4 p-4">
						<img
							class="h-12"
							src="/images/tableau-logo.png"
							alt="tableau icon" />
						<img
							class="h-12"
							src="/images/jupyter-logo.png"
							alt="jupyter icon" />
						<img
							class="h-12"
							src="/images/svelte-logo.png"
							alt="svelte icon" />

						<img
							class="h-12"
							src="/images/plotly-logo.png"
							alt="plotly icon" />
						<img
							class="h-12"
							src="/images/html-logo.png"
							alt="html icon" />
					</div>
				</a>
			</div>

			<div class="w-1/6 flex-auto justify-around hover:scale-105">
				<a
					href="/pratt_portfolio/braata-heuristic-evaluation/"
					target="_blank">
					<h2 class="text-center">
						Braata Productions Usability Evaluation
					</h2>
					<p class="text-center">
						A usability study to seek improvements to the website
						and marketing strategy for Braata Productions, a
						Caribbean Arts and Culture Nonprofit
					</p>

					<div class="flex items-center justify-center space-x-4 p-4">
						<img
							class="h-12"
							src="/images/figma-logo.png"
							alt="figma icon" />
						<img
							class="h-12"
							src="/images/photoshop-logo.png"
							alt="photoshop icon" />
					</div>
				</a>
			</div>
		</div>
	</div>
</main>

<style lang="postcss">
	h1 {
		color: #9ab3ae;
		font-style: normal;
		font-weight: 200;
		font-size: 4.75rem;
		line-height: 1.5;
		font-family: 'clarendon-urw-extra-wide', serif;
	}
	h2 {
		color: teal;
		font-style: normal;
		font-weight: 200;
		font-size: 2.2rem;
		line-height: 1.2;
		font-family: 'clarendon-urw-extra-wide', serif;
	}
	p {
		padding-top: 6px;
		color: black;
		font-style: normal;
		font-weight: 600;
		font-size: 0.75rem;
		line-height: 2rem;
		font-family: 'josefin-sans', sans-serif;
	}

	p.blog {
		color: white;
		font-style: normal;
		font-weight: 400;
		font-size: 1.75rem;
		line-height: 2.2rem;
		font-family: 'josefin-sans', sans-serif;
		text-align: justify;
	}

	text.menu {
		fill: #40ff46;
		transition: all 0.2s ease-in-out;
		font-size: 32.3px;
		font-family: 'josefin-sans', sans-serif;
		white-space: pre;
	}

	.menu:hover {
		text-shadow: 0 0 10px #fff, 0 0 20px #fff;
	}

	b {
		padding-top: 20px;
		color: slategrey;
		font-style: normal;
		font-weight: 900;
		font-size: 1.75rem;
		line-height: 2.2rem;
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

	/* The typing effect */
	@keyframes typing {
		from {
			width: 0;
		}
		to {
			width: 100%;
		}
	}

	/* The typewriter cursor effect */
	@keyframes blink-caret {
		from,
		to {
			border-color: transparent;
		}
		50% {
			border-color: orange;
		}
	}

	#project {
		color: #f1ffe8;
		font-style: normal;
		font-weight: 400;
		font-size: 1.75rem;
		line-height: 2.2rem;
		font-family: 'josefin-sans', sans-serif;
		text-align: justify;
	}

	#project:hover {
		color: #79aeb0;
	}

	body {
		background-color: #b2dbce;
		padding: 0;
		font-size: 35px;
		font-family: 'josefin-sans', sans-serif;
	}
	path {
		fill-opacity: 1;
	}
	.box {
		background-color: #9ab3ae;
	}
	.ticker {
		color: #6f8896;
		font-style: italic;
		font-weight: 600;
		font-family: 'obviously', sans-serif;
		text-shadow: 0 0 2px #6f8896;
	}
	img {
		border-color: #9ab3ae;
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

	@keyframes -global-scale-in-center {
		0% {
			transform: scale(0);
			opacity: 1;
		}
		100% {
			transform: scale(1);
			opacity: 1;
		}
	}

	@keyframes -global-rotate-in-center {
		0% {
			transform: rotate(-360deg);
			opacity: 0;
		}
		100% {
			transform: rotate(0);
			opacity: 1;
		}
	}

	@keyframes -global-slide-in-top {
		0% {
			transform: translateY(-1000px);
			opacity: 0;
		}
		100% {
			transform: translateY(0);
			opacity: 1;
		}
	}

	@keyframes -global-slide-in-fwd-tr {
		0% {
			transform: translateZ(-1200px) translateY(-700px) translateX(500px);
			opacity: 0;
		}
		100% {
			transform: translateZ(0) translateY(0) translateX(0);
			opacity: 1;
		}
	}

	@keyframes -global-slide-in-elliptic-top-fwd {
		0% {
			transform: translateY(-600px) rotateX(-30deg) scale(0);
			transform-origin: 50% 100%;
			opacity: 0;
		}
		100% {
			transform: translateY(0) rotateX(0) scale(1);
			transform-origin: 50% 1400px;
			opacity: 1;
		}
	}

	@keyframes -global-roll-in-left {
		0% {
			transform: translateX(-800px) rotate(-540deg);
			opacity: 0;
		}
		100% {
			transform: translateX(0) rotate(0deg);
			opacity: 1;
		}
	}

	@keyframes -global-roll-in-blurred-left {
		0% {
			transform: translateX(-1000px) rotate(-720deg);
			opacity: 0;
			filter: blur(50px);
		}
		100% {
			transform: translateX(0) rotate(0deg);
			opacity: 1;
			filter: blur(0);
		}
	}

	@keyframes -global-tilt-in-fwd-tr {
		0% {
			transform: rotateY(20deg) rotateX(35deg) translate(300px, -300px)
				skew(-35deg, 10deg);
			opacity: 0;
		}
		100% {
			transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
			opacity: 1;
		}
	}

	@keyframes -global-swing-in-top-fwd {
		0% {
			transform: rotateX(-100deg);
			transform-origin: top;
			opacity: 0;
		}
		100% {
			transform: rotateX(0deg);
			transform-origin: top;
			opacity: 1;
		}
	}

	@keyframes -global-puff-in-center {
		0% {
			transform: scale(2);
			opacity: 0;
			filter: blur(4px);
		}
		100% {
			transform: scale(1);
			opacity: 1;
			filter: blur(0px);
		}
	}

	@keyframes -global-fade-in {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	/* EXITS */
	@keyframes -global-scale-out-center {
		0% {
			transform: scale(1);
			opacity: 1;
		}
		100% {
			transform: scale(0);
			opacity: 1;
		}
	}

	@keyframes -global-rotate-out-center {
		0% {
			transform: rotate(0);
			opacity: 1;
		}
		100% {
			transform: rotate(-360deg);
			opacity: 0;
		}
	}

	@keyframes -global-rotate-out-2-cw {
		0% {
			transform: rotate(0);
			opacity: 1;
		}
		100% {
			transform: rotate(45deg);
			opacity: 0;
		}
	}

	@keyframes -global-swirl-out-bck {
		0% {
			transform: rotate(0) scale(1);
			opacity: 1;
		}
		100% {
			transform: rotate(-540deg) scale(0);
			opacity: 0;
		}
	}

	@keyframes -global-flip-out-hor-top {
		0% {
			transform: rotateX(0);
			opacity: 1;
		}
		100% {
			transform: rotateX(70deg);
			opacity: 0;
		}
	}

	@keyframes -global-slide-out-top {
		0% {
			transform: translateY(0);
			opacity: 1;
		}
		100% {
			transform: translateY(-1000px);
			opacity: 0;
		}
	}

	@keyframes -global-slide-out-fwd-center {
		0% {
			transform: translateZ(1);
			opacity: 1;
		}
		100% {
			transform: translateZ(600px);
			opacity: 0;
		}
	}

	@keyframes -global-slide-out-elliptic-top-bck {
		0% {
			transform: translateY(0) rotateX(0) scale(1);
			transform-origin: 50% 1400px;
			opacity: 1;
		}
		100% {
			transform: translateY(-600px) rotateX(-30deg) scale(0);
			transform-origin: 50% 100%;
			opacity: 1;
		}
	}
</style>
