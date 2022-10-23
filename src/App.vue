<template>
	<section class="w-full px-8 text-gray-700 bg-gray-50">
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
					<router-link to="/integration">integration</router-link>
				</nav>
				<router-link
					v-if="connected"
					class="inline-flex tracking-wide uppercase text-xs items-center sm:mt-0 mt-5 sm:ml-8 justify-center px-5 py-2.5 font-semibold text-white bg-gray-800 border border-transparent rounded-md shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
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

	<section class="bg-gray-50">
		<div class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
			<div class="flex justify-center mt-8 space-x-6">
				<a href="https://t.me/projectrepa">
					<span class="sr-only">Telegram</span>
					<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="64" height="64" viewBox="0 0 48 48" style="fill: #000000">
						<path fill="#29b6f6" d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"></path>
						<path
							fill="#fff"
							d="M33.95,15l-3.746,19.126c0,0-0.161,0.874-1.245,0.874c-0.576,0-0.873-0.274-0.873-0.274l-8.114-6.733 l-3.97-2.001l-5.095-1.355c0,0-0.907-0.262-0.907-1.012c0-0.625,0.933-0.923,0.933-0.923l21.316-8.468 c-0.001-0.001,0.651-0.235,1.126-0.234C33.667,14,34,14.125,34,14.5C34,14.75,33.95,15,33.95,15z"
						></path>
						<path fill="#b0bec5" d="M23,30.505l-3.426,3.374c0,0-0.149,0.115-0.348,0.12c-0.069,0.002-0.143-0.009-0.219-0.043 l0.964-5.965L23,30.505z"></path>
						<path
							fill="#cfd8dc"
							d="M29.897,18.196c-0.169-0.22-0.481-0.26-0.701-0.093L16,26c0,0,2.106,5.892,2.427,6.912 c0.322,1.021,0.58,1.045,0.58,1.045l0.964-5.965l9.832-9.096C30.023,18.729,30.064,18.416,29.897,18.196z"
						></path>
					</svg>
				</a>
				<a href="https://github.com/projectrepa">
					<span class="sr-only">Github</span>
					<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="64" height="64" viewBox="0 0 64 64" style="fill: #000000">
						<path
							d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"
						></path>
					</svg>
				</a>
			</div>
		</div>
	</section>
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
