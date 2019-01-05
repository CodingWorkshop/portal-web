<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>
      <i class="fas fa-shuttle-van"></i>
      <i class="fas fa-shuttle-van"></i>
      <i class="fas fa-shuttle-van"></i>微婆 會帶 不養
      <i class="fas fa-shuttle-van"></i>
      <i class="fas fa-shuttle-van"></i>
      <i class="fas fa-shuttle-van"></i>
    </p>
    <p>
      <i class="far fa-lemon"></i>
      <i class="fas fa-coffee"></i>來一杯蜂蜜檸檬
    </p>
    <Game v-for="game in games" :key="game.id" :name="game.name" :isLike="game.isLike"/>
  </div>
</template>
<script>
import Game from '@/components/Game.vue';
export default {
  name: 'about',
  data: function() {
    return {
      games: [
        { id: 0, name: '吃飯', imgUrl: '', isLike: true },
        { id: 1, name: '睡覺', imgUrl: '', isLike: false },
        { id: 2, name: '打東東', imgUrl: '', isLike: false },
        { id: 3, name: '????', imgUrl: '', isLike: true },
        { id: 4, name: 'ㄎㄎㄎ', imgUrl: '', isLike: true }
      ]
    };
  },
  components: {
    Game
  }
};
</script>
