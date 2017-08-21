import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  debug:Vue.config.devtools,
  logme:true,
  resource: false,
  debugLocation:"http://www2.mijnwinkel.nl",
  list:{},
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
      var loc = document.getElementsByName("url_rpc");
      console.log("loading shoppingcart: "+loc[0].value);
      Vue.http.get((state.debug?state.debugLocation:"")+loc[0].value+"?type=shoppingcart_json")
         .then(function (response)  {
           if(state.logme){
             console.log("Status "+response.statusText);
             console.log("Status code"+response.status);
             console.log("Body "+response.bodyText);
           }
           if(null != response.body){
            Vue.set(state, "basket",response.body);
            if(state.logme)console.log("Basket set");
            if(state.debug){
              Vue.set(state, "basket", {
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
              });
            }
           }
         })
    }
}


export default new Vuex.Store({
  state,
  mutations
})
