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
// Theme Color
$theme-standard-bg: #563a83;
$theme-dark-bg: #48316c;
$theme-light-bg: #7243bc;

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
.wrapper {
  display: block;
  width: 1000px;
  margin: 0 auto;
}
</style>
