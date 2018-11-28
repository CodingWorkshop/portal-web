export default {
  state: {
    openGameList: [],
    openGameListKind: 0
  },
  mutations: {
    openGameList: (state, gameCategoryObj) => {
      state.openGameList = gameCategoryObj.SortList;
      state.openGameListKind = gameCategoryObj.GameKind;
    }
  },
  actions: {}
};
