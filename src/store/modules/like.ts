import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';

@Module
export default class Like extends VuexModule {
  likeList: Array<game> = [];

  get getLikeList() {
    return this.likeList;
  }

  get getLikeListIndexById() {
    return function getLikeListIndexById(id: string) {
      return Like.state.likeList.findIndex((v: game, i: string) => v.id === id);
    };
  }

  @Mutation
  addLikeGame(clickGame: game): void {
    this.likeList.push(clickGame);
  }

  @Mutation
  changeLikeGame(reciveObj: reciveGame): void {
    // 把本來那個刪掉 在原位置塞新的 ()
    this.likeList.splice(reciveObj.index, 1, reciveObj.game);
  }

  @Mutation
  deleteLikeGame(reciveObj: reciveGame): void {
    // 把本來那個刪掉
    this.likeList.splice(reciveObj.index, 1);
  }

  @Action
  submitAddAccountLikeGame(accountLikeList: [game]): void {
    const store = this.context;
    // 跑迴圈 比對現在清單 沒有的才丟進去
    accountLikeList.forEach((game: game) => {
      if (this.getLikeListIndexById(game.id) === -1) {
        store.commit('addLikeGame', game);
      }
    });
  }

  @Action
  submitAddLikeGame(clickGame: game): void {
    const store = this.context;
    store.commit('addLikeGame', clickGame);
  }

  @Action
  submitChangeLikeGame(reciveObj: object): void {
    const store = this.context;
    store.commit('changeLikeGame', reciveObj);
  }

  @Action
  submitDeleteLikeGame(reciveObj: object): void {
    const store = this.context;
    store.commit('deleteLikeGame', reciveObj);
  }
}

interface game {
  id: string;
  NameTw: string;
  isLike: boolean;
}
interface reciveGame {
  game: game;
  index: number;
}
