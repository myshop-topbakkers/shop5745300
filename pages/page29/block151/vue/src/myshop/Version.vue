<template>
  <div class="myshp-version">
  Version: {{ version }}
  Store: {{ $store.state.resource }} {{ $store.state.version }}
	</div>
</template>

<script>
export default {
  name: 'version',
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
