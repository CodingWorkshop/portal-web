<template>
  <div class="game">
    <img src="../assets/logo.png">
    {{name}}
    <i class="fa-heart" :class="[isLike? 'fas':'far']"></i>
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
  width: 120px;
  height: 140px;
  margin: 5px;
  padding: 10px;
  background: rgba($color: #777, $alpha: 0.8);
}
.game img {
  display: block;
  width: 100%;
}
</style>
