<template>
  <div class="game-category">
    <ul>
      <li
        v-for="gc in gameCategories"
        :key="gc.GameKind"
        @click="openGameList(gc)"
        :class="{active : activeKind === gc.GameKind} "
      >
        <i class="fas" :class="gc.Icon"></i>
        {{gc.GameName}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'GameCategory',
  props: {},
  data() {
    return {
      gameCategories: []
    };
  },
  methods: {
    openGameList: function(gameCategoryObj) {
      this.$store.commit('openGameList', gameCategoryObj);
      this.$router.push('lobby');
    }
  },
  mounted() {
    // 取得遊戲分類和遊戲列表
    // Can Edit on https://next.json-generator.com/41iE5zvCr
    this.axios
      .get('https://next.json-generator.com/api/json/get/41iE5zvCr')
      .then(
        response => {
          this.gameCategories = response.data;
          // 預設先顯示第一個遊戲
          this.$store.commit('openGameList', this.gameCategories[0]);
        },
        () => {
          console.log('fail');
        }
      );
  },
  computed: {
    activeKind() {
      return this.$store.state.game.openGameListKind;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.game-category {
  height: 100%;
  ul {
    height: 100%;
    li {
      display: inline-block;
      width: 100px;
      height: 100%;
      padding-top: 20px;
      vertical-align: top;
      color: #b0acad;
      cursor: pointer;
      i {
        display: block;
        font-size: 30px;
      }
      &.active {
        color: #ffcd50;
      }
    }
  }
}
</style>
