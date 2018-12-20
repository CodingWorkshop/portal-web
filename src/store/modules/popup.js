export default {
  state: {
    isModalOpen: false,
    modalOptions: {},
    modelDetail: {
      login: {
        headerTitle: '会员登入',
        viewName: 'account',
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
    }
  },
  mutations: {
    openModal: (state, option) => {
      state.isModalOpen = true;
      state.modalOptions = state.modelDetail[option];
    },
    closeModal: state => {
      state.isModalOpen = false;
    }
  },
  actions: {}
};
