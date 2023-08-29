<script>
	import Ticker from '$lib/components/Ticker.svelte'
	import { fly } from 'svelte/transition';
	import { fade } from 'svelte/transition';
	import TitleCard from '$lib/components/TitleCard.svelte'
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
</script>


<div class="fixed w-screen">
<Ticker />
</div>

<div class="flex py-16 overflow-hidden justify-center w-screen my-auto mx-auto h-screen bg-[#b2dbce]">
<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
in:fade={{duration: 100, delay:2}}
out:fly={{y: 500, duration: 100}}>
  <g transform="matrix(2.917817115784, -0.027036003768, 0.024374000728, 2.532433986664, 173.176169866226, 187.982022687631)" style="transform-origin: 354.888px 228.356px;">
        <path d="M 425.42 253.69 C 425.42 253.69 429.09 197.615 430.273 156.326 C 431.456 115.037 426.983 72.077 426.983 72.077 C 426.983 72.077 396.693 65.29 315.098 64.632 C 233.503 63.974 199.914 71.274 200.728 70.94 C 201.542 70.606 196.919 76.326 194.913 148.487 C 192.907 220.648 197.731 249.251 197.731 249.251 C 197.731 249.251 256.627 261.062 316.615 260.539 C 376.603 260.016 425.421 253.69 425.421 253.69 L 425.42 253.69 Z" stroke="#1f211d" stroke-linejoin="round" stroke-width="2.0001" style="fill: rgb(194, 194, 194);"/>
    <path d="M 412.38 225.75 C 412.38 225.75 416.484 194.936 416.484 155.245 C 416.484 115.554 412.902 82.128 412.902 82.128 C 412.902 82.128 377.692 79.256 315.097 77.428 C 252.502 75.6 215.989 78.734 215.989 78.734 C 215.989 78.734 213.901 110.592 212.076 142.972 C 210.25 175.352 213.38 220.527 213.38 220.527 C 213.38 220.527 273.183 227.973 317.71 227.578 C 362.238 227.184 412.385 225.75 412.385 225.75 L 412.38 225.75 Z" stroke="#1f211d" stroke-linejoin="round" stroke-width="2.0001" style="fill: rgb(47, 45, 45);"/>
    <path d="m406.91 248.73 1.5649-10.445s-19.821-0.78378-21.648 0.52207 0.78244 11.229 0.78244 11.229l19.301-1.3058z" fill="none" stroke="#1f211d" stroke-linejoin="round" stroke-width="2.0001" style=""/>
        <path d="M 407.26 221.91 C 407.26 221.91 410.649 192.707 410.649 155.09 C 410.649 117.473 407.754 85.794 407.754 85.794 C 407.754 85.794 374.385 83.072 315.061 81.34 C 255.737 79.608 221.132 82.577 221.132 82.577 C 221.132 82.577 219.59 112.77 217.86 143.457 C 216.129 174.145 218.661 216.96 218.661 216.96 C 218.661 216.96 270.009 224.642 317.533 223.642 C 365.057 222.642 407.26 221.91 407.26 221.91 Z" stroke="#1f211d" stroke-linejoin="round" stroke-width="1.0002" style=""/>
    <path d="m518.59 322.51 0.65159 8.5615 12.085 0.96537 4.4209-8.8125" fill="none" stroke="#2c2c2b" stroke-linejoin="round" stroke-width="1.6999" style=""/>
    <animateTransform type="translate" additive="sum" attributeName="transform" values="0 117;0 0" dur="1.27s" fill="freeze" keyTimes="0; 1" calcMode="spline" keySplines="0.92 0.59 0.34 1" begin="0s"/>
    <animate attributeName="opacity" values="0;0.28;1" dur="1.43s" fill="freeze" begin="-0.13s" keyTimes="0; 0.54697; 1" calcMode="spline" keySplines="0.77 0.11 0.84 1; 0.25 0.1 0.25 1"/>
  </g>
  <text style="white-space: pre; fill: rgb(51, 51, 51); font-family: Arial, sans-serif; font-size: 32.3px;" x="30.747" y="230.997"> </text>
  <a href = "/about"><text x="134.172" y="177.336" transform="matrix(1, 0, 0, 1, 0, -46)"><textPath startOffset="-124" xlink:href="#path-2"><animate attributeName="startOffset" values="-232;-229;-124" dur="2.62s" fill="freeze" keyTimes="0; 0.68105; 1" calcMode="spline" keySplines="0 0 1 1; 0 0 0.58 1" begin="-0.17s"/>About</textPath></text>
  </a>
  <a href = "/projects"><text x="312.996" y="85.092" transform="matrix(1, 0, 0, 1, 0, -46.000000000000014)"><textPath startOffset="-136" xlink:href="#path-2"><animate attributeName="startOffset" values="-467;-426;-134" dur="2.64s" fill="freeze" keyTimes="0; 0.61942; 1" calcMode="spline" keySplines="0 0 1 1; 0 0 0.58 1" begin="-0.22s"/>Projects</textPath></text>
  </a>
  <a href = "/writing"><text x="528.849" y="85.252" transform="matrix(1, 0, 0, 1, 0, -46.000000000000014)"><textPath startOffset="-175" xlink:href="#path-2"><animate attributeName="startOffset" values="-670;-637;-175" dur="2.65s" fill="freeze" keyTimes="0; 0.4887; 1" calcMode="spline" keySplines="0 0 1 1; 0 0 0.58 1" begin="-0.21s"/>Writing</textPath></text>
  </a>
  <a href = "/contact"><text style="letter-spacing: 0.3px;" transform="matrix(1, 0, 0, 1, 0, -46.000000000000014)"><textPath startOffset="525" xlink:href="#path-2"><animate attributeName="startOffset" values="-151;-117;525" dur="2.61s" fill="freeze" keyTimes="0; 0.33978; 1" calcMode="spline" keySplines="0 0 0.58 1; 0 0 0.58 1" begin="-0.18s"/>Contact</textPath></text>
  </a>
  <path style="fill: none; fill-opacity: 0; fill-rule: nonzero; stroke: rgba(0, 0, 0, 0);" d="M 127.805 251.034 C 158.614 252.199 156.514 324.896 241.542 325.92 C 314.221 326.795 337.231 260.081 405.026 259.574 C 474.984 259.051 470.964 329.653 567.275 328.669 C 659.357 328.574 652.938 263.372 684.459 258.174" id="path-2"></path>
</svg>
</div>
