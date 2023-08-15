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
		h2 {
			color: #9ab3af;
			font-style: normal;
			font-weight: 200;
			font-size: 2.75rem;
			line-height: 1.2;
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
				transform: translateZ(-1200px) translateY(-700px)
					translateX(500px);
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
				transform: rotateY(20deg) rotateX(35deg)
					translate(300px, -300px) skew(-35deg, 10deg);
				opacity: 0;
			}
			100% {
				transform: rotateY(0) rotateX(0deg) translate(0, 0)
					skew(0deg, 0deg);
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
</svelte:head>

<slot />
