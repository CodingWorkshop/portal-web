<template>
  <div>
    <div v-if="$store.state.login.isLogin">
      <p>
        Hi,
        <strong>{{account}}</strong>!
      </p>
    </div>
    <div v-else>
      <i-input type="text" id="account" placeholder="Account" v-model="user.account"/>
      <i-input type="password" id="password" placeholder="Password" v-model="user.password"/>
      <i-input type="text" id="captcha" placeholder="captcha" v-model="user.captcha"/>
      <Button type="success" long @click="login">SUBMIT</Button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        account: '',
        password: '',
        captcha: ''
      }
    };
  },
  methods: {
    login() {
      this.$store.commit({
        type: 'setUserData',
        userData: this.user
      });
      this.$router.push('/');
    }
  },
  created() {
    if (!this.user.account) {
      this.$router.push('login');
    }
  },
  computed: {
    account() {
      return this.$store.state.login.account;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
input {
  margin-bottom: 10px;
}
</style>
