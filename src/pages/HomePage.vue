<template>
	<div>
		<div class="flex flex-row mx-auto container py-40 px-10">
			<div class="basis-1/2 m-auto">
				<h1 class="relative mb-4 text-2xl md:text-5xl font-black text-gray-700 uppercase">Start Accepting Recurring Cryptocurrency Payments</h1>

				<div class="w-full flex sm:flex-row flex-col sm:justify-center lg:justify-start font-medium sm:space-x-5 space-y-4 sm:space-y-0 uppercase">
					<router-link
						:to="{ name: 'createsub' }"
						class="px-7 py-4 bg-gray-900 text-white border-2 border-gray-900 hover:bg-white hover:text-gray-900 transition-all ease-out duration-150 rounded-xl flex items-center justify-center text-lg"
					>
						Create Subscription</router-link
					><router-link
						:to="{ name: 'createdonate' }"
						class="px-7 py-4 bg-gray-900 text-white border-2 border-gray-900 hover:bg-white hover:text-gray-900 transition-all ease-out duration-150 rounded-xl flex items-center justify-center text-lg"
					>
						Create Donation</router-link
					>
				</div>
			</div>
			<div class="basis-1/2 m-auto hidden md:block">
				<img class="w-full h-full" src="img/tokens.png" />
			</div>
		</div>

		<section class="relative w-full py-12 overflow-hidden md:py-20 xl:pt-32 xl:pb-40">
			<div class="container relative flex flex-col justify-between h-full px-10 mx-auto xl:px-0">
				<div class="flex flex-col w-full mb-10 sm:flex-row">
					<div class="w-full md:w-1/4">
						<div class="relative h-full ml-0 mr-0 sm:mr-10">
							<span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
							<div class="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
								<div class="flex items-center -mt-1">
									<svg class="w-8 h-8 text-indigo-400 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>

									<h3 class="my-5 ml-3 text-xl font-bold text-gray-800">No Database</h3>
								</div>
								<p class="mb-2 text-gray-600">All subscriptions are stored and managed inside smart contracts. No any off-chain storage is being used.</p>
							</div>
						</div>
					</div>

					<div class="w-full md:w-1/4">
						<div class="relative h-full ml-0 md:mr-10">
							<span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
							<div class="relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg">
								<div class="flex items-center -mt-1">
									<svg class="w-8 h-8 text-purple-400 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>

									<h3 class="my-5 ml-3 text-xl font-bold text-gray-800">Multichain</h3>
								</div>
								<p class="mb-2 text-gray-600">We support multiple chains. Currently we support Binance Smart Chain (BSC) and Polygon (MATIC).</p>
							</div>
						</div>
					</div>

					<div class="w-full md:w-1/4">
						<div class="relative h-full ml-0 mr-0 sm:mr-10">
							<span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
							<div class="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
								<div class="flex items-center -mt-1">
									<svg class="w-8 h-8 text-blue-400 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>

									<h3 class="my-5 ml-3 text-xl font-bold text-gray-800">Easy integration</h3>
								</div>
								<p class="mb-2 text-gray-600">Simply create a subscription link and share the link to the user. Once the user confirms the subscription, you have your subscription plan enabled.</p>
							</div>
						</div>
					</div>

					<div class="w-full md:w-1/4">
						<div class="relative h-full ml-0 md:mr-10">
							<span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
							<div class="relative h-full p-5 bg-white border-2 border-green-500 rounded-lg">
								<div class="flex items-center -mt-1">
									<svg class="w-8 h-8 text-green-400 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>

									<h3 class="my-5 ml-3 text-xl font-bold text-gray-800">ERC-20 tokens</h3>
								</div>
								<p class="mb-2 text-gray-600">You can use any ERC-20 token to pay for your subscription.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<div class="hidden lg:block">
			<section class="w-full py-40" @mouseleave="runMe()">
				<div class="relative px-5 mx-auto xl:px-0">
					<h2 class="font-bold text-7xl sm:text-8xl uppercase">{{ chainJ }}</h2>
					<h2 class="font-bold text-2xl sm:text-3xl uppercase mt-4">- Recent Subscriptions</h2>

					<div class="my-10 border border-gray-800"></div>

					<div class="overflow-x-auto mx-auto container py-10">
						<table class="table w-full">
							<thead>
								<tr>
									<th></th>
									<th>User</th>
									<th>Sub</th>
									<th>Plan</th>
									<th>Token</th>
									<th>Time</th>
									<th>View</th>
								</tr>
							</thead>
							<tbody>
								<tr class="hover" v-for="(item, index) in table" v-bind:key="item.id">
									<th>{{ index + 1 }}</th>

									<td>
										<router-link :to="{ name: 'account', params: { id: item.user, chain: currentchain } }"> {{ trim(item.user) }}</router-link>
									</td>
									<td>
										<router-link :to="{ name: 'sub', params: { id: item.sub, chain: currentchain } }"> {{ trim(item.sub) }}</router-link>
									</td>
									<td>
										<router-link :to="{ name: 'plan', params: { id: item.plan, chain: currentchain } }"> {{ trim(item.plan) }}</router-link>
									</td>
									<td>
										<router-link :to="{ name: 'token', params: { id: item.token, chain: currentchain } }"> {{ item.token_symbol }}</router-link>
									</td>
									<td>{{ timeNowa(item.timestamp) }}</td>
									<td>
										<a :href="chainExplorerUrl + item.txn"><button class="btn btn-primary btn-xs">View</button></a>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
	import { setChain, graphSubscriptions, getNetwork } from 'dakopay-sdk';

	import { format } from 'timeago.js';

	export default {
		props: ['id'],
		data() {
			return {
				table: [],
				chainJ: '',
				chainExplorerUrl: '',
				currentchain: '',
			};
		},
		methods: {
			trim(address) {
				return `${address.slice(0, 5)}...${address.slice(address.length - 5, address.length)}`;
			},
			timeNowa(time) {
				return format(new Date(time * 1000));
			},
			async runMe() {
				try {
					var arr = [5, 137, 56];
					var random = arr[Math.floor(Math.random() * arr.length)];
					this.currentchain = random;
					setChain(random);

					var chainD = await getNetwork(random);
					this.chainExplorerUrl = chainD.explorer + '/tx/';
					this.chainJ = chainD.name;

					this.table = await graphSubscriptions('first: 10');
				} catch (e) {
					console.log(e);
				}
			},
		},
		async mounted() {
			this.runMe();
		},
	};
</script>
