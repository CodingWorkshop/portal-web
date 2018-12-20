export default {
  state: {
    openGameList: [],
    openGameListKind: 0,
    openSearchBar: false
  },
  mutations: {
    openGameList: (state, gameCategoryObj) => {
      state.openGameList = gameCategoryObj.SortList;
      state.openGameListKind = gameCategoryObj.GameKind;
    },
    switchSearchBar: state => {
      state.openSearchBar = !state.openSearchBar;
    }
  },
  actions: {}
};
