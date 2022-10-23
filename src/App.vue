<template>
	<section class="w-full px-8 text-gray-700">
		<div class="flex flex-col flex-wrap items-center justify-between py-6 mx-auto md:flex-row container">
			<div class="relative flex flex-col md:flex-row">
				<router-link to="/" class="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
					<svg class="w-auto h-10 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
					</svg>
				</router-link>
			</div>

			<div class="inline-flex flex-col items-center sm:flex-row sm:ml-5 lg:justify-end">
				<nav class="flex flex-wrap items-center space-x-4 text-sm md:text-lg font-semibold tracking-wide sm:space-x-6 uppercase">
					<router-link to="/about">ABOUT</router-link>
				</nav>
				<router-link
					v-if="connected"
					class="inline-flex tracking-wide uppercase items-center sm:mt-0 mt-5 sm:ml-8 justify-center px-5 py-2.5 font-semibold text-white bg-gray-800 border border-transparent rounded-md shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
					:to="{ name: 'account', params: { id: account, chain: currentchain } }"
				>
					<div class="badge badge-secondary mr-5">{{ chainName[currentchain] }}</div>
					{{ trim(account) }}</router-link
				>
			</div>
		</div>
	</section>

	<div class="alert shadow-lg m-auto container" v-if="shownetworkchange && connected">
		<div>
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info flex-shrink-0 w-6 h-6">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
			</svg>
			<div>
				<h3 class="font-bold ml-5">Wrong Network</h3>
			</div>
		</div>
		<div class="flex-none">
			<button class="btn btn-sm">BSC</button>
			<button class="btn btn-sm">POLYGON</button>
		</div>
	</div>

	<div class="m-auto container"><router-view /></div>

	<footer class="pb-6 pt-16 bg-white">
		<div class="container mx-auto px-10 md:px-8">
			<ul class="text-sm font-medium pb-10 sm:pb-20 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-y-10">
				<li class="space-y-5 row-span-2">
					<h2 class="text-xs tracking-wide text-gray-900 uppercase font-bold">About</h2>
					<ul class="space-y-2 sm:space-y-4">
						<li><a class="hover:text-gray-900 transition-colors duration-200 text-xl sm:text-2xl" href="https://repa.gg/#/about">About Us</a></li>
						<li><a class="hover:text-gray-900 transition-colors duration-200 text-xl sm:text-2xl" href="https://t.me/projectrepa">Support</a></li>
					</ul>
				</li>
				<li class="space-y-5 row-span-2">
					<h2 class="text-xs tracking-wide text-gray-900 uppercase font-bold">Resources</h2>
					<ul class="space-y-2 sm:space-y-4">
						<li><a class="hover:text-gray-900 transition-colors duration-200 text-xl sm:text-2xl" href="https://doc.repa.gg">Documentation</a></li>
						<li><a class="hover:text-gray-900 transition-colors duration-200 text-xl sm:text-2xl" href="https://doc.repa.gg">Developer API</a></li>
					</ul>
				</li>
				<li class="space-y-5">
					<h2 class="text-xs tracking-wide text-gray-900 uppercase font-bold">Social</h2>
					<ul class="space-y-2 sm:space-y-4">
						<li><a class="hover:text-gray-900 transition-colors duration-200 text-xl sm:text-2xl" href="https://github.com/projectrepa">Github</a></li>
						<li><a class="hover:text-gray-900 transition-colors duration-200 text-xl sm:text-2xl" href="https://t.me/projectrepa">Telegram</a></li>
					</ul>
				</li>
			</ul>
			<div class="flex flex-col-reverse justify-between pt-10 sm:pt-8 pb-4 border-t lg:flex-row bg-top border-gray-900">
				<ul class="flex flex-col space-y-1 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
					<li><a href="https://repa.gg" class="text-sm sm:text-base text-black transition-colors duration-300 font-semibold">Disclaimers</a></li>
					<li><a href="https://repa.gg" class="text-sm sm:text-base text-black transition-colors duration-300 font-semibold">Terms &amp; Conditions</a></li>
				</ul>
				<ul class="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
					<a href="https://repa.gg" class="text-md text-black transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold tracking-tight">© 2022</a>
				</ul>
			</div>
		</div>
	</footer>
</template>

<script>
	export default {
		data() {
			return {
				connected: false,
				account: 'Account',
				currentchain: 5,
				shownetworkchange: true,
				chainName: {
					5: 'groeli',
					137: 'Polygon',
					56: 'BSC',
				},
			};
		},
		methods: {
			trim(address) {
				return `${address.slice(0, 5)}...${address.slice(address.length - 5, address.length)}`;
			},
		},
		async mounted() {
			await window.ethereum.enable();

			if (window.ethereum) {
				await window.ethereum.enable();

				const accounts = await window.ethereum.request({
					method: 'eth_requestAccounts',
				});

				var sChain = await window.ethereum.request({ method: 'eth_chainId' });

				console.log('Address : ' + accounts[0]);

				this.currentchain = parseInt(sChain);

				this.account = accounts[0];

				this.connected = true;

				if (this.currentchain == 5) {
					this.shownetworkchange = false;
				}

				if (this.currentchain == 137) {
					this.shownetworkchange = false;
				}

				if (this.currentchain == 56) {
					this.shownetworkchange = false;
				}

				this.$store.commit('setAddress', accounts[0]);

				this.$store.commit('setChain', parseInt(sChain));

				this.$store.commit('setConnected', true);
			}
		},
	};
</script>
