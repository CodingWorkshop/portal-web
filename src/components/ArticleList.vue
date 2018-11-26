<template>
  <div class="article-list">
    <ul>
      <li v-for="a in articles" :key="a.id">{{a.title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'article-list',
  props: {},
  data() {
    return {
      articles: [
        { id: 0, title: '关于我们', imgUrl: '' },
        { id: 1, title: '联络我们', imgUrl: '' },
        { id: 2, title: '游戏介绍', imgUrl: '' },
        { id: 3, title: '注意事项', imgUrl: '' },
        { id: 4, title: '慈善事业', imgUrl: '' }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
ul {
  list-style: none;
  text-align: center;
  li {
    display: inline-block;
    margin: 20px;
    color: #fff;
    font-size: 13px;
    vertical-align: top;
  }
}
</style>
