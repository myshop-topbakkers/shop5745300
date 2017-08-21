<template>
    <div class="myshp_checkout myshp_checkout_basket">

  <div class="myshp_checkout_container">
    <div v-if="null!=this.$store.state.basket.rows">
    <div class="myshp_block myshp_checkout_products">
        <table class="myshp_checkout_products_table" cellpadding="0" cellspacing="0" width="100%">
            <tr class="cos-yellow-titles myshp_basket_products_header">
                <td class="myshp_basket_product_name">
                  <resource name="article"></resource>
                </td>
                <td class="myshp_basket_product_description" colspan="2">
                    <resource name="desc" filter="lower"></resource>
                </td>
                <td class="myshp_basket_product_quantity">
                    <resource name="nr" filter="upper"></resource>
                </td>
                <td class="myshp_basket_product_unitprice">
                    <resource name="price"></resource>
                </td>
                <td class="myshp_basket_product_totalprice">
                  <resource name="total"></resource>
                </td>
                <td class="myshp_basket_product_controls">
                    <span>&nbsp;</span>
                </td>
            </tr>
            <tr class="myshp_basket_product" v-for="row in this.$store.state.basket.rows">
                <td class="myshp_basket_product_name">
                    <div v-if="''!=row.image">
                      <img :src="row.image"/><br/>
                    </div>
                    {{row.id}}
                </td>
                <td class="myshp_basket_product_description" colspan="2">
                  <p>{{row.description}}</p>
                </td>
                <td class="myshp_basket_product_quantity">
                    <input style="myshop-control:quantity-update" /><!-- value="myshop-value:quantity;" -->
                </td>
                <td class="myshp_basket_product_unitprice">
                    {{row.inc_vat_price_formatted}}
                </td>
                <td class="myshp_basket_product_totalprice">
                    {{row.inc_vat_price_formatted}}
                </td>
                <td class="myshp_basket_product_controls" width="70">
                    <a style="myshop-action:update-product" href="javascript:void(0);" class="myshp_button_update" data-role="button" data-icon="refresh" data-iconpos="notext" data-inline="true">
                        <resource name="change"></resource>
                    </a>&nbsp;
    <a style="myshop-action:remove-product" href="javascript:void(0);" class="myshp_button_delete" data-role="button" data-icon="delete" data-iconpos="notext" data-inline="true">
                  <resource name="remove"></resource>

                    </a>
                </td>
            </tr>
          </table>
        </div>
      </div>
        <button id="reload-order-list" style="display:none" v-on:click="reloadList">Reload list</button>
      </div>
    </div>

</template>

<script>
import Resource from '../myshop/Resource'

export default {
  name: 'hello',
  components: {
    Resource
  },
  data: function () {
    return {
      msg: 'Order List',
    }
  },
  created: function () {
    this.$store.commit('FETCH_BASKET');
  },
  methods: {
    reloadList: function(){
        if(-1 == this.msg.indexOf("reload"))
        this.msg = this.msg + " reload"
      }
    }
  }
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
