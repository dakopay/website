<template>
	<div class="flex flex-row mx-auto container py-40 px-10">
		<div class="basis-1/2 m-auto">
			<h1 class="relative mb-4 text-2xl md:text-5xl font-black text-gray-700 uppercase">Start Accepting Recurring Cryptocurrency Payments</h1>

			<div class="w-full flex sm:flex-row flex-col sm:justify-center lg:justify-start font-medium sm:space-x-5 space-y-4 sm:space-y-0 uppercase">
				<router-link
					:to="{ name: 'createsub' }"
					class="px-7 py-4 bg-gray-900 text-white border-2 border-gray-900 hover:bg-white hover:text-gray-900 transition-all ease-out duration-150 rounded-xl flex items-center justify-center text-lg"
				>
					Create Subscription</router-link
				><router-link
					:to="{ name: 'createdonate' }"
					class="px-7 py-4 bg-gray-900 text-white border-2 border-gray-900 hover:bg-white hover:text-gray-900 transition-all ease-out duration-150 rounded-xl flex items-center justify-center text-lg"
				>
					Create Donation</router-link
				>
			</div>
		</div>
		<div class="basis-1/2 m-auto hidden md:block">
			<img class="w-full h-full" src="img/tokens.png" />
		</div>
	</div>
</template>
