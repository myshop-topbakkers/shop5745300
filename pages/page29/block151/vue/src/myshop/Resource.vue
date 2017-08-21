<template>
  <span class="myshp-resource">{{ label }}</span>
</template>

<script>

export default {
  name: 'resource',
  props: ['mykey','mytransform'],
  data: function () {
    return {
    }
  },
  computed: {
    label: function () {
      return 'upper'==this.mytransform?(""+this.$store.state.list[this.mykey]).toUpperCase():'lower'==this.mytransform?(""+this.$store.state.list[this.mykey]).toLowerCase():this.$store.state.list[this.mykey];
    }
  },
  created: function () {
    this.$store.commit('FETCH_RESOURCES');
   }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
