<template>
	<section class="bg-gray-50">
		<div class="px-10 py-20 mx-auto container">
			<div class="flex items-center justify-between w-full pb-5 mb-8 border-b border-gray-200">
				<h2 class="text-3xl font-bold text-gray-800">Learning Resources</h2>
				<a href="https://medium.com/@projectrepa" class="flex items-center text-base font-semibold text-blue-400 hover:text-blue-500 group">
					<span>View More Posts</span>
					<svg class="w-4 h-4 mt-0.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
					</svg>
				</a>
			</div>

			<div class="grid grid-cols-12 gap-6">
				<div class="relative col-span-12 mb-10 space-y-4 md:col-span-6 lg:col-span-4">
					<a href="https://doc.repa.gg/Guide/guide-create.html" class="relative block w-full h-64 overflow-hidden rounded">
						<img class="object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105" src="img/create.jpg" />
					</a>
					<p class="text-xs font-bold text-gray-400 uppercase">Resources</p>
					<a
						href="https://medium.com/@projectrepa/how-to-create-recurring-cryptocurrency-subscription-plan-aa821f5aa45d"
						class="block text-2xl font-medium leading-tight text-gray-700 hover:text-gray-900"
						>Create Recurring Cryptocurrency Subscription Plan</a
					>
				</div>

				<div class="relative col-span-12 mb-10 space-y-4 md:col-span-6 lg:col-span-4">
					<a href="https://doc.repa.gg/Guide/guide-join.html" class="relative block w-full h-64 overflow-hidden rounded">
						<img class="object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105" src="img/subscribe.jpg" />
					</a>
					<p class="text-xs font-bold text-gray-400 uppercase">Resources</p>
					<a
						href="https://medium.com/@projectrepa/how-to-subscribe-to-a-recurring-payment-plan-on-blockchain-d2de2a71a38e"
						class="block text-2xl font-medium leading-tight text-gray-700 hover:text-gray-900"
						>Subscribe To a Recurring Payment Plan</a
					>
				</div>

				<div class="relative col-span-12 mb-10 space-y-4 md:col-span-6 lg:col-span-4">
					<a href="https://doc.repa.gg/" class="relative block w-full h-64 overflow-hidden rounded">
						<img class="object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105" src="img/repa_main.png" />
					</a>
					<p class="text-xs font-bold text-gray-400 uppercase">Resources</p>
					<a href="https://medium.com/@projectrepa/what-is-repa-gg-e5c856876ecb" class="block text-2xl font-medium leading-tight text-gray-700 hover:text-gray-900">What is Repa.gg</a>
				</div>
			</div>
		</div>
	</section>
</template>
