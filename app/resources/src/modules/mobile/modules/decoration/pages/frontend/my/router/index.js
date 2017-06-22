/**
 * Created by Administrator on 2017/01/19 0019.
 */
import MyIndex from 'Index';
import LoginIndex from '../components/login/Index.vue'

export default {
  path: '/my',
  component: r => require.ensure([], () => r(require('../pages/mobile/my/login/Index')), 'my'),
  children: [
    { path: '/', component: MyIndex },
    { path: '/my/components/login', component: LoginIndex }

  ]
};
