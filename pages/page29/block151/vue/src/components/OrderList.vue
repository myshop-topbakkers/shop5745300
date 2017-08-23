<template>
    <div class="myshp_checkout myshp_checkout_basket">

  <div class="myshp_checkout_container">
    <div class="cos-cart group">
      <div class="cos-cart-left">

    <div v-if="null!=this.$store.state.basket.rows">
    <div class="myshp_block myshp_checkout_products">
        <table class="myshp_checkout_products_table" cellpadding="0" cellspacing="0" width="100%">
            <tr class="cos-yellow-titles myshp_basket_products_header">
                <td class="myshp_basket_product_name">
                  <resource mykey="article"></resource>
                </td>
                <td class="myshp_basket_product_description" colspan="2">
                    <resource mykey="desc"></resource>
                </td>
                <td class="myshp_basket_product_quantity">
                    <resource mykey="nr"></resource>
                </td>
                <td class="myshp_basket_product_controls">
                    <span>&nbsp;</span>
                </td>
            </tr>
            <tr class="myshp_basket_product" v-for="(row, index) in this.$store.state.basket.rows">
                <td class="myshp_basket_product_name"><span v-if="''!=row.image">
                      <img :src="row.image"/><br/>
                    </span>{{row.id}}
                </td>
                <td class="myshp_basket_product_description" colspan="2">
                  <p>{{row.description}}</p>
                </td>
                <td class="myshp_basket_product_quantity">
                    <p>{{row.quantity}}</p>
                </td>
                <td class="myshp_basket_product_controls" width="70px">
                <remove :myindex="index" myclass="myshp_button_delete"></remove>
                </td>
            </tr>

            <tr>
              <td class="myshp_basket_total_label" style="display:none" colspan="5">
                <table><tbody><tr><td>Bereken bruto totaalbedrag<br>(indicatief)</td><td><span style="white-space:nowrap;">€ 0,00</span></td></tr></tbody></table>
              </td>
            </tr>

            <tr class="cos_hide_on_checkout">
              <td colspan="99" class="cos-favorites-text">De berekende prijzen zijn indicatief en kunnen afwijken van de gefactureerde prijzen. Aan deze berekende prijzen kunnen geen rechten worden ontleend.</td>
            </tr>

            <tr class="cos_hide_on_checkout"><td colspan="99" class="cos-favorites-big-btn"><a href="#" class="myshp_button">Verstuur uw bestelling</a></td></tr>
            <tr class="cos_hide_on_checkout"><td colspan="99"><a href="#">Opslaan als Favoriet</a></td></tr>



          </table>
        </div>
      </div>
      <!-- Public action -->
      <button id="action-reload-order-list" style="display:none" v-on:click="reload"/>
      </div>
    </div>
  </div>
  </div>

</template>

<script>
import Resource from '../myshop/Resource'
import Remove from '../myshop/OrderLineRemove'

export default {
  name: 'hello',
  components: {
    Resource, Remove
  },
  data: function () {
    return {
    }
  },
  beforeCreate: function () {
    this.$store.commit('FETCH_BASKET');
  },
  methods: {
    reload: function(){
        this.$store.commit('FETCH_BASKET');
      }
    }
  }
</script>

<style scoped>

</style>
