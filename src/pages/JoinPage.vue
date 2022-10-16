<template>
	<div>LOADING...................</div>
</template>

<script>
	import { isAndroid, isIOS } from 'mobile-device-detect';

	export default {
		props: ['hash'],

		async mounted() {
			console.log('hash', this.hash);

			const desktop_url = `https://join.repa.gg?hash=`;
			const mobile_url = `https://link.trustwallet.com/open_url?url=` + desktop_url;

			if (isAndroid) {
				console.log(mobile_url + this.hash);
				window.location.href = mobile_url + this.hash;
			} else if (isIOS) {
				console.log(mobile_url + this.hash);
				window.location.href = mobile_url + this.hash;
			} else {
				console.log(desktop_url + this.hash);
				window.location.href = desktop_url + this.hash;
			}
		},
	};
</script>
