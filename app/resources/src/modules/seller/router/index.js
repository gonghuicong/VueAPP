export default {
  path: '/seller',
  component: r => require.ensure([], () => r(require('../pages/layouts/Default.vue')), 'seller'),
  children: [
    {
      path: '/',
      component: r => require.ensure([], () => r(require('../pages/default/Index.vue')), 'seller')
    },
    { // 商户后台套餐选购页
      path: 'package',
      component: r => require.ensure([], () => r(require('../pages/package/Index.vue')), 'seller')
    },
  ]
};
