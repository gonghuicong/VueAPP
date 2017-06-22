export default {
  path: 'admin',
  component: r => require.ensure([], () => r(require('../pages/layouts/Default.vue')), 'admin'),
  children: [
    { path: '/', component: r => require.ensure([], () => r(require('../pages/default/Index.vue')), 'admin') },
    {
      path: 'decoration',
      component: r => require.ensure([], () => r(require('../pages/decoration/layouts/Default.vue')), 'admin-decoration'),
      children: [
        { path: '/', component: r => require.ensure([], () => r(require('../pages/decoration/default/Index.vue')), 'admin-decoration') },
        {
          path: 'kefu',
          component: r => require.ensure([], () => r(require('../pages/decoration/kefu/layouts/Default.vue')), 'admin-decoration'),
          children: [
            { path: '/', component: r => require.ensure([], () => r(require('../pages/decoration/kefu/default/Index.vue')), 'admin-decoration') },
            { path: 'baomingkehu', component: r => require.ensure([], () => r(require('../pages/decoration/kefu/baomingkehu/Index.vue')), 'admin-decoration') },
            { path: 'qianzaikehu', component: r => require.ensure([], () => r(require('../pages/decoration/kefu/qianzaikehu/Index.vue')), 'admin-decoration') },
            { path: 'lurukehu', component: r => require.ensure([], () => r(require('../pages/decoration/kefu/lurukehu/Index.vue')), 'admin-decoration') },
            { path: 'dingjinkehu', component: r => require.ensure([], () => r(require('../pages/decoration/kefu/dingjinkehu/Index.vue')), 'admin-decoration') },
            { path: 'daikaigong', component: r => require.ensure([], () => r(require('../pages/decoration/kefu/daikaigong/Index.vue')), 'admin-decoration') },
            { path: 'shigongzhong', component: r => require.ensure([], () => r(require('../pages/decoration/kefu/shigongzhong/Index.vue')), 'admin-decoration') },
            { path: 'wangongkehu', component: r => require.ensure([], () => r(require('../pages/decoration/kefu/wangongkehu/Index.vue')), 'admin-decoration') },
            { path: 'zaixianxiaoxi', component: r => require.ensure([], () => r(require('../pages/decoration/kefu/zaixianxiaoxi/Index.vue')), 'admin-decoration') }
          ]
         },
        {
          path: 'designer',
          component: r => require.ensure([], () => r(require('../pages/decoration/designer/layouts/Default.vue')), 'admin-decoration-designer'),
          children: [
            { path: '/', component: r => require.ensure([], () => r(require('../pages/decoration/designer/default/Index.vue')), 'admin-decoration-designer') },
            { path: 'paidan', component: r => require.ensure([], () => r(require('../pages/decoration/designer/paidan/Index.vue')), 'admin-decoration-designer') },
            { path: 'qianzaikehu', component: r => require.ensure([], () => r(require('../pages/decoration/designer/qianzaikehu/Index.vue')), 'admin-decoration-designer') },
            { path: 'dingjinkehu', component: r => require.ensure([], () => r(require('../pages/decoration/designer/dingjinkehu/Index.vue')), 'admin-decoration-designer') },
            { path: 'daikaigong', component: r => require.ensure([], () => r(require('../pages/decoration/designer/daikaigong/Index.vue')), 'admin-decoration-designer') },
            { path: 'shigongzhong', component: r => require.ensure([], () => r(require('../pages/decoration/designer/shigongzhong/Index.vue')), 'admin-decoration-designer') },
            { path: 'wangongkehu', component: r => require.ensure([], () => r(require('../pages/decoration/designer/wangong/Index.vue')), 'admin-decoration-designer') }
          ]
        },
      ]
    }
  ]
};

