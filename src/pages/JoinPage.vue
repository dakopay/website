<template>
	<div>LOADING...................</div>
</template>

<script>
	import { isAndroid, isIOS } from 'mobile-device-detect';
	import { decodeSubscription } from '@moneymafia/repa-sdk';

	export default {
		props: ['hash'],

		data() {
			return {
				urltogo: '',
			};
		},

		async mounted() {
			const decodedsub = await decodeSubscription(this.hash);

			let sep44x = '9006';

			if (decodedsub.network == 56) {
				sep44x = '9006';
			}

			if (decodedsub.network == 137) {
				sep44x = '966';
			}

			const desktop_url = `https://join.repa.gg?hash=`;

			const mobile_url = `https://link.trustwallet.com/open_url?coin_id=` + sep44x + `&url=` + desktop_url;

			if (isAndroid) {
				console.log(mobile_url + this.hash);
				this.urltogo = mobile_url + this.hash;
			} else if (isIOS) {
				console.log(mobile_url + this.hash);
				this.urltogo = mobile_url + this.hash;
			} else {
				console.log(desktop_url + this.hash);
				this.urltogo = desktop_url + this.hash;
			}

			window.location.href = this.urltogo;
		},
	};
</script>
