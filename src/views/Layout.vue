<template>
  <div class="layout">
    <AppHeader/>
    <!-- 侧边选单 -->
    <AppNavigationDrawer/>
    <router-view/>
    <AppFooter/>
    <!-- Popup Modal -->
    <AppModal v-show="isPopupModalVisible" @close="closeModal" :animation="popupData.animation">
      <div slot="header">{{popupData.headerTitle}}</div>
      <component slot="body" :is="popupData.viewName"></component>
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
    return {
      isPopupModalVisible: false,
      popupData: {}
    };
  },
  methods: {
    showModal: function() {
      this.isPopupModalVisible = true;
    },
    closeModal: function() {
      this.isPopupModalVisible = false;
    }
  },
  mounted() {
    // 接收來自其他子元件的開啟彈窗請求
    this.$root.$on('openPopup', data => {
      this.popupData = data;
      this.showModal();
    });
  }
};
</script>
