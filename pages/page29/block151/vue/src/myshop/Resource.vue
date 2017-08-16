<template>
  <div class="myshp-resource">
   {{ version }}
	</div>
</template>

<script>
export default {
  name: 'resource',
  data: function () {
    return {
      version: '0.0.1'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.myshp-version {
  color: #42b983;
}
</style>
