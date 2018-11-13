<template>
<div class="navigation">
  <div class="navi-top"> 
    <div class="logo">
      <img src="https://img00.deviantart.net/64e9/i/2018/211/5/b/nintendo__1975__vector_logo_by_dreamcopter-dcir65u.png">
    </div>
    <div class="domain">{{ domainName }}</div>
  </div>
    <ul class="menu">
      <li>会员登入(Slide)</li>
      <li>站內信(Popup)</li>
      <li><router-link to="/">首页</router-link></li>
      <li><router-link to="/about">关于我们</router-link></li>
    </ul>
</div>
</template>

<script>
export default {
  name: "NavigationDrawer",
  props: {},
  data: function() {
    return {
      domainName: "XXXDEMO.com"
    };
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
  z-index: 10;
  width: 168px;
  background-color: #563c7f;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.65);
  .navi-top {
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
      background-color: #7243bc;
    }
  }
  .menu {
    background-color: #363636;
    li {
      color: #fff;
      font-size: 16px;
      line-height: 60px;
      text-align: center;
      &:hover {
        background-color: #282828;
      }
    }
  }
}
</style>
