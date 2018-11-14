import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import dayjs from 'dayjs';
import './assets/fa5/scss/fontawesome.scss';
import './assets/fa5/scss/regular.scss';
import './assets/fa5/scss/solid.scss';
import './assets/fa5/scss/brands.scss';

Vue.prototype.dayjs = dayjs;

Vue.use(dayjs);

// import normalize
import 'normalize.css';

Vue.config.productionTip = false;

Vue.prototype.dayjs = dayjs;

Vue.use(dayjs);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
