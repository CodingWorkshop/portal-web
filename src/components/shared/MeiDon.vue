<template>
  <div class="mai-don">美东时间 {{MeiDonNow}}</div>
</template>

<script>
export default {
  name: 'MaiDon',
  props: {},
  data() {
    return {
      MeiDonNow: ''
    };
  },
  methods: {
    getMeiDonNow: function() {
      const times = this.dayjs().format('YYYY/MM/DD HH:mm:ss');
      this.MeiDonNow = times;
    }
  },
  mounted() {
    this.getMeiDonNow();
  },
  created() {
    setInterval(() => {
      this.getMeiDonNow();
    }, 990);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.mai-don {
  font-size: 14px;
  font-weight: bold;
}
</style>
