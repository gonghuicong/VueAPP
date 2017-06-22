import VueRouter from 'vue-router';

import DefaultIndex from '../pages/default/Index.vue';

// 用户中心
import UserRouter from '../modules/user/router';
// 装修系统
// import DecorationRouter from '../modules/decoration/router';
//商家后台
import AdminRouter from '../modules/admin/router';
//选材系统
import SellerRouter from '../modules/seller/router';
//店铺系统
import StoreRouter from '../modules/store/router';

export default {
  path: '/m',
  component: r => require.ensure([], () => r(require('../pages/layouts/Default.vue')), 'mobile'),
  children: [
    { path: '/', component: DefaultIndex },
    UserRouter,
    // DecorationRouter,
    // AdminRouter,
    SellerRouter,
    StoreRouter
  ]
};