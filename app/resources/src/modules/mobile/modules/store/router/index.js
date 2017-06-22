export default {
  path: 'store',
  component: r => require.ensure([], () => r(require('../pages/layouts/Default.vue')), 'store'),
  children: [
    { path: ':id', component: r => require.ensure([], () => r(require('../pages/default/Index.vue')), 'store') },
    { path: 'case/:id', component: r => require.ensure([], () => r(require('../pages/case/Index.vue')), 'store') }
  ]
};


