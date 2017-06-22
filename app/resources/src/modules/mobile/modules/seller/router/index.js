export default {
  path: 'seller',
  component: r => require.ensure([], () => r(require('../pages/layouts/Default.vue')), 'seller'),
  children: [
    { path: '/', component: r => require.ensure([], () => r(require('../pages/default/Index.vue')), 'seller') },
    { path: 'spec', component: r => require.ensure([], () => r(require('../pages/spec/Index.vue')), 'seller') },
    { path: 'adduser', component: r => require.ensure([], () => r(require('../pages/adduser/Index.vue')), 'seller') },
    { path: 'material', component: r => require.ensure([], () => r(require('../pages/material/Index.vue')), 'seller') },
    { path: 'package', component: r => require.ensure([], () => r(require('../pages/package/Index.vue')), 'seller') },
    { path: 'package/user/:id', component: r => require.ensure([], () => r(require('../pages/package/User.vue')), 'seller') },
    { path: 'user/login', component: r => require.ensure([], () => r(require('../pages/user/login.vue')), 'seller') },
  ]
};
