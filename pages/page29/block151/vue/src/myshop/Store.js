import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  list:{},
  resource: false,
  basket:{
    "inc_vat_price_subtotal_formatted":"12",
    "price_subtotal_formatted":"12",
    "count_number":"1",
    "product_count_number_unique":"1",
    "count":"bevat&#160;1&#160;product",
    "rows":[
      {
        "id":"XYZ",
        "image":"",
        "quantity":"2",
        description:"dit is a test",
        "inc_vat_price_formatted":"EURO 12,00"},
      {
        "id":"ABC",
        "image":"https://vuejs.org/images/logo.png",
        "quantity":"2",
        description:"dit is a test",
        "inc_vat_price_formatted":"EURO 12,00"}
    ],
    "storage": [{"key":"value"}]
  }
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
  state,
  mutations
})
