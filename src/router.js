import Vue from "vue";
import Router from "vue-router";
import dayjs from "dayjs";

Vue.use(Router);

Vue.prototype.dayjs = dayjs;

Vue.use(dayjs);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./views/Home.vue")
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
