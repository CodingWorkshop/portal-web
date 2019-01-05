<template>
  <div class="navigation" :class="{'show':this.navigationState,'hide':!this.navigationState}">
    <div class="change-btn" @click="changeNaviState()">
      <i class="fas fa-arrow-circle-right"></i>
      <template v-if="this.navigationState">收起</template>
      <template v-else>展開</template>
    </div>
    <div class="navi-box">
      <div class="navi-head">
        <div class="logo">
          <img
            src="https://img00.deviantart.net/64e9/i/2018/211/5/b/nintendo__1975__vector_logo_by_dreamcopter-dcir65u.png"
          >
        </div>
        <div class="domain">{{ domainName }}</div>
      </div>
      <ul class="menu">
        <li v-for="(item, index) in sideMenu" :key="index">
          <div v-if="item.open==='Modal'" @click="openModal(item.ActionContent)">
            <img :src="item.icon">
            {{item.NameCn}}
          </div>
          <div v-if="item.open==='router'" @click="chanheRouter(item.ActionContent)">
            <img :src="item.icon">
            {{item.NameCn}}
          </div>
        </li>
      </ul>
      <div class="navi-foot">
        <ul class="service-info" v-if="services">
          <li v-for="(service, index) in services" :key="index">{{service.NameCn}}</li>
        </ul>
        <div class="chat-btn">7x24客服</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavigationDrawer',
  props: {},
  data() {
    return {
      domainName: 'XXXDEMO.com',
      screenWidth: document.body.clientWidth,
      navigationState: true,
      Menus: [
        {
          NameCn: '会员登入',
          ActionContent: 'login',
          open: 'Modal',
          icon: 'https://i.imgur.com/Cuvtop7.png'
        },
        {
          NameCn: '免费开户',
          ActionContent: 'register',
          open: 'Modal',
          icon: 'https://i.imgur.com/eokHtFS.png'
        },
        {
          NameCn: '免费试玩',
          ActionContent: 'freeplay',
          open: 'Modal',
          icon: 'https://i.imgur.com/01XD9Aw.png'
        },
        {
          NameCn: '优惠活动',
          ActionContent: 'promotion',
          open: 'Modal',
          icon: 'https://i.imgur.com/VuZUT3m.png'
        },
        {
          NameCn: '手机投注',
          ActionContent: '/Mobile',
          open: 'blank',
          icon: 'https://i.imgur.com/JOTgWVI.png'
        }
      ],
      loginMenu: [
        {
          NameCn: '会员中心',
          ActionContent: 'AccountBox',
          open: 'Modal',
          icon: 'https://i.imgur.com/SAgWk6X.png'
        },
        {
          NameCn: '站內信',
          ActionContent: 'siteMail',
          open: 'Modal',
          icon: 'https://i.imgur.com/QQdcFWs.png'
        },
        {
          NameCn: '帐务记录',
          ActionContent: 'transaction',
          open: 'Modal',
          icon: 'https://i.imgur.com/Tec3LLS.png'
        },
        {
          NameCn: '投注记录',
          ActionContent: 'betrecord',
          open: 'Modal',
          icon: 'https://i.imgur.com/dQf3aQD.png'
        },
        {
          NameCn: '优惠活动',
          ActionContent: 'promotion',
          open: 'Modal',
          icon: 'https://i.imgur.com/VuZUT3m.png'
        },
        {
          NameCn: '时时返水',
          ActionContent: 'atd',
          open: 'Modal',
          icon: 'https://i.imgur.com/Nhw5zvJ.png'
        },
        {
          NameCn: '最近浏览',
          ActionContent: 'review',
          open: 'Modal',
          icon: 'https://i.imgur.com/WUZzQlK.png'
        }
      ],
      services: [
        {
          service: 'qq',
          NameCn: '客服QQ',
          content: '123456'
        },
        {
          service: 'wechat',
          NameCn: '微信客服',
          content: '123456'
        }
      ]
    };
  },
  mounted() {
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        this.screenWidth = window.screenWidth;
      })();
    };
  },
  computed: {
    sideMenu: function() {
      if (this.$store.state.login.loginStatus) {
        return this.loginMenu;
      } else {
        return this.Menus;
      }
    }
  },
  watch: {
    screenWidth(val) {
      this.screenWidth = val;
      if (this.screenWidth < 1000) {
        this.navigationState = false;
      } else {
        this.navigationState = true;
      }
    }
  },
  methods: {
    openModal: function(link) {
      this.$store.commit('openModal', link);
    },
    chanheRouter: function(data) {
      this.$router.push({ path: data });
    },
    changeNaviState: function() {
      this.navigationState = !this.navigationState;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navigation {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 4;
  width: 168px;
  background-color: #363636;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.65);
  transition: width 0.4s;

  i {
    transition: all 0.4s;
  }

  &.hide {
    width: 0;
    i {
      transform: rotate(180deg);
    }
  }

  .change-btn {
    position: absolute;
    top: 300px;
    left: -34px;
    width: 34px;
    height: 101px;
    padding: 10px 5px;
    color: #fff;
    font-size: 16px;
    background: #7243bc;
    border-radius: 10px 0 0 10px;
    box-shadow: 0 4 8 0 rgba(0, 0, 0, 0.8);
    cursor: pointer;

    &:hover {
      color: #ffd053;
    }
  }

  .navi-box {
    > * {
      width: 168px;
      min-width: 168px;
    }

    .navi-head {
      background-color: #563a83;
      .logo {
        height: 134px;
        padding: 51px 20px 0;

        img {
          width: 100%;
        }
      }

      .domain {
        height: 42px;
        color: #fff;
        line-height: 42px;
        background-color: $theme-light-bg;
      }
    }

    .menu {
      li {
        color: #fff;
        font-size: 16px;
        line-height: 60px;
        text-align: left;
        list-style-type: none;
        cursor: pointer;

        &:hover {
          background-color: #282828;
        }
        img {
          vertical-align: middle;
          margin: 0 5px 0 35px;
        }
      }
    }

    .navi-foot {
      position: absolute;
      bottom: 0;
      width: 100%;

      .service-info {
        border-top: 3px solid #7243bc;
        background: #48316c;

        li {
          height: 40px;
          line-height: 40px;
          color: #fff;
          font-size: 16px;
          font-weight: bold;
          background: #48316c;
          list-style-type: none;
        }
      }
      .chat-btn {
        height: 50px;
        color: #fff;
        font-size: 16px;
        font-weight: bold;
        line-height: 50px;
        background-color: #48316c;
        border-top: 1px solid #7243bc;
      }
    }
  }
}
</style>
