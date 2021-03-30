/*
 * @Descripttion:
 * @Author: 19080088
 * @Date: 2021-03-30 11:13:39
 * @LastEditors: 19080088
 * @LastEditTime: 2021-03-30 16:07:58
 */
import Vue from 'vue';
import Router from 'vue-router';
import routes from './route';
Vue.use(Router);

const router = new Router({
  mode: 'hash', // history \ abstrct \ hash
  routes: routes
});
// * https://router.vuejs.org/api/#router-addroutes
// 动态加载路由 addRoutes
// * https://router.vuejs.org/api/#router-instance-methods
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'template-sap';
  next();
  // console.log('to, from, next: ', to, from, next);
});
router.onError((error) => {
  console.error(error);
});

export default router;
