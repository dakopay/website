<template>
	<div class="flex flex-row mx-auto max-w-6xl py-40 px-10">
		<div class="basis-1/2 m-auto">
			<h1 class="relative mb-4 text-5xl font-black leading-tight text-gray-700 uppercase">Start Accepting Recurring Cryptocurrency Payments</h1>

			<router-link
				:to="{ name: 'create' }"
				class="uppercase self-start inline-block w-auto px-8 py-4 mx-auto mt-0 text-base font-bold text-white bg-indigo-600 border-t border-gray-200 rounded-md shadow-xl sm:mt-1 fold-bold lg:mx-0"
				>Create Subscription</router-link
			>
		</div>
		<div class="basis-1/2 m-auto">
			<img class="w-full h-full" src="img/tokens.png" />
		</div>
	</div>
</template>
