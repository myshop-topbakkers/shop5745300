import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  debug:false,
  debugLoction:"http:/www2.mijnwinkel.nl",
  list:{},
  resource: false,
  basket:{  }
}

const mutations = {
  FETCH_RESOURCES: function(state, list) {
      if(!state.resource){
        state.resource=true;
        Vue.http.get("https://edit.myshop.com/resourceloader.json")
           .then(function (response)  {
               state.list = response.body;
           })
      }
    },
  FETCH_BASKET: function(state) {
      let loc = document.getElementsByName("url_rpc");
      console.log("loading shoppingcart: "+loc[0].value);
      Vue.http.get((state.debug?state.debugLocation:"")+loc[0].value+"?type=shoppingcart_json")
         .then(function (response)  {
           console.log("set the data");

           //if(null != response.body){
            state.basket = response.body;
/*
            state.basket = {
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
                  "image":"",
                  "quantity":"2",
                  description:"dit is a test",
                  "inc_vat_price_formatted":"EURO 12,00"}
              ],
              "storage": [{"key":"value"}]
            };*/
             console.log("date set");
           //}
         })
    }
}


export default new Vuex.Store({
  state,
  mutations
})
