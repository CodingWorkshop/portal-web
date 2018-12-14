<template>
  <div>
    <template v-if="$store.state.login.loginStatus">
      <p>
        Hi,
        <strong>{{$store.state.login.user}}</strong>!
      </p>
      <button @click="$store.dispatch('submitLogout')">登出</button>
    </template>
    <template v-else>
      <Form :model="formItem">
        <FormItem prop="user">
          <Input type="text" v-model="formItem.user" placeholder="Username"></Input>
        </FormItem>
        <FormItem prop="password">
          <Input type="password" v-model="formItem.password" placeholder="Password"></Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="login">Signin</Button>
        </FormItem>
      </Form>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formItem: {
        user: '',
        password: ''
      }
    };
  },
  methods: {
    login() {
      this.$store.commit('updateSigning');
      this.$store
        .dispatch({
          type: 'submitLogin',
          user: this.formItem.user,
          password: this.formItem.password
        })
        .then(() => {
          this.$router.push({ path: '' });
        });
    }
  },
  created() {},
  computed: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.account {
  height: 100%;
}
.ivu-form-item {
  margin-bottom: 10px;
}
</style>
