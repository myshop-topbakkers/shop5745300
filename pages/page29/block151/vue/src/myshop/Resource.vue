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
    }
  },
  computed: {
    label: function () {
      return 'upper'==this.filter?(""+this.$store.state.list[this.name]).toUpperCase():'lower'==this.filter?(""+this.$store.state.list[this.name]).toLowerCase():this.$store.state.list[this.name];
    }
  },
  created: function () {
    this.$store.commit('FETCH_RESOURCES');
   }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.myshp-resource {
  color: #42b983;
}
</style>
