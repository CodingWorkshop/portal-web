import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import dayjs from "dayjs";

Vue.prototype.dayjs = dayjs;

Vue.use(dayjs);

// import normalize
import "normalize.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
