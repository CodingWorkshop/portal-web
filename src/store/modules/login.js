export default {
  state: {
    account: '',
    password: '',
    isLogin: false
  },
  mutations: {
    setUserData(state, { userData }) {
      state.account = userData.account;
      state.password = userData.password;
      state.isLogin = true;
    }
  }
};
