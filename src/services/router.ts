import Vue from 'vue';
import Router from 'vue-router';
import { Store } from 'vuex';

import Home from '@/views/Home.vue';
import lobby from '@/views/Lobby.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/lobby',
      name: 'lobby',
      component: lobby
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ '@/views/articles/About.vue')
    }
  ]
});

export default (store: Store<any>) => {
  return router;
};
