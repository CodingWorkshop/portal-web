<template>

<header>
<div class="top-header">
  <div class="mai-don">美东时间 - 2018/11/13 (二) 02:43:54</div>
</div>
<ul class="nav">
  <li>最新游戏</li>
  <li>热门游戏</li>
  <li>电子游艺</li>
  <li>真人视讯</li>
  <li>捕鱼达人</li>
</ul>
</header>
</template>

<script>
export default {
  name: "Header",
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.top-header {
  height: 40px;
  color: #fff;
  background-color: #232323;
}

.nav {
  display: block;
  height: 84px;
  margin: 0;
  text-align: center;
  background-color: #494949;
  li {
    display: inline-block;
    width: 80px;
    height: 84px;
    line-height: 84px;
    color: #b2aeae;
    text-align: center;
    vertical-align: top;
  }
}
</style>
