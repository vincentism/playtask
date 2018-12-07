import Vue from 'vue';
import router from './router/index.js';
import Vuex from 'vuex';

Vue.use(Vuex);
Vue.config.productionTip = false;

new Vue({
  router
}).$mount('#app');
