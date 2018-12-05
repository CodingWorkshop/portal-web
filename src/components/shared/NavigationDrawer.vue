<template>
  <ul class="navigation">
    <div class="navi-top">
      <div class="logo">
        <img
          src="https://img00.deviantart.net/64e9/i/2018/211/5/b/nintendo__1975__vector_logo_by_dreamcopter-dcir65u.png"
        >
      </div>
      <div class="domain">{{ domainName }}</div>
    </div>
    <ul class="menu">
      <li v-for="(item, index) in Menus" :key="index">
        <div
          class="opemModal"
          v-if="item.open==='Modal'"
          @click="openModal(item.ActionContent)"
        >{{item.NameCn}}</div>
        <div
          class="chaneRouter"
          v-if="item.open==='router'"
          @click="chanheRouter(item.ActionContent)"
        >{{item.NameCn}}</div>
      </li>
    </ul>
    <ul class="service-info" v-if="services">
      <li v-for="(service, index) in services" :key="index">{{service.NameCn}}</li>
    </ul>
    <div class="chat-btn">7x24客服</div>
  </ul>
</template>

<script>
export default {
  name: 'NavigationDrawer',
  props: {},
  data() {
    return {
      haslogin: this.$store.state.login.isLogin,
      domainName: 'XXXDEMO.com',
      Menus: [
        {
          NameCn: '会员登入',
          ActionContent: 'login',
          open: 'Modal',
          requiredLogin: false
        },
        {
          NameCn: '免費開戶',
          ActionContent: '/',
          open: '',
          requiredLogin: false,
          isLoginNotShow: true
        },
        {
          NameCn: '免費試玩',
          ActionContent: '/',
          open: 'blank',
          requiredLogin: false,
          isLoginNotShow: true
        },
        {
          NameCn: '優惠活動',
          ActionContent: '/',
          open: '',
          requiredLogin: false
        },
        {
          NameCn: '站內信',
          ActionContent: 'siteMail',
          open: 'Modal',
          requiredLogin: true
        },
        {
          NameCn: '交易紀錄',
          ActionContent: 'transaction',
          open: 'Modal',
          requiredLogin: true
        },
        {
          NameCn: '關於我們',
          ActionContent: '/about',
          open: 'router',
          requiredLogin: false
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
  methods: {
    // change state in Vuex store
    // viewName use kebab-case
    openPopup: function(data) {
      this.$store.commit('openModal', data);
    },
    openModal: function(link) {
      const modelDetail = {
        login: {
          headerTitle: '会员登入',
          viewName: 'account',
          animation: 'fade',
          size: {
            width: 283,
            height: 477
          }
        },
        siteMail: {
          headerTitle: '站内信',
          viewName: 'site-mail',
          animation: 'fade',
          size: {
            width: 500,
            height: 600
          }
        },
        transaction: {
          headerTitle: '交易记录',
          viewName: 'transaction',
          animation: 'fade',
          size: {
            width: 500,
            height: 600
          }
        }
      };
      this.openPopup(modelDetail[link]);
    },
    chanheRouter: function(data) {
      this.$router.push({ path: data });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navigation {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  width: 168px;
  background-color: #363636;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.65);

  .navi-top {
    background-color: #563c7f;
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

  .service-info {
    position: absolute;
    bottom: 50px;
    width: 100%;
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
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    line-height: 50px;
    background-color: #563a83;
    border-top: 1px solid #7243bc;
  }
}
</style>
