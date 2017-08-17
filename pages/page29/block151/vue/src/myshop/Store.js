import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  list:{}
}

const mutations = {
  FETCH_RESOURCES: function(state, list) {
        state.list = list;
    }
}

const actions = {
  fetchResources: function ({ commit }, { self })  {
    Vue.http.get("http://edit2.mijnwinkel.nl/resourceloader.json")
       .then((response) => {
           commit("FETCH_RESOURCES", response.body);
       })
       .catch((error => {
           console.log(error.statusText)
       }))
     }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
