<template>
	<div class="breadcrumbs">
		<p class="border-b border-blue-100 hover:text-gray-500">{{ firstCrumbText  }}</p>
			<span class="px-2">→</span>
		<p class="border-b border-blue-100 hover:text-gray-500">{{ secondCrumbText }}</p>
			<span class="px-2">→</span>
		<p class="border-b border-blue-100 hover:text-gray-500">Хлебные крошки</p>
	</div>
</template>

<script>
	import {ref, onMounted, onBeforeUnmount, computed} from 'vue'
	export default {

	name: 'Breadcrumbs',

    setup() {
    const isSmallScreen = ref(false);

    const resizeHandler = () => {
      isSmallScreen.value = window.innerWidth <= 768;
    };

    onMounted(() => {
      resizeHandler();
      window.addEventListener("resize", resizeHandler);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("resize", resizeHandler);
    });

    const firstCrumbText  = computed(() => {
      return isSmallScreen.value ? 'Главная' : 'Хлебные крошки';  
    });

    const secondCrumbText = computed(() => {
      return isSmallScreen.value ? 'Рассылки' : 'Хлебные крошки';
    });

    return {
      firstCrumbText,
      secondCrumbText
    };
  },
};
</script>