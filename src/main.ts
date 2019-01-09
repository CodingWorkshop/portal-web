import Vue from 'vue';
import App from './App.vue';
import httpGenrator from './services/http';
import store from './store/index';
import routerGenerator from './services/router';
import '@fortawesome/fontawesome-free/css/all.css';
import './plugins/iview.ts';
import 'normalize.css';

Vue.config.productionTip = false;

const router = routerGenerator(store);
const http = httpGenrator(router);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
