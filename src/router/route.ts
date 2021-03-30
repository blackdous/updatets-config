/*
 * @Descripttion:
 * @Author: 19080088
 * @Date: 2021-03-30 11:13:39
 * @LastEditors: 19080088
 * @LastEditTime: 2021-03-30 16:05:48
 */
export const routesModules = require.context('./modules', true, /\.js$/);
const routesConstant = [
  {
    name: 'Home',
    path: '/',
    meta: {
      title: '首页',
      icon: ''
    },
    component: () => import(/* WebpackPreLoad: true, webpackChunkName: "user" */ '../../src/pages/home.vue')
  }
];
let routes:Array<any> = [];
const requireAll = (context:any) => context.keys().map(context);
requireAll(routesModules).forEach((route:any) => {
  routes = routesConstant.concat(route.default);
});
export default routes;
