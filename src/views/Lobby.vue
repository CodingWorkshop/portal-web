<template>
  <div class="lobby">
    <h1>遊戲列表</h1>
    <div class="wrapper">
      <GameList></GameList>
    </div>
  </div>
</template>
<script>
import GameList from '@/components/GameList.vue';
export default {
  name: 'about',
  data: function() {
    return {};
  },
  components: {
    GameList
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
