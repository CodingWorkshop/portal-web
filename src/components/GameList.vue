<template>
  <div class="game-list">
    <Game v-for="list in openGameList" :key="list.id" :name="list.NameTw" :isLike="list.isLike"/>
  </div>
</template>

<script>
import Game from '@/components/Game.vue';
export default {
  name: 'GameList',
  props: {},
  components: {
    Game
  },
  computed: {
    openGameList() {
      return this.$store.state.game.openGameList;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.game-list {
  text-align: left;
}
</style>
