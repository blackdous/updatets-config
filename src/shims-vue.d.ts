/*
 * @Descripttion: 
 * @Author: 19080088
 * @Date: 2021-03-30 15:14:15
 * @LastEditors: 19080088
 * @LastEditTime: 2021-03-30 15:38:48
 */
declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}
declare module "vue/types/vue" {
  import VueRouter, { Route } from 'vue-router';
  interface Vue {
    $router: VueRouter; // 这表示this下有这个东西
    $route: Route;
    $http: any;
    $Message: any;
    $Modal: any;
  }
}