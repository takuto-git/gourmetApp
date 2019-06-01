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

html, body {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    color: #2c3e50;
    box-sizing: border-box;
}

#app {
    height: calc(100%);
    width: calc(100%);
    background-color: #FAFAFA;
}

.btn {
    height: 48px;
    width: 60vw;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: #42b983;
    opacity: .8;
    margin: 8px;
    border-radius: 5px;/*角丸く*/
    transition: .3s;/*滑らかな動きに*/
    box-shadow: 0 2px 2px 0 rgba(0,0,0,.12), 0 2px 2px 0 rgba(0,0,0,.24);/*影*/
}

.btn :hover {
    box-shadow: 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12), 0 2px 4px -1px rgba(0,0,0,.2);
}

</style>
