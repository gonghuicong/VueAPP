import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import axios from 'axios';
import extend from 'lodash/extend';

window.G = extend(process.env.NODE_ENV == 'development' ? {
  baseUrl: 'http://yjs5.com',
  cdnUrl: 'http://yjs5.com',
  storageUrl: 'http://yjs5.com',
  mApiUrl: 'http://yjs5.com/mo_bile/index.php',
  apiUrl: 'http://a.yjs5.com/api'
} : {
  baseUrl: 'http://www.youjhome.com',
  cdnUrl: 'http://cdn.youjhome.com',
  storageUrl: 'http://s.youjhome.com',
  mApiUrl: 'http://www.youjhome.com/mo_bile/index.php',
  apiUrl: 'http://a.youjhome.com/api'
}, {
  csrfToken: ''
}, window.G || {});
window.G.utils = require('./utils');
window.Vue = Vue;
window.axios = axios;

Vue.use(Vuex);
Vue.use(VueRouter);
