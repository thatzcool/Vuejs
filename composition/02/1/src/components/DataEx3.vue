<script setup>
import { reactive } from 'vue';
const state = reactive({
  // 참조 자료형만 가능
  count: 0,
});
//const state2 = reactive(0);
console.log(state.count);
//1초 뒤에 state.count의 값이 1 증가하도록 코드 구현 
setTimeout(
  () => {
       state.count++;
  }
);
</script>
<template>
  <h1>state : {{state.count}}</h1>
</template>
