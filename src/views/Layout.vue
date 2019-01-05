<template>
  <div class="layout">
    <AppHeader class="header"/>
    <!-- 侧边选单 -->
    <AppNavigationDrawer/>
    <router-view/>
    <AppFooter/>
    <!-- Popup Modal -->
    <AppModal
      v-show="isModalOpen"
      :animation="modalOption.animation"
      :modal-name="modalOption.viewName"
      :modal-size="modalOption.size"
    >
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

import AccountLogin from '@/views/popup/AccountLogin.vue';
import AccountBox from '@/views/popup/AccountBox.vue';
import Register from '@/views/popup/Register.vue';
import SiteMail from '@/views/popup/SiteMail.vue';
import Transaction from '@/views/popup/Transaction.vue';

export default {
  name: 'Layout',
  components: {
    AppHeader,
    AppFooter,
    AppNavigationDrawer,
    AppModal,
    AccountLogin,
    AccountBox,
    Register,
    SiteMail,
    Transaction
  },
  data() {
    return {};
  },
  methods: {},
  computed: {
    isModalOpen() {
      return this.$store.state.popup.isModalOpen;
    },
    modalOption() {
      return this.$store.state.popup.modalOptions;
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  position: relative;
  z-index: 3;
}
/deep/ .wrapper {
  width: 1000px;
  margin: 0 auto;
}
</style>
