<template>

 <a data-inline="true" data-iconpos="notext" data-icon="delete" data-role="button" class="myshp_button_delete" v-on:click="doRemove" href="#">{{line}} {{this.$store.state.list['remove']}}</a>

</template>

<script>

export default {
  name: 'remove',
  props: ['name','index'],
  data: function () {
    return {
    }
  },
  methods:  {
    doRemove: function (event){
      alert("remove " + this.line);
      Vue.http.get("/checkout/basket?a=remove&i="+this.line)
         .then(function (response)  {
             state.list = response.body;
         })
    }
  },
  computed: {
    label: function () {
      return "onclick=return myshop().a('remove'," + (this.index + 1)+ "),false;"
    },
    line: function (){
      return this.index+1;
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
