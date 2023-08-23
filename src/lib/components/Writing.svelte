<script lang="ts">
	import Saos from 'saos'
	import { posts } from '$lib/writing.js'
</script>

<main>
	<div class="mt-6 overflow-hidden">
		<section class="mx-48">
			<Saos
				animation={'fade-in .2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'}
				once={true}>
				<h2 class="text-center" style="color: white">
					Here is where Projects will go
				</h2>
			</Saos>
			{#each posts as { title, subtitle, link, thumbnail }}
				<Saos
					animation={'fade-in .7s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'}
					animation_out={'slide-out-fwd-center 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both'}
					top={250}
					bottom={250}>
					<a href={link}>
						<div
							class="my-10 flex content-center rounded-t-3xl rounded-bl-3xl p-8 shadow-2xl shadow-slate-800"
							style="background-color: #FFF5F5">
							<div class="justify-items-left container pr-20">
								<div class="pl-26">
									<h2>{title}</h2>
									<p><br />{subtitle}</p>
								</div>
							</div>
							<div class="container w-1/3 self-center">
								<img
									class="justify-items-left align-items-center object-scale-down p-2"
									src={thumbnail}
									alt="" />
							</div>
						</div>
					</a>
				</Saos>
			{/each}
		</section>
	</div>
</main>

<style>
	section {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-around;
		margin-right: 22rem;
		margin-left: 22rem;
		max-width: 76rem;
		overflow-x: visible;
		overflow-y: visible;
	}

	a {
		color: #9ab3af;
		font-style: normal;
		font-weight: 200;
		font-size: 2.75rem;
		line-height: 1.2;
		font-family: 'clarendon-urw-extra-wide', serif;
	}

	p {
		font-size: 1rem;
		line-height: 1.2;
	}

	div > p:nth-child(2) {
		text-align: start;
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
