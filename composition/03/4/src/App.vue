<script setup>
import Inject from '@/components/Inject.vue';
import { computed, provide, reactive } from 'vue';
const fruits = reactive(['apples', 'bananas', 'oranges']);

const fruitsTxt = computed(() => `I like ${fruits[0]}`);

provide('fruitsArr', fruits);
provide('fruitsText', fruitsTxt);
provide('userObj', { name: 'ssg', age: 30 });
</script>
<template>
  <Inject />
</template>
