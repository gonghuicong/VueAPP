export default {
  path: 'user',
  alias: 'my',
  component: r => require.ensure([], () => r(require('../pages/layouts/Default.vue')), 'user'),
  children: [
    { path: '/', component: r => require.ensure([], () => r(require('../pages/default/Index.vue')), 'user') },
    { path: 'login', component: r => require.ensure([], () => r(require('../pages/user/Login.vue')), 'user') },
    { path: 'register', component: r => require.ensure([], () => r(require('../pages/user/Register.vue')), 'user') },
    { path: 'password-reset', component: r => require.ensure([], () => r(require('../pages/user/PasswordReset.vue')), 'user') },
  ],

};
