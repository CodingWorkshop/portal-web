<template>
  <div class="layout">
    <AppHeader/>
    <!-- 侧边选单 -->
    <AppNavigationDrawer/>
    <router-view/>
    <AppFooter/>
    <!-- Popup Modal -->
    <AppModal v-show="isModalOpen" :animation="modalOption.animation">
      <div slot="header">{{modalOption.headerTitle}}</div>
      <component slot="body" :is="modalOption.viewName"></component>
    </AppModal>
  </div>
</template>

<script>
// Components
import AppHeader from '@/components/shared/Header.vue';
import AppFooter from '@/components/shared/Footer.vue';
import AppNavigationDrawer from '@/components/shared/NavigationDrawer.vue';
import AppModal from '@/components/shared/Modal.vue';

export default {
  name: 'layout',
  components: {
    AppHeader,
    AppFooter,
    AppNavigationDrawer,
    AppModal
  },
  data() {
    return {};
  },
  methods: {},
  computed: {
    isModalOpen() {
      return this.$store.state.isModalOpen;
    },
    modalOption() {
      return this.$store.state.modalOptions;
    }
  }
};
</script>
