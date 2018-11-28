<template>
  <div class="news-marquee">
    <i class="fas fa-volume-up"></i>
    {{news}}
  </div>
</template>

<script>
export default {
  name: 'NewsMarquee',
  props: {},
  data() {
    return {
      news:
        '義行對與調連，紙參快、風樣施過直！言生發聲不安笑候們然加量先紙參快、風樣施過直！'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.news-marguee {
  text-align: left;
}
</style>
