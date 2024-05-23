import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'CrazySeven',
    component: () => import('../page/CrazySeven.vue')
  }
];

const router = new VueRouter({
  mode: 'history', // 使用历史模式
  routes
});

export default router;  