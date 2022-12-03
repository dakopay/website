<template>
	<div>
		<section class="container mx-auto py-10 md:py-20 antialiased">
			<section class="grid gap-8 placeholder:grid-cols-1 lg:grid-cols-4">
				<router-link :to="{ name: 'account_out', params: { id: id, chain: chain } }">
					<article class="mx-auto w-full bg-cover bg-center cursor-pointer transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl py-10 col-span-1">
						<div class="w-48 h-48 py-5 mx-auto md:w-56 md:h-56">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-full h-full rounded-xl text-pink-200">
								<path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
							</svg>
						</div>
						<h2 class="text-center text-3xl font-bold min-h-3 px-12">Subscriptions</h2>
					</article>
				</router-link>

				<router-link :to="{ name: 'account_in', params: { id: id, chain: chain } }">
					<article class="mx-auto w-full bg-cover bg-center cursor-pointer transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl py-10 col-span-1">
						<div class="w-48 h-48 py-5 mx-auto md:w-56 md:h-56">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="relative z-20 w-full h-full rounded-xl text-green-200">
								<path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
							</svg>
						</div>
						<h2 class="text-center text-3xl font-bold min-h-3 px-12">Subscibers</h2>
					</article>
				</router-link>

				<article class="mx-auto w-full bg-cover bg-center cursor-pointer transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl py-10 col-span-2" v-if="data.canUserPay && formattedBal > 1">
					<div class="px-10">
						<p class="mb-5 text-sm font-bold text-purple-500 uppercase">COLLECT PENDING SUBSCIPTION</p>
						<h1 class="text-3xl font-bold">
							<span class="text-gray-900">{{ formattedBal }} </span> <span class="text-purple-600">{{ data.tokenInfo.symbol }}</span>
						</h1>
						<p class="text-base text-gray-500 sm:text-lg">Last Paid : {{ data.data.unpaidInDay }} Days Ago</p>
						<div class="flex flex-col items-center w-full space-x-5 lg:flex-row py-5">
							<a @click="collect()" class="max-w-xl px-5 py-5 text-2xl font-medium text-center text-white bg-purple-600 shadow-xl hover:bg-purple-700 rounded-3xl cursor-pointer">COLLECT</a>
						</div>
					</div>
				</article>
			</section>
		</section>
	</div>
</template>

<script>
	import { ABI, checkAddress, setChain, randomCollect, getNetwork } from 'dakopay-sdk';
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

			try {
				this.data = await randomCollect(this.account);
				this.formattedBal = await ethers.utils.formatEther(this.data.data.unpaidInCost, this.data.tokenInfo.decimal);
			} catch (error) {
				console.log(error);
			}
		},
	};
</script>
