<script>
  export default{
  
     beforeMount(){
         const name = this.$route.query.name;
         const age = this.$route.query.age;
         console.log(this.name);
         console.log(this.age);


     }


  }
</script>