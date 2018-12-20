<template>
  <div class="game">
    <img src="https://via.placeholder.com/130">
    <div class="game-text">
      {{name}}
      <i class="fa-heart" :class="[isLike? 'fas':'far']"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Game',
  props: { name: String, isLike: Boolean }
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
    }
  }
}
</style>
