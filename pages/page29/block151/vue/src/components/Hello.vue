<template>
    <div class="myshp_checkout myshp_checkout_basket">

  <div class="myshp_checkout_container">
    <div class="myshp_block myshp_checkout_products">
        <table class="myshp_checkout_products_table" cellpadding="0" cellspacing="0" width="100%">
            <tr class="cos-yellow-titles myshp_basket_products_header">
                <th class="myshp_basket_product_name">
                  <resource name="article"></resource>
                </th>
                <th class="myshp_basket_product_description" colspan="2">
                    <resource name="desc" filter="lower"></resource>
                </th>
                <th class="myshp_basket_product_quantity">
                    <resource name="nr" filter="upper"></resource>
                </th>
                <th class="myshp_basket_product_unitprice">
                    <resource name="price"></resource>
                </th>
                <th class="myshp_basket_product_totalprice">
                  <resource name="total"></resource>
                </th>
                <th class="myshp_basket_product_controls">
                    <span>&nbsp;</span>
                </th>
            </tr>
            <tr class="myshp_basket_product" style="myshop-repeat:basket;">
                <td class="myshp_basket_product_name">
                    <div style="myshop-has-value:product-image">
            <!--<img src="myshop-value:product-image"/><br/>-->
    </div>
                    <span style="myshop-value:product-id"></span>
                </td>
                <td class="myshp_basket_product_description" colspan="2">
                  <p style="myshop-value:description;"></p>
                </td>
                <td class="myshp_basket_product_quantity">
                    <input style="myshop-control:quantity-update" /><!-- value="myshop-value:quantity;" -->
                </td>
                <td class="myshp_basket_product_unitprice">
                    <span style="myshop-value:inc-vat-price-formatted;white-space:nowrap;"></span>
                </td>
                <td class="myshp_basket_product_totalprice">
                    <span style="myshop-value:inc-vat-price-line-total-formatted;white-space:nowrap;"></span>
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
      msg: 'Order List'
    }
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
