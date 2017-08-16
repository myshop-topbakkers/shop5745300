<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="myshp_block myshp_checkout_products">
        <table class="myshp_checkout_products_table" cellpadding="0" cellspacing="0" width="100%">
            <tr class="myshp_basket_products_header">
                <th class="myshp_basket_product_name">
                  <resource></resource>
                    <span style="myshop-resource:article">Artikel</span>
                </th>
                <th class="myshp_basket_product_description" colspan="2">
                    <resource></resource>
                    <span style="myshop-resource:desc">Omschrijving</span>
                </th>
                <th class="myshp_basket_product_quantity">
                    <span style="myshop-resource:nr">Aantal</span>
                </th>
                <th class="myshp_basket_product_unitprice">
                    <span style="myshop-resource:price">Prijs</span>
                </th>
                <th class="myshp_basket_product_totalprice">
                    <span style="myshop-resource:total">Totaal</span>
                </th>
                <th class="myshp_basket_product_controls">
                    <span>&nbsp;</span>
                </th>
            </tr>
            <tr class="myshp_basket_product" style="myshop-repeat:basket;">
                <td class="myshp_basket_product_name">
                    <div style="myshop-has-value:product-image">
            <img src="myshop-value:product-image"/><br/>
    </div>
                    <span style="myshop-value:product-id"></span>
                </td>
                <td class="myshp_basket_product_description" colspan="2">
                  <p style="myshop-value:description;"></p>
                </td>
                <td class="myshp_basket_product_quantity">
                    <input style="myshop-control:quantity-update" value="myshop-value:quantity;"/>
                </td>
                <td class="myshp_basket_product_unitprice">
                    <span style="myshop-value:inc-vat-price-formatted;white-space:nowrap;"></span>
                </td>
                <td class="myshp_basket_product_totalprice">
                    <span style="myshop-value:inc-vat-price-line-total-formatted;white-space:nowrap;"></span>
                </td>
                <td class="myshp_basket_product_controls" width="70">
                    <a style="myshop-action:update-product" href="javascript:void(0);" class="myshp_button_update" data-role="button" data-icon="refresh" data-iconpos="notext" data-inline="true">
                        <span style="myshop-resource:change">update</span>
                    </a>&nbsp;
    <a style="myshop-action:remove-product" href="javascript:void(0);" class="myshp_button_delete" data-role="button" data-icon="delete" data-iconpos="notext" data-inline="true">
                        <span style="myshop-resource:remove">
                            verwijder
                        </span>
                    </a>
                </td>
            </tr>
          </table>
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
      msg: 'Top Bakkers Order List App'
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
