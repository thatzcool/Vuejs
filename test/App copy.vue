<script>

export default {
       data() {
        return  {
            domEl : null,
        };
       },
   
      mounted() {
        const domEl = document.querySelector('h1');
        const text = domEl.innerText;
        console.log(text);
      }

}



</script>

<template>
    <h1> h1 태그 </h1>
</template>

<style scoped>
   
    
</style>