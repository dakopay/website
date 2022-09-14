<template>
	<div>
		<section class="w-full py-16 bg-white lg:py-24">
			<div class="px-12 mx-auto text-center max-w-7xl">
				<div class="space-y-12 md:text-left">
					<div class="mb-20 space-y-5 sm:mx-auto sm:max-w-xl md:max-w-2xl sm:space-y-4 lg:max-w-5xl hidden md:block">
						<h2 class="relative text-4xl font-extrabold tracking-tight sm:text-5xl">Hello 👋</h2>
						<p class="text-xl text-gray-500">
							{{ account }}
						</p>
					</div>
					<div class="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-2 lg:max-w-5xl py-20">
						<div class="space-y-6 text-center lg:ml-0 md:ml-10 hover:scale-150">
							<router-link :to="{ name: 'account_out', params: { id: id, chain: chain } }">
								<div class="w-48 h-48 p-2 mx-auto md:w-56 md:h-56">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="relative z-20 w-full h-full rounded-xl text-pink-200">
										<path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
									</svg>
								</div>
								<div class="space-y-2">
									<div class="space-y-1 text-lg font-medium leading-6">
										<h3>Subscriptions</h3>
									</div>
								</div>
							</router-link>
						</div>

						<div class="space-y-6 text-center lg:mr-0 md:mr-10 hover:scale-150">
							<router-link :to="{ name: 'account_in', params: { id: id, chain: chain } }">
								<div class="w-48 h-48 p-2 mx-auto md:w-56 md:h-56">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="relative z-20 w-full h-full rounded-xl text-green-200">
										<path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
									</svg>
								</div>
								<div class="space-y-2">
									<div class="space-y-1 text-lg font-medium leading-6">
										<h3>Subscibers</h3>
									</div>
								</div>
							</router-link>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="w-full m-auto mt-5 sm:mt-16 lg:mt-20 2xl:mt-32" v-if="data.canUserPay && formattedBal > 1">
			<div class="flex flex-col items-center h-full mx-auto max-w-7xl">
				<div class="z-10 w-full mb-5 space-y-10 sm:mb-8 xl:mb-12 2xl:mb-16">
					<p class="-mb-5 text-sm font-bold text-purple-500 uppercase">COLLECT PENDING SUBSCIPTION</p>
					<h1 class="text-5xl font-bold xm:text-7xl lg:text-9xl">
						<span class="text-gray-900">{{ formattedBal }} </span> <span class="text-purple-600">{{ data.tokenInfo.symbol }}</span>
					</h1>
					<p class="text-base text-gray-500 sm:text-lg">Last Paid : {{ data.data.unpaidInDay }} Days Ago</p>
					<div class="flex flex-col items-center w-full space-x-5 lg:flex-row">
						<a @click="collect()" class="w-full px-12 py-6 text-2xl font-medium text-center text-white bg-purple-600 shadow-xl hover:bg-purple-700 lg:w-auto rounded-3xl cursor-pointer">COLLECT</a>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	import { ABI, checkAddress, setChain, randomCollect, getNetwork } from '@moneymafia/repa-sdk';
	import { ethers } from 'ethers';

	export default {
		props: ['id', 'chain'],

		data() {
			return {
				account: '0x0000000000000000000000000000000000000000',
				data: { canUserPay: false },
				formattedBal: 0,
			};
		},
		methods: {
			async collect() {
				try {
					await window.ethereum.enable();

					const newProvider = new ethers.providers.Web3Provider(window.ethereum);

					var sChain = await window.ethereum.request({ method: 'eth_chainId' });

					if (parseInt(sChain) != parseInt(this.chain)) {
						alert('Wrong Network');
						return null;
					}

					const signer = newProvider.getSigner();

					const networkData = await getNetwork(this.chain);

					const controllerActionContract = new ethers.Contract(networkData.contract, ABI, signer);

					const txn = await controllerActionContract.subscriptionCollect(this.data.subHash, {
						gasLimit: 300000,
					});

					await txn.wait();

					location.reload();
				} catch (err) {
					console.log(err);
				}
			},
		},
		async mounted() {
			this.account = await checkAddress(this.id);

			await setChain(this.chain);

			this.data = await randomCollect(this.account);

			this.formattedBal = await ethers.utils.formatEther(this.data.data.unpaidInCost, this.data.tokenInfo.decimal);
		},
	};
</script>
