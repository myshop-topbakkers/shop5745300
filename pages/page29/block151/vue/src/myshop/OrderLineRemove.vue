<template>
 <div v-html="label"></div>
</template>

<script>

export default {
  name: 'remove',
  props: ['name','index'],
  data: function () {
    return {
    }
  },
  computed: {
    label: function () {
      return "<a data-inline='true' data-iconpos='notext' data-icon='delete' data-role='button' class='myshp_button_delete' href=''#'' onclick=\"return myshop().a('remove'," + (this.index + 1)+ "),false;\">"+this.$store.state.list['remove']+"</a>"
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
