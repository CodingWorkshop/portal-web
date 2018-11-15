<template>
  <div id="app">
    <Layout/>
  </div>
</template>

<script>
import Layout from '@/views/Layout.vue';
export default {
  name: 'app',
  components: {
    Layout
  }
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  box-sizing: border-box;
}

ul,
ol {
  padding: 0;
  margin: 0;
  list-style-type: none;
}
a {
  color: inherit;
  text-decoration: none;
}
</style>
