<template>
	<section class="py-16 bg-white md:py-24">
		<div class="flex flex-col max-w-6xl px-10 mx-auto lg:flex-row">
			<div class="flex flex-col items-start justify-center w-full pr-10 mb-12 lg:w-2/3 lg:mb-0">
				<div class="relative">
					<p class="mb-2 text-base font-bold text-black uppercase" v-if="mobiledevice">Mobile Device Detected</p>
					<h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">
						<span class="block xl:inline">CHOOSE</span><br /><span class="block text-pink-500 xl:inline">WALLET</span>
					</h1>
					<div class="py-5"></div>
				</div>
				<div class="relative flex items-center pt-4 space-x-3">
					<a :href="metamask_url" class="relative text-2xl group"
						><span class="relative z-10 px-5 py-2 font-bold leading-tight text-black bg-white border-4 border-gray-900 rounded-lg group-hover:bg-pink-400 group-hover:text-white">Meta Mask</span
						><span class="absolute top-0 right-0 w-full h-14 -mt-2.5 -mr-0.5 bg-black rounded-lg"></span
					></a>
					<a :href="trustwallet_url" class="relative text-2xl group"
						><span class="relative z-10 px-5 py-2 font-bold leading-tight text-black bg-white border-4 border-gray-900 rounded-lg group-hover:bg-pink-400 group-hover:text-white">Trust Wallet</span
						><span class="absolute top-0 right-0 w-full h-14 -mt-2.5 -mr-0.5 bg-black rounded-lg"></span
					></a>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import { isMobile } from 'mobile-device-detect';

	export default {
		props: ['hash'],

		data() {
			return {
				mobiledevice: false,
				desktop_url: '',
				trustwallet_url: '',
				metamask_url: '',
			};
		},

		async mounted() {
			this.desktop_url = `https://join.repa.gg?hash=` + this.hash;

			this.trustwallet_url = `https://link.trustwallet.com/open_url?url=https://join.repa.gg?hash=` + this.hash;

			this.metamask_url = `https://metamask.app.link/dapp/join.repa.gg/?hash=` + this.hash;

			this.mobiledevice = isMobile;

			if (window.ethereum) {
				window.location.href = this.desktop_url;
			}
		},
	};
</script>
