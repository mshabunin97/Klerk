<template>
    <label class="relative inline-flex items-center pb-8 cursor-pointer ml-4 md:ml-12">
        <input type="checkbox" value="" class="sr-only peer" @change=onChecked>
        <div class="w-8 h-4 bg-gray-200 rounded-full dark:bg-gray-300 peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-500"></div>
        <span class="ml-2 text-sm font-normal text-black hover:text-gray-600">Подписаться на все рассылки</span>
    </label>
</template>

<script>
export default {
    name: 'SmallSwitcher',
    emits: ['checked'],

    methods: {
        onChecked(event) {
            this.$emit('checked', event.target.checked)
        }
    }
};
</script>