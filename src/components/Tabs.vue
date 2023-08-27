<template>
    <div class="tabs">
        <span
            v-for="(tab, index) in tabs"
            :key="index"
            :class="['tabs-item', { 'active': activeTabIndex === index }]"
            @click="setActiveTab(index)"
        >
            {{ tab }}
        </span>
    </div>
</template>

<script>
export default {
    name: 'Tabs',
    data() {
		return {
		tabs: ['Рассылки', 'Соцсети', 'Мессенджеры'],
		activeTabIndex: 0,
		};
  	},
	methods: {
		setActiveTab(index) {
			this.activeTabIndex = index;
		},
	},
};
</script>