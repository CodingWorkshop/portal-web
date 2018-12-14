<template>
  <header>
    <div class="top-header">
      <div class="wrapper">
        <div class="top-mei-don">
          <MeiDon></MeiDon>
        </div>
        <div class="top-marquee">
          <NewsMarquee></NewsMarquee>
        </div>
      </div>
    </div>
    <div class="nav">
      <div class="wrapper">
        <GameCategory></GameCategory>
      </div>
    </div>
  </header>
</template>

<script>
import MeiDon from '@/components/MeiDon.vue';
import NewsMarquee from '@/components/NewsMarquee.vue';
import GameCategory from '@/components/GameCategory.vue';
export default {
  name: 'Header',
  components: {
    MeiDon,
    NewsMarquee,
    GameCategory
  },
  props: {},
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header {
  min-width: 1000px;

  .top-header {
    height: 40px;
    color: #fff;
    line-height: 40px;
    background-color: #232323;

    .top-mei-don {
      float: left;
    }

    .top-marquee {
      float: right;
      width: 60%;
    }
  }

  .nav {
    display: block;
    height: 84px;
    margin: 0;
    text-align: center;
    background-color: #494949;
    .wrapper {
      height: 100%;
    }
  }
}
</style>
