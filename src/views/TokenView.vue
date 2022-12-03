<template>
	<div>
		<section class="w-full flex">
			<div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
				<div class="text-center space-y-5">
					<p class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-7xl">
						<span class="px-2 py-1 relative inline-block"
							><svg class="stroke-current bottom-0 absolute text-pink-400 -translate-x-2" viewBox="0 0 410 18" xmlns="http://www.w3.org/2000/svg">
								<path d="M6 6.4c16.8 16.8 380.8-11.2 397.6 5.602" stroke-width="11.2" fill="none" fill-rule="evenodd" stroke-linecap="round"></path></svg
							><span class="relative">{{ token.symbol }}</span></span
						>
						TOKEN
					</p>
					<p class="max-w-3xl mt-5 mx-auto text-xl text-gray-500">
						{{ id }}
					</p>
				</div>
			</div>
		</section>

		<section class="py-16">
			<div class="container m-auto px-6 space-y-8 text-gray-500 md:px-12 lg:px-20">
				<div class="m-auto space-y-7 w-full pb-5 max-w-2xl">
					<h1 class="text-4xl text-gray-700 font-bold text-center md:text-5xl poppins">Recent Subscriptions</h1>
				</div>
			</div>
		</section>

		<div class="overflow-x-auto mx-auto container py-20">
			<table class="table w-full">
				<thead>
					<tr>
						<th></th>
						<th>User</th>
						<th>Sub</th>
						<th>Plan</th>
						<th>Time</th>
						<th>View</th>
					</tr>
				</thead>
				<tbody>
					<tr class="hover" v-for="(item, index) in table" v-bind:key="item.id">
						<th>{{ index + 1 }}</th>
						<td>
							<router-link :to="{ name: 'account', params: { id: item.user, chain: chain } }"> {{ trim(item.user) }}</router-link>
						</td>

						<td>
							<router-link :to="{ name: 'sub', params: { id: item.sub, chain: chain } }"> {{ trim(item.sub) }}</router-link>
						</td>

						<td>
							<router-link :to="{ name: 'plan', params: { id: item.plan, chain: chain } }"> {{ trim(item.plan) }}</router-link>
						</td>

						<td>{{ timeNowa(item.timestamp) }}</td>

						<td>
							<a :href="chainExplorerUrl + item.txn"><button class="btn btn-primary btn-xs">View</button></a>
						</td>
					</tr>
				</tbody>
			</table>
		</div>

		<section class="py-16">
			<div class="container m-auto px-6 space-y-8 text-gray-500 md:px-12 lg:px-20">
				<div class="m-auto space-y-7 w-full pb-5 max-w-2xl">
					<h1 class="text-4xl text-gray-700 font-bold text-center md:text-5xl poppins">Recent Transfers</h1>
				</div>
			</div>
		</section>

		<div class="overflow-x-auto mx-auto container py-20">
			<table class="table w-full">
				<thead>
					<tr>
						<th></th>
						<th>From</th>
						<th>To</th>
						<th>Amount</th>
						<th>Sub</th>
						<th>Plan</th>
						<th>Time</th>
						<th>View</th>
					</tr>
				</thead>
				<tbody>
					<tr class="hover" v-for="(item, index) in transfers" v-bind:key="item.id">
						<th>{{ index + 1 }}</th>

						<td>
							<router-link :to="{ name: 'account', params: { id: item.user, chain: chain } }"> {{ trim(item.user) }}</router-link>
						</td>

						<td>
							<router-link :to="{ name: 'account', params: { id: item.user, chain: chain } }"> {{ trim(item.boss) }}</router-link>
						</td>

						<td>{{ formatUnit(item.amount, item.token_decimal) }} {{ item.token_symbol }}</td>

						<td>
							<router-link :to="{ name: 'sub', params: { id: item.sub, chain: chain } }"> {{ trim(item.sub) }}</router-link>
						</td>

						<td>
							<router-link :to="{ name: 'plan', params: { id: item.plan, chain: chain } }"> {{ trim(item.plan) }}</router-link>
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
</template>

<script>
	import { setChain, graphSubscriptions, graphTransfers, tokenDetails, getNetwork } from 'dakopay-sdk';
	import { format } from 'timeago.js';
	import { ethers } from 'ethers';

	export default {
		props: ['id', 'chain'],
		data() {
			return {
				token: '',
				table: [],
				transfers: [],
				chainExplorerUrl: '',
			};
		},
		methods: {
			trim(address) {
				return `${address.slice(0, 5)}...${address.slice(address.length - 5, address.length)}`;
			},
			timeNowa(time) {
				return format(new Date(time * 1000));
			},
			formatUnit(uni, decimals) {
				return ethers.utils.formatEther(uni, decimals);
			},
		},
		async mounted() {
			await setChain(this.chain);

			var chainD = await getNetwork(this.chain);

			this.chainExplorerUrl = chainD.explorer + '/tx/';

			try {
				this.token = await tokenDetails(this.id);

				this.table = await graphSubscriptions(`first : 20, where: {token: "` + this.id + `"}`);

				this.transfers = await graphTransfers(`first : 20, where: {token: "` + this.id + `"}`);
			} catch (e) {
				console.log(e);
			}
		},
	};
</script>
