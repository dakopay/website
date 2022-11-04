<template>
	<section class="relative w-full py-12 overflow-hidden md:py-20 xl:pt-32 xl:pb-40">
		<div class="container relative flex flex-col justify-between h-full px-10 mx-auto xl:px-0">
			<div class="flex flex-col w-full mb-10 sm:flex-row">
				<div class="w-full md:w-1/4">
					<div class="relative h-full ml-0 mr-0 sm:mr-10">
						<span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
						<div class="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
							<div class="flex items-center -mt-1">
								<svg class="w-8 h-8 text-indigo-400 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>

								<h3 class="my-5 ml-3 text-xl font-bold text-gray-800">No Database</h3>
							</div>
							<p class="mb-2 text-gray-600">All  subscriptions are stored and managed inside smart contracts. No any off-chain storage is being used.</p>
						</div>
					</div>
				</div>

				<div class="w-full md:w-1/4">
					<div class="relative h-full ml-0 md:mr-10">
						<span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
						<div class="relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg">
							<div class="flex items-center -mt-1">
								<svg class="w-8 h-8 text-purple-400 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>

								<h3 class="my-5 ml-3 text-xl font-bold text-gray-800">Multichain</h3>
							</div>
							<p class="mb-2 text-gray-600">We support multiple chains. Currently we support Binance Smart Chain (BSC) and Polygon (MATIC).</p>
						</div>
					</div>
				</div>

				<div class="w-full md:w-1/4">
					<div class="relative h-full ml-0 mr-0 sm:mr-10">
						<span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
						<div class="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
							<div class="flex items-center -mt-1">
								<svg class="w-8 h-8 text-blue-400 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>

								<h3 class="my-5 ml-3 text-xl font-bold text-gray-800">Easy integration</h3>
							</div>
							<p class="mb-2 text-gray-600">Simply create a subscription link and share the link to the user. Once the user confirms the subscription, you have your subscription plan enabled.</p>
						</div>
					</div>
				</div>

				<div class="w-full md:w-1/4">
					<div class="relative h-full ml-0 md:mr-10">
						<span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
						<div class="relative h-full p-5 bg-white border-2 border-green-500 rounded-lg">
							<div class="flex items-center -mt-1">
								<svg class="w-8 h-8 text-green-400 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>

								<h3 class="my-5 ml-3 text-xl font-bold text-gray-800">ERC-20 tokens</h3>
							</div>
							<p class="mb-2 text-gray-600">You can use any ERC-20 token to pay for your subscription.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
