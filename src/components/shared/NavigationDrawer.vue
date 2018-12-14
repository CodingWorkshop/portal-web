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
        <li v-for="(item, index) in Menus" :key="index">
          <div v-if="item.open==='Modal'" @click="openModal(item.ActionContent)">{{item.NameCn}}</div>
          <div v-if="item.open==='router'" @click="chanheRouter(item.ActionContent)">{{item.NameCn}}</div>
          <div
            v-if="item.open==='none' &&item.ActionContent==='logout'"
            @click="$store.dispatch('submitLogout')"
          >{{item.NameCn}}</div>
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
          open: 'Modal'
        },
        {
          NameCn: '免費開戶',
          ActionContent: '/',
          open: ''
        },
        {
          NameCn: '免費試玩',
          ActionContent: '/',
          open: 'blank'
        },
        {
          NameCn: '優惠活動',
          ActionContent: '/',
          open: ''
        },
        {
          NameCn: '站內信',
          ActionContent: 'siteMail',
          open: 'Modal'
        },
        {
          NameCn: '交易紀錄',
          ActionContent: 'transaction',
          open: 'Modal'
        },
        {
          NameCn: '關於我們',
          ActionContent: '/about',
          open: 'router'
        },
        {
          NameCn: '登出',
          ActionContent: 'logout',
          open: 'none'
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
  z-index: 1;
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
        text-align: center;
        cursor: pointer;

        &:hover {
          background-color: #282828;
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
