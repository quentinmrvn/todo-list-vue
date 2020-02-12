import Vue from 'vue';
// @ts-ignore
import EvaIcons from 'vue-eva-icons';
import App from './App.vue';
import router from './router/index';
import store from './store/index';

Vue.use(EvaIcons);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
