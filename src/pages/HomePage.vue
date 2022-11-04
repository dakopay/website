<template>
	<div>
		<main_land />
		<feature_now />
		<table_bets />
	</div>
</template>

<script>
	import main_land from '@/components/main_land.vue';
	import feature_now from '@/components/feature_now.vue';
	import table_bets from '@/components/table_bets.vue';

	export default {
		components: {
			main_land,
			feature_now,
			table_bets,
		},
	};
</script>
