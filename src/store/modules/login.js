export default {
  state: {
    account: '',
    password: '',
    signing: false,
    loginStatus: false,
    user: '',
    meiDonnow: ''
  },
  mutations: {
    updateSigning(state) {
      state.signing = !state.signing;
    },
    updateLoginStatus(state) {
      state.loginStatus = !state.loginStatus;
    },
    updateUser(state, payload) {
      state.user = payload.user;
    },
    updatemeiDonnow() {}
  },
  actions: {
    checkLogin(Store) {
      return new Promise(resolve => {
        setTimeout(() => {
          Store.commit('updateSigning');
          resolve();
        }, 2000);
      });
    },
    submitLogin(store, payload) {
      return store.dispatch('checkLogin').then(() => {
        store.commit('updateLoginStatus');
        store.commit('updateUser', payload);
      });
    },
    submitLogout(store) {
      store.commit('updateLoginStatus');
      store.commit('updateUser', {
        user: ''
      });
      // this.$router.push('/');
    }
  }
};
