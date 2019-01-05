<template>
  <div id="app">
    <Layout/>
  </div>
</template>


<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import AppCtrl from '../src/controllers/App';

@Component
export default class app extends Mixins(AppCtrl) {}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
