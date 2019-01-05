<template>
  <div class="lobby">
    <div class="wrapper">
      <SearchBar></SearchBar>
      <h1>遊戲列表</h1>
      <GameList></GameList>
    </div>
  </div>
</template>
<script>
import SearchBar from '@/components/SearchBar.vue';
import GameList from '@/components/GameList.vue';

export default {
  name: 'lobby',
  data: function() {
    return {};
  },
  components: {
    SearchBar,
    GameList
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.wrapper {
  width: 1000px;
  margin: 0 auto;
}
</style>
