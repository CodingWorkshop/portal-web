import Vue from 'vue';
import Vuex from 'vuex';

import login from './modules/login';
import popup from './modules/popup';
import game from './modules/game';
import like from './modules/like';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    login: login,
    popup: popup,
    game: game,
    like: like
  },
  plugins: [
    createPersistedState({
      storage: {
        getItem: key => localStorage.getItem(key),
        setItem: (key, value) => localStorage.setItem(key, value),
        removeItem: key => localStorage.removeItem(key)
      },
      paths: ['login.loginStatus', 'login.user']
    })
  ]
});
