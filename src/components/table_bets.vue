<template>
	<div class="hidden lg:block">
		<section class="w-full py-20" @mouseleave="runMe()">
			<div class="relative px-12 mx-auto xl:px-0">
				<h2 class="font-bold text-7xl sm:text-8xl uppercase">{{ chainJ }}</h2>
				<h2 class="font-bold text-2xl sm:text-3xl uppercase mt-4">- Recent Subscriptions</h2>

				<div class="my-20 border border-gray-800"></div>
				<div class="overflow-x-auto mx-auto container py-20">
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
</template>

<script>
	import { setChain, graphSubscriptions, getNetwork } from '@moneymafia/repa-sdk';

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
