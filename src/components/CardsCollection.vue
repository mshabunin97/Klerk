<script setup>

import Card from './Card.vue'
import { ref, onMounted, onUnmounted } from 'vue';

const isSmallScreen = ref(false);

const handleResize = () => {
  isSmallScreen.value = window.innerWidth < 640;
};

onMounted(() => {   
  handleResize();
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<template>
    <div class="content-wrapper">

      <Card 
        v-for="item in cards"
        :key=item.id
        :card=item
        v-model=item.checked
        :is-small-screen="isSmallScreen"
      />
    </div>
</template>

<script>
export default {
    name: 'CardsCollection',
    props: {
  		cards: Array
  	},
};
</script>
