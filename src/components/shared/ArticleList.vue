<template>
  <div class="article-list">
    <ul>
      <li v-for="(article,index) in articles" :key="index">
        <router-link :to="article.Url">{{article.title}}</router-link>
      </li>
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
        { title: '关于我们', Url: '/About' },
        { title: '联络我们', Url: '/Contact' },
        { title: '代理加盟', Url: '/Partner' },
        { title: '存款帮助', Url: '/How/Deposit' },
        { title: '取款帮助', Url: '/How/Withdrawal' },
        { title: '常见问题', Url: '/FAQ' },
        { title: '客户端下载', Url: '/Client' }
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
