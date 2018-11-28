export default {
  state: {
    openGameList: [],
    openGameListKind: 0
  },
  mutations: {
    openGameList: (state, gameCategory) => {
      state.openGameList = gameCategory.SortList;
      state.openGameListKind = gameCategory.GameKind;
    }
  },
  actions: {}
};
