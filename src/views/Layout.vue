<template>
  <div class="layout">
    <AppHeader/>
    <!-- 侧边选单 -->
    <AppNavigationDrawer/>
    <router-view/>  
    <AppFooter/>
  </div>
</template>

<script>
// import component
import AppHeader from '@/components/shared/Header.vue';
import AppFooter from '@/components/shared/Footer.vue';
import AppNavigationDrawer from '@/components/shared/NavigationDrawer.vue';

export default {
  name: 'layout',
  components: {
    AppHeader,
    AppFooter,
    AppNavigationDrawer
  }
};
</script>
