import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import myrouter from './router/router.js'
import VueResource from 'vue-resource'
import axios from 'axios' // 在这里引入axios
Vue.prototype.$axios = axios;   // 在vue中使用axios，全局
// Vue.prototype.$http = require('axios');

Vue.config.productionTip = false;

import './assets/iconfont/iconfont.css'
import './assets/iconfont/iconfont.js'

import "mint-ui/lib/style.css"

import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import { Popup } from 'mint-ui';
Vue.component(Popup.name, Popup);



Vue.use(Router)
Vue.use(VueResource)

new Vue({
  el: '#app',
  render: h => h(App),
  router: myrouter
})
