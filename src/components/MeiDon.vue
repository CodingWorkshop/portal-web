<template>
  <div class="mei-don">美东时间 - {{MeiDonNow}}</div>
</template>

<script>
export default {
  name: 'MeiDon',
  props: {},
  data() {
    const MeiDonNow = this.dayjs().format('YYYY年MM月DD日 HH:mm:ss');
    return {
      MeiDonNow: MeiDonNow
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
