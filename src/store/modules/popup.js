export default {
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
    }
  },
  actions: {}
};
