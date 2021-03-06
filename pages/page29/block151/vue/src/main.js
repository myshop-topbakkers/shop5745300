// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import store from './myshop/Store'

Vue.use(VueResource);

Vue.config.productionTip = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
})

/* Update the order list after adding the product to the shopping cart. */
if(self.myshopEvent)myshopEvent().onOrder(function(){
    myshopEvent().clearLock();
    $("#action-reload-order-list").click();
});
