import { Component, Vue } from 'vue-property-decorator';

import Layout from '@/views/Layout.vue';

@Component({
  name: 'app',
  components: {
    Layout
  }
})
export default class AppCtrl extends Vue {}
