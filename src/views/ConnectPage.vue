<template>
	<div>
		<div class="mx-auto max-w-lg py-20">
			<a @click="set_id()" class="max-w-xl px-5 py-5 text-2xl font-medium text-center text-white bg-purple-600 shadow-xl hover:bg-purple-700 rounded-3xl cursor-pointer uppercase">Set {{ name }}</a>
		</div>

		<section class="container mx-auto py-10 md:py-20 antialiased">
			<section class="grid lg:grid-cols-5 grid-cols-1 gap-8">
				<article class="mx-auto w-full p-2 bg-cover bg-center cursor-pointer transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl">
					<img class="mx-auto mb-5 mt-5 w-40" src="img/network/twitter.png" />
					<p class="m-4 text-lg p-4 leading-relaxed text-center">{{ user_twitter }} ✅</p>
				</article>

				<article class="mx-autow-full p-2 bg-cover bg-center cursor-pointer transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl">
					<img class="mx-auto mb-5 mt-5 w-40" src="img/network/telegram.png" />
					<p class="m-4 text-lg p-4 leading-relaxed text-center">{{ user_telegram }} ✅</p>
				</article>

				<article class="mx-auto w-full p-2 bg-cover bg-center cursor-pointer transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl">
					<img class="mx-auto mb-5 mt-5 w-40" src="img/network/discord.png" />
					<p class="m-4 text-lg p-4 leading-relaxed text-center">{{ user_discord }} ✅</p>
				</article>
			</section>
		</section>
	</div>
</template>

<script>
	import { ethers } from 'ethers';

	import detectEthereumProvider from '@metamask/detect-provider';

	import { store_get } from '@moneymafia/repa-sdk';

	const STOREABI = require('@/abi/store.json');

	export default {
		props: ['name', 'id'],

		data() {
			return {
				eth_balance: 0,
				txninprocess: false,
				user_discord: false,
				user_telegram: false,
				user_twitter: false,
			};
		},
		methods: {
			async set_id() {
				try {
					await window.ethereum.enable();

					const newProvider = new ethers.providers.Web3Provider(window.ethereum);

					const signer = newProvider.getSigner();

					const contr_token = new ethers.Contract('0x2E5CeeD37487570f8f0addC2e98dec8B95f9FA57', STOREABI, signer);

					const txn = await contr_token.set(this.name, this.id);

					this.txninprocess = true;

					await txn.wait();

					location.reload();

					this.txninprocess = false;
				} catch (err) {
					console.log(err);
				}
			},
		},
		async mounted() {
			const provider = await detectEthereumProvider();

			if (provider) {
				await provider.enable();

				const accounts = await provider.request({
					method: 'eth_requestAccounts',
				});

				const chainId = await provider.request({
					method: 'eth_chainId',
				});

				this.account = accounts[0];

				this.chain = parseInt(chainId);

				if (chainId != 5) {
					alert('Please switch to Groli Network');
				}

				const balance = await provider.request({
					method: 'eth_getBalance',
					params: [this.account, 'latest'],
				});

				this.eth_balance = ethers.utils.formatEther(balance);

				if (this.eth_balance < 0.01) {
					alert('Please add Testnet ETH to your wallet');
				}

				var user_discord = await store_get(this.account, 'discord');
				var user_telegram = await store_get(this.account, 'telegram');
				var user_twitter = await store_get(this.account, 'twitter');

				if (user_discord.valid) {
					this.user_discord = user_discord.result;
				}
				if (user_telegram.valid) {
					this.user_telegram = user_telegram.result;
				}
				if (user_twitter.valid) {
					this.user_twitter = user_twitter.result;
				}
			} else {
				alert('No Wallet Found !!');
			}
		},
	};
</script>
