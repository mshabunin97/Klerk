<template>
<div class="card">
	<div class="wrapper">
		<div class="card-content">
			<p class="card-time">{{ card.time }}</p>
			<h3 class="card-title">{{ card.title }}</h3>
			<h4 class="card-subtitle">
			{{ card.subtitle }}
			</h4>
			<ul class="card-list">
				<li v-for="(item, index) in card.items" :key="index" class="flex" :style="{ 'padding-top': index === 1 ? '8px' : '0' }">
					<img :src="item.icon" alt="vector" />
					<p class="ml-2 font-normal text-[13px] sm:text-sm text-black card-text" :class="{ 'font-medium': item.text === 'Никогда не пришлем платные вебинары' }">
						{{item.text === 'Те, кто подписался – экономят много денег' && isSmallScreen ? 'Те, кто подписался – экономят много денег 🤑' : item.text }}
					</p>
				</li>
			</ul>

			<label class="relative inline-flex items-center cursor-pointer mt-6 sm:mt-4">
				<input type="checkbox" class="sr-only peer" v-model=card.checked />
				<div
					class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
				></div>
				<span class="ml-2 text-sm font-normal text-black hover:text-gray-600"
					>{{ card.checkboxLabel }}</span	
				>
			</label>
		</div>

		<img class="w-[40px] h-[40px] md:w-[80px] md:h-[80px] ml-6" :src="isSmallScreen ? card.pinIconSmall : card.pinIcon" alt="pin" />
	</div>
</div>
</template>

<script>
export default {
  props: {
    card: Object,
	isSmallScreen: Boolean,
  },
};
</script>


