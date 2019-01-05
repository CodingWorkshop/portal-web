import { Module, VuexModule, Mutation } from 'vuex-module-decorators';

@Module
export default class Game extends VuexModule {
  openGameLists: Array<any> = [];
  openGameListKind: number = 0;
  openSearchBar: boolean = false;

  @Mutation
  openGameList(gameCategoryObj: any) {
    this.openGameLists = gameCategoryObj.SortList;
    this.openGameListKind = gameCategoryObj.GameKind;
  }
  @Mutation
  switchSearchBar() {
    this.openSearchBar = !this.openSearchBar;
  }
}
