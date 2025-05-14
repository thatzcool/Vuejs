<script>
    export default {
        emits : ['print-hello','onPrint-hello'],
        props : {
             name : {
              type : String,
                 required: true,
                 validator : function (value) {
                    return value.length > 1;
                 },

             }, 
 
             age : {
                 type : Number,
                 default : function () {
                    return 10;
                 }
             }
        },

        methods : {
            parentEventCall1(){
               
                  this.$emit('print-hello');
            },
            parentEventCall2(){
                  this.$emit('onPrint-hello', {name : 'ssg',age : 25});
               
            }
        }

       
    }
</script>



<template>
     <p>이름 : {{name}}</p>
     <p>이름 : {{ age }}</p>
     <!-- <button @click="$emit('print-hello','ssg',30)">클릭</button> -->
     <button @click="parentEventCall1">클릭</button>
     <button @click="parentEventCall2">클릭</button>
</template>