<script>
import FirstChild from '../../../FirstChild.vue';
import MyChild1 from './components/MyChild1.vue';
// import {message,reversedMessage} from '@kyes';
export default {
  components: {
    FirstChild,
    MyChild1,
  },

  mounted() {
        console.log(this.$refs.childRef.childNum);
        console.log(this.$refs.childRef.childNumOddAdd);
        console.log(this.$refs.childRef.getChildNum());

  },
  
  data() {
    return {
     parentNum : 5,
    };
  },
  computed: {
    numOddEven() {
      return this.parentNum % 2 === 0 ? '짝수' : '홀수';
    },
  },

   methods : {
    getParentNum() {
        return this.parentNum;
    },
   },

};
</script>
<template>
  <FirstChild />
  <MyChild1 ref="childRef"/>
</template>
