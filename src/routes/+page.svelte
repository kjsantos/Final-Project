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
<svg viewBox="0 0 1000 800" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
in:fade={{duration: 100, delay:2}}
out:fly={{y: 500, duration: 100}}>
  <defs>
    <path id="path-0" d="M 64.4311825927031 137.99836669569507 L 89.05054362788782 101.52284818283457" style="fill: none;"></path>
    <path id="text-path-0" d="M -31.14034988673302 256.77848426313267 Q 137.5960763427247 190.79785016570167 306.3325025721824 256.77848426313267"></path>
    <path id="path-1" d="M 57.527 124.973 C 95.67 122.78 114.483 120.784 133.496 120.784 C 141.521 120.995 146.107 121.456 150.888 123.361 C 154.325 125.468 155.956 127.775 157.942 130.306 C 160.7 133.493 164.124 135.181 167.216 137.128 C 169.711 138.793 171.262 140.044 173.105 141.069 C 177.962 143.657 182.318 145.502 186.53 147.622 C 190.045 149.123 193.078 150.039 196.256 150.653 C 202.129 151.729 206.978 152.783 211.858 153.643 C 219.624 155.382 226.207 156.439 232.826 157.435 C 240.769 158.6 247.094 159.016 253.346 159.997 C 261.283 160.725 266.848 161.201 272.5 161.201 C 278.366 161.201 282.548 160.674 286.843 160.034 C 294.954 156.769 302.726 154.121 310.545 151.473 C 318.777 148.203 324.634 145.738 330.463 142.628 C 335.948 138.586 340.401 135.65 344.811 132.628 C 352.217 127.1 359.426 123.752 366.612 120.313 C 373.746 117.141 378.446 115.061 383.541 113.606 C 391.601 111.994 398.48 110.625 405.599 110.081 C 410.305 109.916 414.166 110.832 417.962 111.341 C 426.434 112.897 431.196 117.306 436.608 121.815 C 443.32 130.007 444.414 138.261 446.191 146.003 C 449.238 156.751 450.956 164.335 451.078 173 C 451.01 181.791 450.48 188.344 450.1 194.911 C 449.31 203.323 449.514 209.789 449.379 216.191 C 449.285 221.292 449.711 224.832 449.898 228.471 C 450.758 234.761 451.958 240.112 453.555 245.31 C 454.382 253.632 448.831 260.826 445.922 266.144 C 441.907 275.5 439.021 280.783 434.303 286.344 C 422.666 298.039 412.921 306.292 400.79 312.353 C 387.336 318.728 376.153 323.73 364.99 328.779 C 357.783 332.339 352.118 334.459 346.908 337.531 C 337.733 342.511 329.427 345.396 320.957 348.07 C 305.305 350.938 292.403 351.339 279.729 354.648 C 266.052 358.825 255.439 362.455 244.77 365.963 C 237.15 368.625 232.339 370.986 227.354 372.915 C 223.682 375.327 220.274 377.012 217.511 379.258 C 212.224 382.401 207.292 382.071 202.307 382.201 C 194.386 382.209 188.571 381.536 182.409 380.405 C 174.939 378.41 168.978 376.637 162.883 375.284 C 159.621 373.909 157.898 371.085 155.51 369.358 L 154.839 368.931 C 154.208 368.602 154.266 368.08 154.021 367.467" style="fill: none;">
      <animateMotion path="M -196.044 -99.453 L -128.541 -77.858" calcMode="linear" begin="0s" dur="3.96s" fill="freeze"></animateMotion>
    </path>
    <path id="text-path-1" d="M 145.507 106.364 C 145.138 107.076 646.668 105.951 645.671 106.364"></path>
    <path id="path-3" d="M 145.507 106.364 C 145.138 107.076 646.668 105.951 645.671 106.364"></path>
    <path id="path-2" d="M 145.507 106.364 C 145.138 107.076 646.668 105.951 645.671 106.364"></path>
    <linearGradient id="gradient-1" x1="523.47" x2="1061.9" gradientUnits="userSpaceOnUse">
      <stop stop-color="#191919" offset="0"></stop>
      <stop stop-color="#191919" stop-opacity=".58333" offset="1"></stop>
      <stop stop-color="#191919" stop-opacity="0" offset="1"></stop>
    </linearGradient>
    <path id="path-4" d="M 148.514 106.364 C 145.138 107.076 677.743 105.536 677.026 99.207"></path>
    <path id="path-5" d="M 145.507 106.364 C 145.138 107.076 677.743 105.536 677.026 99.207">		<animate attributeName="d" from="m145.507 106.364 h0" to="m145.507 106.364 h1000" dur="2.8s" begin=".7s"/>
</path>
  </defs>
  <g transform="matrix(0.466309, 0, 0, 0.466309, 127.950798, 70.915482)">
    <defs></defs>
  </g>
  <g transform="matrix(1.201365, 0, 0, 1.201365, 54.208363, 87.839172)" style="">
    <g transform="matrix(0.961754, 0, 0, 0.887041, -465.296844, -137.391693)" style="">
      <path d="m719.23 749.32-38.386 21.213-25.254 17.173 4.0406 24.244 37.376 19.193 32.325 8.0812 60.609 11.112 70.711 6.0609 81.822-2.0203 93.944-8.0812 65.66-14.142 32.325-25.254 1.0102-12.122-15.152-20.203-28.284-16.162-345.47-56.569-27.274 47.477z" fill="#313234" fill-rule="evenodd" stroke="#000"></path>
      <path d="m1007.1 773.56-39.396 13.132-77.782 3.0304-77.782-9.0914-38.386-25.254 116.17-59.599 117.18 77.782z" fill="#050505" fill-rule="evenodd" stroke="#000"></path>
      <path d="m490.93 147.27-6.0609 521.24 8.0812 10.102 636.4 58.589 8.0812-6.0609 20.203-565.69-4.0406-18.183-646.5-2.0203-16.162 2.0203z" fill="#646b75" fill-rule="evenodd" stroke="#000"></path>
      <g transform="translate(25.714 797.14)" fill-opacity=1 fill="black" stroke="#000">
        <path d="m533.07-581.45-8.0812 387.9 523.26 40.406 14.142-420.22-529.32-8.0812z" fill="#fff"></path>
        <path d="m532.05-581.35-8.0812 387.9 523.26 40.406 14.142-420.22-529.32-8.0812z" fill="url(#gradient-1)"></path>
      </g>
      <path d="m1137.4 730.07 76.894-25.448 16.04-553.32-10.102-16.162-715.11 10.592 648.34 1.0609 4.8564 19.51-20.917 563.77z" fill="#72767f" fill-rule="evenodd" stroke="#000"></path>
      <path d="m1230.2 209.91 12.143 12.143 67.857 32.143 0.7143 21.429h3.5714v5l-4.2857 1.4286 0.7143 4.2857 3.5714 0.71428v5.7143l-4.2857 1.4286 1.4286 6.4286 3.5714 0.71429v5.7143h-3.5714l-1.4286 7.1429h5.7143l-0.7143 8.5714-5 0.71428-4.2857 165-27.143 29.286-23.571 29.286-23.571 30.714-14.286 25 12.857-392.86z" fill="#38393d" fill-rule="evenodd" stroke="#000"></path>
      <path d="m1291.8 502.72-5.0001 121.07-33.929 35.714-22.143 19.286-15.357 13.214 1.7857-90.357 15-25.714 17.143-20.714 20-24.286 22.5-28.214z" fill="#595959" fill-rule="evenodd" stroke="#000"></path>
      <path d="m556.07 684.15 3.9286 44.643 33.571 4.2857 57.857 8.5714 65 8.5714 77.857 6.4286 77.143 7.8572 64.286 5 82.857 4.2857 67.534 2.2295 1.0856-13.02 1.9923-10.763 0.1864-6.2132 3.0453-11.841-115.99-11.107-108.21-10-103.57-9.6429-103.21-9.2857-21.786-2.1429-83.571-7.8572z" fill="#596068" fill-rule="evenodd" stroke="#000"></path>
      <path d="m1089.4 733.15 40.911 4.5457 8.0812-7.5761-1.0101 43.942-51.518 1.5152 3.5355-42.426z" fill="#596068" fill-rule="evenodd" stroke="#000"></path>
      <path d="m1137.4 774.07 1.5152-44.447 56.568-18.183-58.084 62.629z" fill="#595959" fill-rule="evenodd" stroke="#000"></path>
      <path d="m1216.4 625.31 73.568-96.21-1.0102 12.122-73.027 97.689 0.4692-13.601z" fill-rule="evenodd" stroke="#000"></path>
      <path d="m1216.2 681.64 71.425-90.495-1.0102 11.05-71.598 88.76 1.1835-9.3155z" fill-rule="evenodd" stroke="#000"></path>
      <path d="m1216.1 662.57 72.854-94.067-1.0102 12.122-72.67 94.475 0.8263-12.53z" fill-rule="evenodd" stroke="#000"></path>
      <path d="m1216.5 646.11 72.496-94.781-1.0102 12.122-71.955 94.118 0.4692-11.458z" fill-rule="evenodd" stroke="#000"></path>
      <path transform="translate(1090 222.86)" d="m-74.286 525.93a22.143 19.286 0 1 1 -44.286 0 22.143 19.286 0 1 1 44.286 0z" fill="#77818a" stroke="#121111" stroke-width="5.5"></path>
      <path transform="matrix(2.25 0 0 3 1634.3 -1293.3)" d="m-314.29 678.79a2.8571 2.1429 0 1 1 -5.7143 0 2.8571 2.1429 0 1 1 5.7143 0z" fill="#b0dd1c"></path>
      <path transform="translate(1020 221.43)" d="m-312.86 499.51a14.286 12.857 0 1 1 -28.571 0 14.286 12.857 0 1 1 28.571 0z" fill="#5d6268" stroke="#000" stroke-width="2.3"></path>
      <path transform="translate(965.71 215.71)" d="m-312.86 499.51a14.286 12.857 0 1 1 -28.571 0 14.286 12.857 0 1 1 28.571 0z" fill="#5d6268" stroke="#000" stroke-width="2.3"></path>
      <path transform="translate(1072.9 227.14)" d="m-312.86 499.51a14.286 12.857 0 1 1 -28.571 0 14.286 12.857 0 1 1 28.571 0z" fill="#5d6268" stroke="#000" stroke-width="2.3"></path>
      <path transform="translate(1127.1 231.43)" d="m-312.86 499.51a14.286 12.857 0 1 1 -28.571 0 14.286 12.857 0 1 1 28.571 0z" fill="#5d6268" stroke="#000" stroke-width="2.3"></path>
      <path transform="translate(1180 237.14)" d="m-312.86 499.51a14.286 12.857 0 1 1 -28.571 0 14.286 12.857 0 1 1 28.571 0z" fill="#5d6268" stroke="#000" stroke-width="2.3"></path>
      <animateTransform type="translate" additive="sum" attributeName="transform" values="0 600;0 0" dur="1.25s" fill="freeze" keyTimes="0; 1" begin="-0.23s" calcMode="spline" keySplines="0.42 0 0.58 1"></animateTransform>
    </g>
    <g transform="matrix(0.849912, 0.014986, 0.003945, 0.935066, -102.30188, 17.565344)" style="transform-origin: 356.721px 206.084px;">
      <text style="white-space: pre; fill: rgb(51, 51, 51); font-family: Arial, sans-serif; font-size: 32.3px;" x="30.747" y="230.997"> </text>
      <a href="/about"><text class="menu" style="fill: rgb(64, 255, 70); font-family: &quot;Josefin Sans&quot;; font-size: 32.3px; letter-spacing: 1.8px; white-space: pre;" transform="matrix(1, 0, 0, 1, 0, -46)" x="134.172" y="177.336"><textPath startOffset="-232" xlink:href="#path-6"><animate attributeName="startOffset" values="-232;-229;-124" dur="3.25s" fill="freeze" keyTimes="0; 0.68105; 1" calcMode="spline" keySplines="0 0 1 1; 0 0 0.58 1" begin="1s"></animate>About</textPath></text>
      </a>
	  <a href = "/projects"><text class="menu" style="fill: rgb(64, 255, 70); font-family: &quot;Josefin Sans&quot;; font-size: 32.3px; white-space: pre;" x="312.996" y="85.092" transform="matrix(1, 0, 0, 1, 0, -46)"><textPath startOffset="-467" xlink:href="#path-6"><animate attributeName="startOffset" values="-467;-426;-134" dur="3.25s" fill="freeze" keyTimes="0; 0.61942; 1" calcMode="spline" keySplines="0 0 1 1; 0 0 0.58 1" begin="1s"></animate>Projects</textPath></text>
      </a>
	  <a href = "/writing"><text class="menu" style="fill: rgb(64, 255, 70); font-family: &quot;Josefin Sans&quot;; font-size: 32.3px; white-space: pre;" x="528.849" y="85.252" transform="matrix(1, 0, 0, 1, 0, -46)"><textPath startOffset="-670" xlink:href="#path-6"><animate attributeName="startOffset" values="-670;-637;-175" dur="3.22s" fill="freeze" keyTimes="0; 0.4887; 1" calcMode="spline" keySplines="0 0 1 1; 0 0 0.58 1" begin="1s"></animate>Writing</textPath></text>
      </a>
	  <a href = "/contact"><text class="menu" style="fill: rgb(64, 255, 70); font-family: &quot;Josefin Sans&quot;; font-size: 32.3px; letter-spacing: 0.3px; white-space: pre;" transform="matrix(1, 0, 0, 1, 0, -46)"><textPath startOffset="-151" xlink:href="#path-6"><animate attributeName="startOffset" values="-151;-117;525" dur="3.16s" fill="freeze" keyTimes="0; 0.33978; 1" calcMode="spline" keySplines="0 0 0.58 1; 0 0 0.58 1" begin="1s"></animate>Contact</textPath></text>
      </a>
	  <path style="fill: none; fill-rule: nonzero; stroke: rgba(0, 0, 0, 0); stroke-opacity: 0;" d="M 148.514 255.544 C 168.924 256.709 158.574 324.896 242.499 325.92 C 314.235 326.795 325.705 268.292 408.751 272.333 C 502.051 276.872 472.201 329.613 554.803 330.786 C 645.682 332.076 629.904 224.92 718.131 299.367" id="path-6"></path>
      <text style="fill: rgb(64, 255, 70); font-family: &quot;Andale Mono&quot;; font-size: 22.1px; letter-spacing: .8px; white-space: pre;"><textPath xlink:href="#path-5">[root@localhost] ~ % Kailen_Santos.exe</textPath><animate attributeName="fill-opacity" values="0;0;0;1" begin="-0.34s" dur="1.38s" fill="freeze" keyTimes="0; 0.47086; 0.93328; 1"></animate></text>
    </g>
  </g>
</svg>
</div>
