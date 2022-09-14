<template>
	<section class="bg-white py-16">
		<div class="container m-auto px-6 space-y-8 text-gray-500 md:px-12 lg:px-20">
			<div class="flex items-center justify-center -space-x-3">
				<img class="w-12 h-12 object-cover rounded-full border-4 border-white" src="https://cdn.devdojo.com/tails/avatars/094.jpg" alt="avatar" />
				<img class="w-16 h-16 object-cover rounded-full border-4 border-white" src="https://cdn.devdojo.com/tails/avatars/017.jpg" alt="avatar" />
				<img class="z-10 w-20 h-20 object-cover rounded-full border-4 border-white" src="https://cdn.devdojo.com/tails/avatars/080.jpg" alt="avatar" />
				<img class="relative w-16 h-16 object-cover rounded-full border-4 border-white" src="https://cdn.devdojo.com/tails/avatars/075.jpg" alt="avatar" />
				<img class="w-12 h-12 object-cover rounded-full border-4 border-white" src="https://cdn.devdojo.com/tails/avatars/082.jpg" alt="avatar" />
			</div>
			<div class="m-auto space-y-7 w-full pb-5 max-w-2xl">
				<h1 class="text-4xl text-gray-700 font-bold text-center md:text-5xl poppins">Your {{ type }} Profile</h1>
				<p class="text-xl text-center poppins">{{ account }}</p>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		props: ['account', 'type'],
	};
</script>
