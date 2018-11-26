import Vue from 'vue';
import Vuex from 'vuex';

import login from './modules/login';
import popup from './modules/popup';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    login: login,
    popup: popup
  }
});
