<template>
  <span class="myshp-resource">
   {{ label }}
 </span>
</template>

<script>

//Vue.use(VueResource);

export default {
  name: 'resource',
  props: ['name','filter'],
  data: function () {
    return {
      done:false,
      list:{
      
    }
    }
  },
  computed: {
  label: function () {
    return 'upper'==this.filter?(""+this.list[this.name]).toUpperCase():'lower'==this.filter?(""+this.list[this.name]).toLowerCase():this.list[this.name];
  }
  },
  created: function () {
    if(!this.done){
      this.done=true;
     this.$http.get('http://edit2.mijnwinkel1.nl/resourceloader.json').then(function (response) {
       this.list = response.data
     });
   }
   }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.myshp-resource {
  color: #42b983;
}
</style>
