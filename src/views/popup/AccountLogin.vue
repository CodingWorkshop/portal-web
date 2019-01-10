<template>
  <div class="account">
    <i class="far fa-user-circle"></i>
    <Login></Login>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Login from '@/components/popup/Login.vue';

@Component({
  components: {
    Login
  }
})
export class AccountLogin extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.account {
  padding: 0 15px;
}

i.fa-user-circle {
  margin-bottom: 20px;
  font-size: 116px;
}
</style>
