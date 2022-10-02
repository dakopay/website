<template>
	<div class="px-5">
		<section class="bg-white py-16">
			<div class="container m-auto px-6 space-y-8 text-gray-500 md:px-12 lg:px-20">
				<div class="m-auto space-y-7 w-full py-20 max-w-3xl">
					<h1 class="text-4xl text-gray-700 font-bold text-center md:text-5xl poppins uppercase">Your Subscriptions</h1>
				</div>
			</div>
		</section>

		<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
			<div class="p-2" v-for="item in table_m" v-bind:key="item.txn">
				<router-link :to="{ name: 'sub', params: { id: item.sub, chain: chain } }">
					<div class="card card-compact w-full shadow-xl">
						<figure><img v-bind:src="'https://singlecolorimage.com/get/' + formatColor(item) + '/400x200'" style="opacity: 0.5" /></figure>
						<div class="card-body">
							<h2 class="card-title">{{ formatUnit(item.cost, item.token_decimal) }}</h2>
							<p>{{ item.token_symbol }}/DAY</p>
						</div>
					</div>
				</router-link>
			</div>
		</div>

		<section class="bg-white py-16">
			<div class="container m-auto px-6 space-y-8 text-gray-500 md:px-12 lg:px-20">
				<div class="m-auto space-y-7 w-full py-10 max-w-2xl">
					<h1 class="text-4xl text-gray-700 font-bold text-center md:text-5xl poppins uppercase">Recent Payments Made</h1>
				</div>
			</div>
		</section>

		<div class="overflow-x-auto mx-auto container py-20">
			<table class="table w-full">
				<thead>
					<tr>
						<th></th>
						<th>To</th>
						<th>Amount</th>
						<th>Sub</th>
						<th>Plan</th>
						<th>Time</th>
						<th>View</th>
					</tr>
				</thead>
				<tbody>
					<tr class="hover" v-for="(item, index) in table_d" v-bind:key="item.id">
						<th>{{ index + 1 }}</th>

						<td>
							<router-link :to="{ name: 'account', params: { id: item.boss, chain: chain } }"> {{ trim(item.boss) }}</router-link>
						</td>

						<td>
							<router-link :to="{ name: 'token', params: { id: item.token, chain: chain } }">{{ formatUnit(item.amount, item.token_decimal) }} {{ item.token_symbol }}</router-link>
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
	</div>
</template>

<script>
	import { setChain, graphSubscriptions, graphTransfers, checkAddress, getNetwork } from '@moneymafia/repa-sdk';
	import { format } from 'timeago.js';
	import { ethers } from 'ethers';
	const stc = require('string-to-color');

	export default {
		props: ['id', 'chain'],
		data() {
			return {
				account: '0x0000000000000000000000000000000000000000',
				table_m: [],
				table_d: [],
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
			formatColor(uni) {
				return stc(uni).slice(1);
			},
		},
		async mounted() {
			this.account = await checkAddress(this.id);

			await setChain(this.chain);

			var chainD = await getNetwork(this.chain);

			this.chainExplorerUrl = chainD.explorer + '/tx/';

			this.table_m = await graphSubscriptions(`where : {active : true, user : "` + this.account + `"}`);

			this.table_m = this.table_m.filter((thing, index, self) => index === self.findIndex((t) => t.plan === thing.plan));

			this.table_d = await graphTransfers(`first : 15, where: {user: "` + this.account + `"}`);
		},
	};
</script>
