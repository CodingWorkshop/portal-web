<template>
  <div class="game">
    <img src="https://via.placeholder.com/130">
    <div class="game-text">
      {{game.NameTw}}
      <i
        class="fa-heart"
        :class="[game.isLike? 'fas':'far']"
        @click="switchLike(game)"
      ></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Game',
  props: { game: Object },
  methods: {
    switchLike(game) {
      this.$store.dispatch('submitAddLikeGame', game);

      //var test = this.$store.getters.getLikeList;
      //console.log(test);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.game {
  display: inline-block;
  width: 154px;
  height: 183px;
  margin: 5px;
  padding: 12px;
  color: #333;
  font-size: 14px;
  background: rgba($color: #777, $alpha: 0.8);
  border-radius: 3px;
  img {
    display: block;
    width: 100%;
  }
  .game-text {
    margin-top: 5px;
    line-height: 24px;
    i {
      float: right;
      color: #333;
      line-height: 24px;
      cursor: pointer;
    }
  }
}
</style>
