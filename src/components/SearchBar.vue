<template>
  <div class="searchbar" :class="{'active' : isSearchBarOpen}">
    <input type="text" id="search" placeholder="search" v-model="searchKey">
    <div class="list">
      <div>Hot</div>
      <ul>
        <li v-for="list in Hot" :key="list">{{list}}</li>
      </ul>
    </div>
    <div class="list history">
      <div>History</div>
      <ul>
        <li v-for="list in History" :key="list">{{list}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  props: {},
  data() {
    return {
      searchKey: '',
      Hot: ['好熱', '真的很熱', '熱爆了', '熱熱', '台中熱'],
      History: ['這個', '小秘密', '午餐吃什麼', '提高尾牙抽獎中獎率', '蛤']
    };
  },
  watch: {
    searchKey: function(newSearchKey) {
      this.$store.commit('updateSearchKey', newSearchKey);
    }
  },
  computed: {
    isSearchBarOpen() {
      return this.$store.state.game.openSearchBar;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.searchbar {
  height: 64px;
  margin-top: -64px;
  opacity: 0;
  transition: all 0.5s;
}
.searchbar.active {
  margin-top: 0;
  opacity: 1;
}
#search {
  display: block;
  width: 100%;
  height: 30px;
  padding-left: 50px;
  background: url('../assets/search_icon.png') no-repeat left center;
  border: none;
  border-bottom: 1px solid #000;
}

.list {
  display: inline-block;
  width: 50%;
  font-size: 0;
  text-align: left;
}
.list > div {
  display: inline-block;
  width: 129px;
  height: 33px;

  color: #fff;
  font-size: 18px;
  font-weight: bold;
  line-height: 33px;
  text-align: center;
  background: #717171;
  border-radius: 3px;
}
.list ul {
  display: inline-block;
}
.list li {
  display: inline-block;
  color: #333;
  margin-left: 10px;
  font-size: 14px;
  line-height: 33px;
}
</style>
