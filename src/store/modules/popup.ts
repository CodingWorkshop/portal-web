import { Module, VuexModule, Mutation } from 'vuex-module-decorators';

@Module
export default class Popup extends VuexModule {
  isModalOpen: boolean = false;
  modalOptions: any = {};
  modelDetail: any = {
    login: {
      headerTitle: '会员登入',
      viewName: 'AccountLogin',
      animation: 'fade',
      size: {
        width: 283,
        height: 477
      }
    },
    siteMail: {
      headerTitle: '站内信',
      viewName: 'site-mail',
      animation: 'fade',
      size: {
        width: 500,
        height: 600
      },
      requiredLogin: true
    },
    transaction: {
      headerTitle: '交易记录',
      viewName: 'transaction',
      animation: 'fade',
      size: {
        width: 500,
        height: 600
      },
      requiredLogin: true
    },
    AccountBox: {
      headerTitle: '',
      viewName: 'AccountBox',
      animation: 'fade',
      size: {
        width: 283,
        height: 438
      },
      requiredLogin: true
    },
    register: {
      headerTitle: '會員註冊',
      viewName: 'register',
      animation: 'fade',
      size: {
        width: 900,
        height: 700
      }
    }
  };

  @Mutation
  openModal(option: any): void {
    this.isModalOpen = true;
    this.modalOptions = this.modelDetail[option];
  }

  @Mutation
  closeModal(): void {
    this.isModalOpen = false;
  }
}
