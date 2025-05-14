<script setup>
import { ref } from 'vue';
const count = ref(0); // 기본 자료형 사용  , 객체를 랩핑(어떤 값을 다른 객체로 감싸는 것)
const state = ref({
  // 참조 자료형 사용
  count: 0,
});
setTimeout(() => {
  count.value++; // count 값 1 증가
}, 1000);
setTimeout(() => {
  state.count++; // state 객체의 count 속성 값 1 증가
}, 1000);
console.log(count.value);
console.log(state.value.count);
</script>
<template>
   <!-- 반응형 변수인 count, state 에 할당 된 값들을 언랩핑(어떤 값을 다른 객체가 감싸고 있을때, 감싸진 상태를 해제하고 원래 값에 직접 접근하는 것) -->
  <h1>count : {{ count }}</h1>
  <h1>state : {{ state.count }}</h1>
</template>
