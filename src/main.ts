/*
 * @Descripttion: 
 * @Author: 19080088
 * @Date: 2021-03-30 11:13:39
 * @LastEditors: 19080088
 * @LastEditTime: 2021-03-30 18:08:04
 */
import Vue from 'vue';
// import type store from '@/store';

import router from './router/index';
import ElementUI from '@shinhotech/sh-ui';
// import '../shims-vue';
import App from '@/App.vue';
// import registerServiceWorker from './registerServiceWorker';
import { testTypescript } from './currency';
import './asstes/scss/index.scss';
import '@shinhotech/sh-ui/lib/theme-chalk/index.css';
import (/* WebpackPreLoad: true, webpackChunkName: "soureMap_test" */ './soureMap_test');
// const VuexStoreRegister = require('./plugins/vuexLazy');
// Vue.use(VuexStoreRegister);
testTypescript();
Vue.config.productionTip = false;
Vue.use(ElementUI);
// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
// registerServiceWorker();
