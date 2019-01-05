import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import store from './store/index';
import routerGenerator from './services/router';
import '@fortawesome/fontawesome-free/css/all.css';
import './plugins/iview.ts';
import 'normalize.css';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

const router = routerGenerator(store);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
