<template>
  <div class="account-box">
    <h3>"{{this.Account}}"，您好!</h3>
    <img src="https://i.imgur.com/rZR6jIk.png" width="103">
    <p class="balance">
      您的余额&nbsp;
      <span>$ {{this.Balance}}</span>&nbsp;
      <i class="fas fa-sync-alt" @click="updateBalance()"></i>
    </p>
    <Button type="default" class="deposit-btn">在线存款</Button>
    <Button type="default" class="withdraw-btn">在线取款</Button>
    <Button type="default">修改密码</Button>
    <Button type="default">修改取款密码</Button>
    <Button type="default" class="signout-btn" @click="signOut()">会员登出</Button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class AccountBox extends Vue {
  Account: string = this.$store.state.login.user;
  Balance: number = 1000.77;

  updateBalance() {
    console.log('沒得更新啦~~~');
  }

  signOut() {
    this.$store.dispatch('submitLogout');
    this.$store.commit('closeModal');
    this.$router.push('/');
  }
}
</script>

<style lang="scss" scoped>
.account-box {
  color: #fff;

  h3 {
    font-size: 17px;
    margin-bottom: 10px;
  }

  p.balance {
    margin: 10px auto 20px;
    font-size: 16px;
    font-weight: bold;

    span {
      color: #ffd800;
      vertical-align: middle;
    }

    i {
      cursor: pointer;
      &:hover {
        color: #ffd800;
      }
    }
  }

  button {
    width: 115px;
    height: 38px;
    margin: 0 5px 15px;
    color: #333;
    font-size: 14px;
    font-weight: bold;
    background: #ededed;
    border-radius: 10px;
    border-color: transparent;

    &.deposit-btn {
      color: #000;
      background: #ffc23e;
    }

    &.withdraw-btn {
      color: #ffc23e;
      background: transparent;
      border: 2px solid #ffc23e;
    }
    &.signout-btn {
      width: 239px;
      height: 38px;
      margin-bottom: 0;
      background: #ffc23e;
      &:before {
        content: '';
        position: static;
        display: inline-block;
        width: 25px;
        height: 25px;
        vertical-align: middle;
        opacity: 1;
        background: url('https://i.imgur.com/w7P2s3l.png') no-repeat center top;
        border-radius: 0;
      }
      &:hover:before {
        background-position: center bottom;
      }
    }
    &:hover {
      color: #fff;
      background: #ff3c00;
    }
  }
}
</style>
