<template>
  <header>
    <div class="top-header">
      <div class="mai-don">美东时间 - {{MeiDonNow}}</div>
    </div>
    <ul class="nav">
      <li v-for="(item, index)in navigation" :key="index">
        <router-link :to="item.path">{{item.nameCn}}</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {},
  data() {
    const MeiDonNow = this.dayjs().format('YYYY年MM月DD日 HH:mm:ss');
    return {
      MeiDonNow: MeiDonNow,
      navigation: [
        {
          nameCn: '最新游戏',
          path: '/newGame'
        },
        {
          nameCn: '热门游戏',
          path: '/hotGame'
        },
        {
          nameCn: '电子游艺',
          path: '/Game'
        },
        {
          nameCn: '真人视讯',
          path: '/Live'
        },
        {
          nameCn: '捕鱼达人',
          path: '/Fish'
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.top-header {
  height: 40px;
  color: #fff;
  line-height: 40px;
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
