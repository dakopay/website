<template>
	<div>
		<div v-if="data.cost < 1">Subscription Deleted</div>

		<div class="mx-auto max-w-4xl py-20" v-if="data.cost > 1">
			<p class="text-xl">{{ data.user }}</p>
			<br />
			<p class="text-sm uppercase">Is Paying</p>
			<br />
			<p class="text-xl">{{ data.boss }}</p>
			<br />
			<p class="text-sm uppercase">Daily</p>
			<br />
			<p class="text-xl">{{ formattedBal }} {{ token.symbol }}</p>
			<br />
			<p class="text-sm uppercase">Using TOKEN</p>
			<br />
			<p class="text-xl">{{ data.token }}</p>
			<br />

			<div v-if="showCancel">
				<button
					@click="closetxn"
					type="button"
					class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-4 mb-4"
				>
					Cancel
				</button>
			</div>

			<br />
			<br />
			<p class="text-sm">SUB ID : {{ id }}</p>
		</div>

		<section class="bg-white py-16">
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
							<router-link :to="{ name: 'account', params: { id: item.boss, chain: chain } }"> {{ trim(item.boss) }}</router-link>
						</td>

						<td>
							<router-link :to="{ name: 'token', params: { id: item.token, chain: chain } }"> {{ formatUnit(item.amount, item.token_decimal) }} {{ item.token_symbol }}</router-link>
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
	import { ethers } from 'ethers';
	import { format } from 'timeago.js';
	import { ABI, setChain, subscriptions, tokenDetails, graphTransfers, checkAddress, getNetwork } from 'repa-sdk';

	export default {
		props: ['id', 'chain'],
		data() {
			return {
				network: '',
				data: '',
				token: '  ',
				showCancel: false,
				formattedBal: 0,
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

			async closetxn() {
				try {
					await window.ethereum.enable();

					const newProvider = new ethers.providers.Web3Provider(window.ethereum);

					const signer = newProvider.getSigner();

					var sChain = await window.ethereum.request({ method: 'eth_chainId' });

					if (parseInt(sChain) != this.chain) {
						alert('Wrong Network');
						return null;
					}

					const networkData = await getNetwork(this.chain);

					const controllerActionContract = new ethers.Contract(networkData.contract, ABI, signer);

					const txn = await controllerActionContract.subscriptionCancel(this.id, {
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
			await setChain(this.chain);

			var chainD = await getNetwork(this.chain);
			this.chainExplorerUrl = chainD.explorer + '/tx/';

			this.data = await subscriptions(this.id);

			this.token = await tokenDetails(this.data.token);

			var myAddress = await checkAddress(this.$store.state.address);

			var ymAddress1 = await checkAddress(this.data.boss);

			var ymAddress2 = await checkAddress(this.data.user);

			if (ymAddress1 == myAddress) {
				this.showCancel = true;
			}

			if (ymAddress2 == myAddress) {
				this.showCancel = true;
			}

			this.formattedBal = await ethers.utils.formatEther(this.data.cost, this.token.decimal);

			this.transfers = await graphTransfers(`where: {sub: "` + this.id + `"}`);
		},
	};
</script>
