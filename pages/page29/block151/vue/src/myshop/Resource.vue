<template>
  <span class="myshp-resource">
   {{ label }}
 </span>
</template>

<script>

//Vue.use(VueResource);

const load = {
  done: false,
}

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
    if(false==load.done)this.$store.dispatch("fetchResources");
    load.done=true;
   }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.myshp-resource {
  color: #42b983;
}
</style>
