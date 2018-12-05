<template>
  <div>
    <div v-if="$store.state.login.loginStatus">
      <p>
        Hi,
        <strong>{{$store.state.login.user}}</strong>!
      </p>
      <button @click="$store.dispatch('submitLogout')">登出</button>
    </div>
    <div v-else>
      <i-input type="text" id="account" placeholder="Account" v-model="user"/>
      <i-input type="password" id="password" placeholder="Password" v-model="password"/>
      <i-input type="text" id="captcha" placeholder="captcha" v-model="captcha"/>
      <Button type="success" long @click="login">SUBMIT</Button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: '',
      password: '',
      captcha: ''
    };
  },
  methods: {
    login() {
      this.$store.commit('updateSigning');
      this.$store
        .dispatch({
          type: 'submitLogin',
          user: this.user,
          password: this.password
        })
        .then(() => {
          this.$router.push({ path: '' });
        });
    }
  },
  created() {
    if (!this.user.account) {
      this.$router.push('login');
    }
  },
  computed: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
i-input {
  margin-bottom: 10px;
}
</style>
