<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2></h2>
    <ul>
    <li>item</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
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
