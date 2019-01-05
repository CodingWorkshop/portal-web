import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import router from './router';
import store from './store/index';
// import dayjs from 'dayjs';
// import upperFirst from 'lodash/upperFirst';
// import camelCase from 'lodash/camelCase';
import '@fortawesome/fontawesome-free/css/all.css';
import './plugins/iview.ts';
import 'normalize.css';

// Vue.prototype.dayjs = dayjs;

// Vue.use(dayjs);
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;
//use require.context to globally register components
// const requireComponent = require.context(
//   // The relative path of the components folder
//   '@/views',
//   // Whether or not to look in subfolders
//   false,
//   // The regular expression used to match base component filenames
//   /[A-Z]\w+\.(vue|js|ts)$/
// );

// requireComponent.keys().forEach(fileName => {
//   // Get component config
//   const componentConfig = requireComponent(fileName);

//   // Get PascalCase name of component
//   const componentName = upperFirst(
//     camelCase(
//       // Strip the leading `./` and extension from the filename
//       fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
//     )
//   );

//   // Register component globally
//   Vue.component(componentName, componentConfig.default || componentConfig);
// });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
