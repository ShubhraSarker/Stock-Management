import Vue from 'vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import store from './store/store';
import App from './App.vue'

Vue.filter('currency', value => {
    return '$' + value.toLocaleString();
});

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.http.options.root = 'https://vuejs-trade.firebaseio.com/';

import {routes} from "./routes";
const router = new VueRouter({
   mode: 'history',
   routes
});
new Vue({
  el: '#app',
    router,
    store,
  render: h => h(App)
});
