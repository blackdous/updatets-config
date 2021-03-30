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
