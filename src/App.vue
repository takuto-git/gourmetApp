<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';

export default {
  name: 'app',
  data () {
    return {}
  }
}
</script>

<style lang="scss">

html, body, #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    color: #2c3e50;
    background-color: #FAFAFA;
}

p {
  margin: 0;
  padding: 0;
}

</style>
