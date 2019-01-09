import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';

@Module
export default class Login extends VuexModule {
  account: string = '';
  password: string = '';
  signing: boolean = false;
  loginStatus: boolean = false;
  user: String = '';

  @Mutation
  updateSigning(): void {
    this.signing = !this.signing;
  }

  @Mutation
  updateLoginStatus(): void {
    this.loginStatus = !this.loginStatus;
  }

  @Mutation
  updateUser(payload: any): void {
    this.user = payload.user;
  }

  @Action
  checkLogin(): Promise<any> {
    const store = this.context;
    return new Promise(resolve => {
      setTimeout(() => {
        store.commit('updateSigning');
        resolve();
      }, 2000);
    });
  }

  @Action
  submitLogin(payload: any): Promise<any> {
    const store = this.context;
    return store.dispatch('checkLogin').then(() => {
      store.commit('updateLoginStatus');
      store.commit('updateUser', payload);
    });
  }

  @Action
  submitLogout(): void {
    const store = this.context;
    store.commit('updateLoginStatus');
    store.commit('updateUser', {
      user: ''
    });
  }
}
