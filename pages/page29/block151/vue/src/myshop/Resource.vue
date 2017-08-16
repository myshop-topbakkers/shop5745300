<template>
  <span class="myshp-resource">
   {{ label }}
 </span>
</template>

<script>
export default {
  name: 'resource',
  props: ['name','filter'],
  data: function () {
    return {
      desc: 'Omschrijving',
      article: 'Artikel',
      nr: 'Aantal',
      price: 'Prijs',
      total: 'Totaal',
      remove: 'verwijder',
      change: 'update'
    }
  },
  computed: {
  label: function () {
    return 'upper'==this.filter?this[this.name].toUpperCase():'lower'==this.filter?this[this.name].toLowerCase():this[this.name];
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.myshp-resource {
  color: #42b983;
}
</style>
