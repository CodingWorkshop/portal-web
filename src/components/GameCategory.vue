<template>
  <div class="game-category">
    <ul>
      <li
        v-for="gc in gameCategories"
        :key="gc.GameKind"
        @click="openGameList(gc)"
        :class="{active : activeKind === gc.GameKind} "
      >
        <i class="fas" :class="gc.Icon"></i>
        {{gc.GameName}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'GameCategory',
  props: {},
  data() {
    return {
      gameCategories: [
        {
          GameKind: 0,
          GameName: 'consectetur',
          Icon: 'fa-gamepad',
          SortList: [
            { id: '5bfe379dc74e0a4172351e2e', NameTw: 'Lorem', isLike: false },
            {
              id: '5bfe379dd799ab6eed31d985',
              NameTw: 'consectetur',
              isLike: true
            },
            {
              id: '5bfe379d506e3c2a9fdbe955',
              NameTw: 'deserunt',
              isLike: false
            },
            { id: '5bfe379d567587d44ca2b2a3', NameTw: 'nisi', isLike: true },
            { id: '5bfe379df86be9a6a98920fc', NameTw: 'dolore', isLike: true },
            { id: '5bfe379db65a8b0d92e84d2d', NameTw: 'ullamco', isLike: true },
            {
              id: '5bfe379d9d85fba3ff97204b',
              NameTw: 'commodo',
              isLike: false
            },
            { id: '5bfe379daab87c0ecdfc61d0', NameTw: 'duis', isLike: true },
            { id: '5bfe379d788b3df8c439f866', NameTw: 'ex', isLike: false },
            {
              id: '5bfe379db8324e9a52f69668',
              NameTw: 'deserunt',
              isLike: true
            },
            { id: '5bfe379d8d4582bc27eeb3e1', NameTw: 'culpa', isLike: false },
            { id: '5bfe379dd616b966d8362f0d', NameTw: 'dolor', isLike: true },
            { id: '5bfe379d835ec8c36b8d9509', NameTw: 'tempor', isLike: true },
            {
              id: '5bfe379da7c172022d66b7ee',
              NameTw: 'incididunt',
              isLike: false
            },
            { id: '5bfe379dbb73d5506f266833', NameTw: 'Lorem', isLike: false },
            { id: '5bfe379dcbbb917a4e6f93da', NameTw: 'esse', isLike: true },
            { id: '5bfe379d59db47d9065a4480', NameTw: 'nulla', isLike: false }
          ]
        },
        {
          GameKind: 1,
          GameName: 'qui',
          Icon: 'fa-gamepad',
          SortList: [
            { id: '5bfe379d28f1607e74e6ce5f', NameTw: 'enim', isLike: true },
            {
              id: '5bfe379d046d35ed09268263',
              NameTw: 'laborum',
              isLike: false
            },
            { id: '5bfe379db1df9223c0d98b49', NameTw: 'do', isLike: true },
            { id: '5bfe379dcfbebf9887905685', NameTw: 'anim', isLike: false },
            { id: '5bfe379da5b3ce03502b1aaa', NameTw: 'nulla', isLike: false },
            { id: '5bfe379d3cf5676551adc57c', NameTw: 'Lorem', isLike: false },
            { id: '5bfe379d66ed633bc44f2991', NameTw: 'id', isLike: false },
            {
              id: '5bfe379d511978864d99b032',
              NameTw: 'adipisicing',
              isLike: true
            },
            { id: '5bfe379df455f8eacb35419c', NameTw: 'sint', isLike: false },
            { id: '5bfe379db2d59b63d4fe94fb', NameTw: 'et', isLike: false },
            {
              id: '5bfe379de0ab4bbe18719d37',
              NameTw: 'exercitation',
              isLike: false
            },
            { id: '5bfe379db8d45fc84b3be2cb', NameTw: 'magna', isLike: false },
            { id: '5bfe379d993b58da955e2d2a', NameTw: 'ipsum', isLike: true },
            { id: '5bfe379d0a3d7b7ca61e6317', NameTw: 'ea', isLike: true },
            { id: '5bfe379da733c7074069b7e0', NameTw: 'eu', isLike: false },
            { id: '5bfe379dfd7ac57e8bf44ab6', NameTw: 'aliquip', isLike: true }
          ]
        },
        {
          GameKind: 2,
          GameName: 'et',
          Icon: 'fa-gamepad',
          SortList: [
            {
              id: '5bfe379d8f0f6924673657c4',
              NameTw: 'consectetur',
              isLike: false
            },
            { id: '5bfe379db06c3eefc78964b9', NameTw: 'irure', isLike: false },
            {
              id: '5bfe379d8d70227171e4298b',
              NameTw: 'consequat',
              isLike: true
            },
            {
              id: '5bfe379d0c32daca5412bdc9',
              NameTw: 'laboris',
              isLike: false
            },
            { id: '5bfe379dd8ffc39d985c2dff', NameTw: 'fugiat', isLike: true },
            { id: '5bfe379d8eb50eea09db4cb7', NameTw: 'tempor', isLike: false },
            { id: '5bfe379d8667d1e724995430', NameTw: 'nulla', isLike: true },
            { id: '5bfe379d19180282474acb35', NameTw: 'laboris', isLike: true },
            {
              id: '5bfe379d46ad5548166aecfb',
              NameTw: 'ullamco',
              isLike: false
            },
            {
              id: '5bfe379d783d768f35f296d3',
              NameTw: 'adipisicing',
              isLike: false
            },
            {
              id: '5bfe379d02caa514ac15d744',
              NameTw: 'laboris',
              isLike: false
            },
            { id: '5bfe379de6ca36a76a67d478', NameTw: 'ex', isLike: false },
            { id: '5bfe379d3273bbd77ee76039', NameTw: 'sit', isLike: true },
            { id: '5bfe379db1a634557895e5b7', NameTw: 'ipsum', isLike: false },
            {
              id: '5bfe379db3e52cf9ccbdd869',
              NameTw: 'consectetur',
              isLike: false
            },
            { id: '5bfe379d26a93e67d7937636', NameTw: 'amet', isLike: true },
            { id: '5bfe379d7b8b492f1b4d65c0', NameTw: 'sunt', isLike: true }
          ]
        },
        {
          GameKind: 3,
          GameName: 'Lorem',
          Icon: 'fa-gamepad',
          SortList: [
            { id: '5bfe379d06f77965b0b075c0', NameTw: 'ex', isLike: true },
            {
              id: '5bfe379db31b02df8c2a91fb',
              NameTw: 'voluptate',
              isLike: true
            },
            { id: '5bfe379d3ded8ce53d67333b', NameTw: 'tempor', isLike: false },
            { id: '5bfe379dffb0f4a16e716ee3', NameTw: 'esse', isLike: false },
            { id: '5bfe379d5f494aad43187120', NameTw: 'do', isLike: true },
            { id: '5bfe379d75ee87106bf82825', NameTw: 'dolor', isLike: false },
            {
              id: '5bfe379d71220b46024396a5',
              NameTw: 'officia',
              isLike: false
            },
            { id: '5bfe379d22f69c2798869518', NameTw: 'irure', isLike: true },
            { id: '5bfe379d22c5bafddbc2e11d', NameTw: 'mollit', isLike: false },
            { id: '5bfe379d7d1ec9af3c9296cb', NameTw: 'magna', isLike: true },
            {
              id: '5bfe379d1752e63c6ca3a103',
              NameTw: 'consectetur',
              isLike: true
            },
            { id: '5bfe379dbdb0b89e9f24c06a', NameTw: 'et', isLike: false },
            { id: '5bfe379dd855ea86ede857ee', NameTw: 'sint', isLike: false },
            { id: '5bfe379da3796c9b6305a70a', NameTw: 'aute', isLike: false },
            { id: '5bfe379d1ff7f2621569e363', NameTw: 'minim', isLike: false },
            { id: '5bfe379d6f3b1f9a959675cb', NameTw: 'sunt', isLike: true },
            { id: '5bfe379d54a599c2456af1d7', NameTw: 'tempor', isLike: false },
            { id: '5bfe379d2394e1a621673218', NameTw: 'ut', isLike: false },
            { id: '5bfe379de09fe80829c4247c', NameTw: 'cillum', isLike: true },
            {
              id: '5bfe379d2c69652c1481c038',
              NameTw: 'exercitation',
              isLike: true
            }
          ]
        },
        {
          GameKind: 4,
          GameName: 'esse',
          Icon: 'fa-gamepad',
          SortList: [
            {
              id: '5bfe379d34d29a1261cf8115',
              NameTw: 'excepteur',
              isLike: false
            },
            { id: '5bfe379dbd514f2e03c7f2b8', NameTw: 'laborum', isLike: true },
            { id: '5bfe379d760ff274ff1eb294', NameTw: 'ea', isLike: false },
            { id: '5bfe379d4e5481c4476a0c95', NameTw: 'ipsum', isLike: true },
            { id: '5bfe379d1b484a7c30eb6a91', NameTw: 'et', isLike: false },
            {
              id: '5bfe379dcec126fc37d67f84',
              NameTw: 'eiusmod',
              isLike: false
            },
            { id: '5bfe379d9fb1e36f7ff44812', NameTw: 'eiusmod', isLike: true },
            {
              id: '5bfe379ddb92f6ce4fcf001c',
              NameTw: 'consectetur',
              isLike: true
            },
            { id: '5bfe379d387cca1933f84363', NameTw: 'officia', isLike: true },
            { id: '5bfe379d4a23b3bd3c9342fa', NameTw: 'duis', isLike: false },
            { id: '5bfe379d5d11cb8e5035f5d8', NameTw: 'quis', isLike: true },
            { id: '5bfe379d4aef48910486d25e', NameTw: 'et', isLike: true },
            {
              id: '5bfe379da80bbc15f0820c3b',
              NameTw: 'reprehenderit',
              isLike: true
            },
            { id: '5bfe379d71abaddfe462f20b', NameTw: 'nisi', isLike: false },
            {
              id: '5bfe379d03fd2c4174476913',
              NameTw: 'incididunt',
              isLike: true
            },
            { id: '5bfe379d643838568e650582', NameTw: 'anim', isLike: false },
            { id: '5bfe379d1867b86eeee6f08f', NameTw: 'Lorem', isLike: false },
            { id: '5bfe379d93c7f779071bff52', NameTw: 'ex', isLike: true },
            {
              id: '5bfe379d141b32e99f543d69',
              NameTw: 'consectetur',
              isLike: true
            },
            { id: '5bfe379d62343f6a31c335eb', NameTw: 'cillum', isLike: false }
          ]
        },
        {
          GameKind: 5,
          GameName: 'aliqua',
          Icon: 'fa-gamepad',
          SortList: [
            { id: '5bfe379de0fb47d8cb4a3165', NameTw: 'veniam', isLike: true },
            { id: '5bfe379db27b3c2b2aaa5b7d', NameTw: 'aliquip', isLike: true },
            {
              id: '5bfe379d97a020b2d39009eb',
              NameTw: 'deserunt',
              isLike: true
            },
            {
              id: '5bfe379de4c6d24a3843b99e',
              NameTw: 'consequat',
              isLike: true
            },
            { id: '5bfe379d5cd08c45444487cc', NameTw: 'irure', isLike: false },
            { id: '5bfe379d7806cc4471f8be65', NameTw: 'labore', isLike: true },
            { id: '5bfe379d7e7080c189439c55', NameTw: 'magna', isLike: false },
            {
              id: '5bfe379dea7522ddb606f22b',
              NameTw: 'proident',
              isLike: false
            },
            {
              id: '5bfe379d383d232f74ca76bd',
              NameTw: 'aliquip',
              isLike: false
            },
            { id: '5bfe379d973fe7d0ecf42b62', NameTw: 'nostrud', isLike: true },
            { id: '5bfe379d864799bd92756eb1', NameTw: 'duis', isLike: true },
            {
              id: '5bfe379ddccf02adf09e7fd4',
              NameTw: 'pariatur',
              isLike: true
            },
            { id: '5bfe379dd721c40b42f56a2e', NameTw: 'esse', isLike: true },
            { id: '5bfe379df0d2135eb2ebe4b2', NameTw: 'labore', isLike: false },
            { id: '5bfe379d4f4644865a91a492', NameTw: 'est', isLike: false },
            { id: '5bfe379dd3bc4928cb22d8a9', NameTw: 'elit', isLike: true },
            {
              id: '5bfe379de3fca2cb423dbb7e',
              NameTw: 'nostrud',
              isLike: false
            },
            {
              id: '5bfe379d9a988be7ed9cf34c',
              NameTw: 'consequat',
              isLike: false
            }
          ]
        },
        {
          GameKind: 6,
          GameName: 'esse',
          Icon: 'fa-gamepad',
          SortList: [
            { id: '5bfe379d222d4a38110e7c0e', NameTw: 'culpa', isLike: true },
            { id: '5bfe379d37ff26c4fa7ef927', NameTw: 'magna', isLike: true },
            {
              id: '5bfe379de886da769d2a33a6',
              NameTw: 'occaecat',
              isLike: true
            },
            { id: '5bfe379d773d6cdd638b4ebb', NameTw: 'amet', isLike: true },
            { id: '5bfe379dcd4a439beef20373', NameTw: 'nisi', isLike: true },
            { id: '5bfe379d50f534792f4595f2', NameTw: 'ut', isLike: true },
            { id: '5bfe379d336e2dd3b32ed4b3', NameTw: 'minim', isLike: false },
            { id: '5bfe379dc69387d846d90c1f', NameTw: 'sunt', isLike: true },
            { id: '5bfe379d835d2ef6beefcbfc', NameTw: 'aliquip', isLike: true },
            {
              id: '5bfe379d6edea25718e80463',
              NameTw: 'proident',
              isLike: true
            },
            { id: '5bfe379d7aa5620b0483a773', NameTw: 'fugiat', isLike: false },
            { id: '5bfe379def5c5bdaa5da6328', NameTw: 'laboris', isLike: true },
            {
              id: '5bfe379dd97421f44d77a12c',
              NameTw: 'exercitation',
              isLike: true
            },
            { id: '5bfe379d3ec51e510185ee37', NameTw: 'nulla', isLike: true },
            {
              id: '5bfe379d0bd8c60317e3061d',
              NameTw: 'consectetur',
              isLike: false
            },
            { id: '5bfe379dd03301ee53e1b407', NameTw: 'magna', isLike: true },
            { id: '5bfe379dcd87bd245eb8ef00', NameTw: 'est', isLike: true },
            { id: '5bfe379d7b9ddef7f1d53b45', NameTw: 'Lorem', isLike: false }
          ]
        }
      ]
    };
  },
  methods: {
    openGameList: function(gameCategoryObj) {
      this.$store.commit('openGameList', gameCategoryObj);
      this.$router.push('lobby');
    }
  },
  mounted() {},
  computed: {
    activeKind() {
      return this.$store.state.game.openGameListKind;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.game-category {
  height: 100%;
  ul {
    height: 100%;
    li {
      display: inline-block;
      width: 100px;
      height: 100%;
      padding-top: 20px;
      vertical-align: top;
      color: #b0acad;
      cursor: pointer;
      i {
        display: block;
        font-size: 30px;
      }
      &.active {
        color: #ffcd50;
      }
    }
  }
}
</style>
