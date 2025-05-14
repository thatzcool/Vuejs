<script>
import  {message, reversedMessage} from '@/kyes';
    export default {
      // inject : ['message','reversedMessage'],

  inject: {
    customMessage: {
      from: message,
      default: 'default value',
    },
    customReversedMessage: {
      from: reversedMessage,   //import 로 불러온 Symbol을 사용할때는 key 이름(Symbol)을 지정 
      default: 'default value',
    },
  },
};

</script>
<template>
  <h1>{{ message }}</h1>
  <h2>{{ reversedMessage }}</h2>
  <h1>{{ customMessage }}</h1>
  <h2>{{ customReversedMessage }}</h2>
</template>

<style>
     h1 {
        color: blue;
     }

     p {
         color: green;
     }
     
</style>