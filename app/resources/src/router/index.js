import VueRouter from 'vue-router';

import MobileRouter from '../modules/mobile/router';
import SellerRouter from '../modules/seller/router';

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: r => require.ensure([], () => r(require('../pages/layouts/Default.vue')), 'default'),
      children: [
        { path: '/', component: r => require.ensure([], () => r(require('../pages/default/Index.vue')), 'default') }
      ]
    },
    MobileRouter,
    SellerRouter
  ]
});
