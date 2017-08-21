<template>
<a data-inline="true" data-iconpos="notext" data-icon="delete" data-role="button" v-bind:class="attrClass" v-bind:title="attrTitle" v-on:click="doRemove">{{this.$store.state.list['remove']}}</a>
</template>

<!-- class="myshp_button_delete" -->
<script>
import Vue from 'vue'
import VueResource from 'vue-resource';

Vue.use(VueResource);


export default {
  name: 'remove',
  props: ['index','myclass','mytitle'],
  data: function () {
    return {
    }
  },
  methods:  {
    doRemove: function (event){
      console.log("Remove line "+ this.line);
      var self=this;
      if(Vue.config.devtools){

      }
      else{
      Vue.http.get("/checkout/basket?a=remove&id="+this.line)
         .then(function (response)  {
            console.log("Reload the basket");
            self.$store.commit('FETCH_BASKET');
         })
      }   
    }
  },
  computed: {
    attrTitle: function () {
      return null==this.mytitle?this.$store.state.list['remove']:this.mytitle;
    },
    attrClass: function () {
      return this.myclass;
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
