<template>
  <div class="game-list">
    <Game v-for="list in openGameLists" :key="list.id" :name="list.NameTw" :isLike="list.isLike"/>
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
    openGameLists() {
      return this.$store.state.game.openGameLists;
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
