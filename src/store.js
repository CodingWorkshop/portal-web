import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isModalOpen: false,
    modalOptions: {}
  },
  mutations: {
    openModal: (state, option) => {
      state.isModalOpen = true;
      state.modalOptions = option;
    },
    closeModal: state => {
      state.isModalOpen = false;
      state.modalOptions = {};
    }
  },
  actions: {}
});
