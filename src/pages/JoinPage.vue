<template>
	<div>LOADING</div>
</template>

<script>
	import { isAndroid, isIOS } from 'mobile-device-detect';

	export default {
		async mounted() {
			const hash = this.id;

			const desktop_url = `https://join.repa.gg?hash=`;
			const mobile_url = `https://link.trustwallet.com/open_url?url=` + desktop_url;

			if (isAndroid) {
				window.location.href = mobile_url + hash;
			} else if (isIOS) {
				window.location.href = mobile_url + hash;
			} else {
				window.location.href = desktop_url + hash;
			}
		},
	};
</script>
