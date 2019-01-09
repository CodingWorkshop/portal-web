import { Module, VuexModule, Mutation } from 'vuex-module-decorators';

@Module
export default class Game extends VuexModule {
  openGameLists: Array<any> = [];
  openGameListKind: number = 0;
  openSearchBar: boolean = false;

  @Mutation
  openGameList(gameCategoryObj: any): void {
    this.openGameLists = gameCategoryObj.SortList;
    this.openGameListKind = gameCategoryObj.GameKind;
  }

  @Mutation
  switchSearchBar(): void {
    this.openSearchBar = !this.openSearchBar;
  }
}
