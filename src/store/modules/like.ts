import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';

@Module
export default class Like extends VuexModule {
  likeList: Array<game> = [];

  get getLikeList() {
    return this.likeList;
  }

  @Mutation
  addLikeGame(clickGame: game): void {
    let game = clickGame;
    this.likeList.push(game);
  }

  @Mutation
  updateLikeGame(clickGame: game): void {}

  @Mutation
  changeLikeGame(clickGame: game): void {}

  @Mutation
  DeleteLikeGame(clickGame: game): void {}

  @Action
  submitAddLikeGame(clickGame: game): void {
    const store = this.context;
    store.commit('addLikeGame', clickGame);
  }

  @Action
  submitUpdateLikeGame(clickGame: game): void {
    const store = this.context;
    store.commit('updateLikeGame', clickGame);
  }

  @Action
  submitChangeLikeGame(clickGame: game): void {
    const store = this.context;
    store.commit('changeLikeGame', clickGame);
  }

  @Action
  submitDeleteLikeGame(clickGame: game): void {
    const store = this.context;
    store.commit('deleteLikeGame', clickGame);
  }
}

interface game {
  id?: string;
  NameTw?: string;
  isLike?: boolean;
}
