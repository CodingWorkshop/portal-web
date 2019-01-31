<template>
  <div>
    <template v-if="!$store.state.login.loginStatus">
      <Form :model="formItem">
        <FormItem>
          <i-input type="text" v-model="formItem.user" placeholder="账号"></i-input>
        </FormItem>
        <FormItem>
          <i-input type="password" v-model="formItem.password" placeholder="密码"></i-input>
        </FormItem>
        <FormItem>
          <i-input type="text" v-model="formItem.checkCode" placeholder="验证码"></i-input>
        </FormItem>
        <Button
          class="login-btn"
          @click="login"
          :disabled="$store.state.login.signing"
          long
        >{{$store.state.login.signing?'登入中...':'登入'}}</Button>
        <Button type="text" class="forget-btn" @click="forget()">是否忘记您的密码?</Button>
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
      if (this.formItem.user == '' || this.formItem.password == '') {
        this.$Modal.error({
          title: '錯誤',
          content: '<p>帳號或密碼不得為空</p>'
        });
        return;
      }
      this.$store.commit('updateSigning');
      this.$store
        .dispatch({
          type: 'submitLogin',
          user: this.formItem.user,
          password: this.formItem.password
        })
        .then(() => {
          this.$store.commit('openModal', 'AccountBox');
          this.getLikeList();
        });
    },
    forget() {
      this.$Modal.warning({
        title: '忘記密碼',
        content: '<h3>我也不知道，幫QQ</h3>'
      });
    },
    getLikeList() {
      // 取得我ㄉ最愛
      // Can Edit on https://next.json-generator.com/NyXFaCjzI
      this.axios
        .get('https://next.json-generator.com/api/json/get/NyXFaCjzI')
        .then(
          response => {
            this.$store.dispatch(
              'submitAddAccountLikeGame',
              response.ReturnObject.SortList
            );
          },
          () => {
            console.log('fail');
          }
        );
    }
  },
  created() {},
  computed: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.ivu-form-item {
  margin-bottom: 10px;
}
.login-btn {
  color: #333;
  font-size: 14px;
  font-weight: bold;
  background-color: #ffdf2c;
  border-color: #fff;
  &:hover {
    color: #ffe86c;
    background-color: #bea728;
    border-color: #ffe245;
  }
}
.forget-btn {
  margin-top: 15px;
  font-size: 14px;
  &:hover {
    color: #ffd053;
  }
}
</style>
