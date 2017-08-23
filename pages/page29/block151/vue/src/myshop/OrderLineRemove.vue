<template>
<a data-inline="true" data-iconpos="notext" data-icon="delete" data-role="button" v-bind:class="attrClass" v-bind:title="attrTitle" v-on:click="doRemove">{{this.$store.state.list['remove']}}</a>
</template>


<script>
import Vue from 'vue'
import VueResource from 'vue-resource';

Vue.use(VueResource);

export default {
  name: 'remove',
  props: ['myindex','myclass','mytitle'],
  data: function () {
    return {
    }
  },
  methods:  {
    doRemove: function (event){
      var self=this;
      if(Vue.config.devtools){
        /* Reload the basket */
        self.$store.commit('FETCH_BASKET');
      }
      else{
        Vue.http.get("/checkout/basket?a=remove&id="+this.line)
         .then(function (response) {
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
      return this.myindex+1;
    }
  },
  created: function () {
    this.$store.commit('FETCH_RESOURCES');
   }
}

</script>

<style scoped>
</style>
