import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';

@Module
export default class Login extends VuexModule {
  account: string = '';
  password: string = '';
  signing: boolean = false;
  loginStatus: boolean = false;
  user: String = '';
  meiDonnow: String = '';

  @Mutation
  updateSigning() {
    this.signing = !this.signing;
  }
  @Mutation
  updateLoginStatus() {
    this.loginStatus = !this.loginStatus;
  }
  @Mutation
  updateUser(payload: any) {
    this.user = payload.user;
  }
  @Mutation
  updatemeiDonnow() {}

  @Action
  checkLogin() {
    const store = this.context;
    return new Promise(resolve => {
      setTimeout(() => {
        store.commit('updateSigning');
        resolve();
      }, 2000);
    });
  }
  @Action
  submitLogin(payload: any) {
    const store = this.context;
    return store.dispatch('checkLogin').then(() => {
      store.commit('updateLoginStatus');
      store.commit('updateUser', payload);
    });
  }
  @Action
  submitLogout() {
    const store = this.context;
    store.commit('updateLoginStatus');
    store.commit('updateUser', {
      user: ''
    });
  }
}
