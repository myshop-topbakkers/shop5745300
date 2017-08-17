import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  list:{},
  resource: false
}

const mutations = {
  FETCH_RESOURCES: function(state, list) {
      if(!state.resource){
        Vue.http.get("https://edit.myshop.com/resourceloader.json")
           .then(function (response)  {
               state.list = response.body;
               state.resource=true;
           })

      }
    }
}


export default new Vuex.Store({
  state ,
  mutations
})
