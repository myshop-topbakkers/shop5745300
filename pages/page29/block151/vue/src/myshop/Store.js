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
        Vue.http.get("http://edit2.mijnwinkel.nl/resourceloader.json")
           .then((response) => {
               state.list = response.body;
               state.resource=true;
           })
           .catch((error => {
               console.log(error.statusText)
           }))

      }
    }
}


export default new Vuex.Store({
  state,
  mutations
})
