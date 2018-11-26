<template>
  <div class="account">
    <h1>You are in Account Page now</h1>
    <Login></Login>
  </div>
</template>

<script>
import Login from '@/components/Login.vue';
export default {
  name: 'account',
  data: function() {
    return {};
  },
  components: {
    Login
  }
};
</script>
