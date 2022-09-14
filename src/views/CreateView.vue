<template>
	<div class="py-20 px-5">
		<div class="form-control w-full max-w-xl py-5">
			<select v-model="chainName" class="select select-primary w-full max-w-xs">
				<option>TESTNET</option>
				<option>BSC</option>
				<option>POLYGON</option>
			</select>
		</div>

		<div class="form-control w-full max-w-xl py-5">
			<label class="label">
				<span class="label-text">TOKEN Address</span>
			</label>
			<input v-model="token" type="text" placeholder="Type here" class="input input-bordered w-full max-w-xl" />
		</div>

		<div class="form-control w-full max-w-xl py-5">
			<label class="label">
				<span class="label-text">Reciever Address</span>
			</label>
			<input v-model="merchant" type="text" placeholder="Type here" class="input input-bordered w-full max-w-xl" />
		</div>

		<div class="form-control w-full max-w-xl py-5">
			<label class="label">
				<span class="label-text">Cost Per Day</span>
			</label>
			<input v-model="cost" type="text" placeholder="Type here" class="input input-bordered w-full max-w-xl" />
		</div>

		<div class="form-control w-full max-w-xl py-5">
			<label class="label cursor-pointer py-3">
				<span class="label-text">Initail Charge</span>
				<input type="checkbox" class="toggle toggle-lg" checked v-model="showDAys" />
			</label>

			<div v-if="showDAys">
				<label class="label">
					<span class="label-text">Number Of Days</span>
				</label>
				<input v-model="day" type="number" placeholder="Type here" class="input input-bordered w-full max-w-xl" />
			</div>
		</div>

		<div class="form-control w-full max-w-xl py-5">
			<button
				@click="genLink"
				type="button"
				class="inline-flex w-auto cursor-pointer select-none appearance-none items-center justify-center space-x-1 rounded border border-blue-700 bg-blue-700 px-3 py-2 text-sm font-medium text-white transition hover:border-blue-800 hover:bg-blue-800 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
			>
				Genrate Link
			</button>
		</div>

		<div class="py-10" v-if="link">
			<textarea v-model="link" rows="3" class="textarea textarea-success w-full max-w-xl"></textarea>
		</div>
	</div>
</template>

<script>
	import { checkAddress, encodeSubscription } from '@moneymafia/repa-sdk';

	export default {
		data() {
			return {
				merchant: this.$store.state.address || '0x000000000000000000000000000000000000dead',
				token: '0x000000000000000000000000000000000000dead',
				cost: 2,
				day: 0,
				link: null,
				showDAys: false,
				chainNames: {
					TESTNET: '5',
					BSC: '56',
					POLYGON: '137',
				},
				chainName: 'TESTNET',
			};
		},

		methods: {
			async genLink() {
				var mec = await checkAddress(this.merchant);
				var tok = await checkAddress(this.token);

				this.link = await encodeSubscription(this.chainNames[this.chainName], mec, tok, this.cost, this.day);
			},
		},
	};
</script>
