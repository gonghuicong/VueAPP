export default {
  path: 'decoration',
  component: r => require.ensure([], () => r(require('../pages/layouts/Default.vue')), 'decoration'),
  children: [
    { path: '/', component: r => require.ensure([], () => r(require('../pages/default/Index.vue')), 'decoration') },
    {
      path: 'frontend',
      component: r => require.ensure([], () => r(require('../pages/frontend/layouts/Default.vue')),'decoration-frontend'),
      children:[
        { path: '/', component: r => require.ensure([], () => r(require('../pages/frontend/default/Index.vue')), 'decoration-frontend') },
        { path: 'zhucai', component: r => require.ensure([], () => r(require('../pages/frontend/zhucai/Index.vue')), 'd ecoration-frontend') },
        { path: 'fucai', component: r => require.ensure([], () => r(require('../pages/frontend/fucai/Index.vue')), 'decoration-frontend') },
        { path: 'gongdi', component: r => require.ensure([], () => r(require('../pages/frontend/gongdi/Index.vue')), 'decoration-frontend') },
        { path: 'my', component: r => require.ensure([], () => r(require('../pages/frontend/my/Index.vue')), 'decoration-frontend') }
      ]
    },
    {
      path: 'backend',
      component: r => require.ensure([], () => r(require('../pages/backend/layouts/Default.vue')), 'decoration-backend'),
          children: [
            { path: '/', component: r => require.ensure([], () => r(require('../pages/backend/default/Index.vue')), 'decoration-backend-decoration') },
            {
              path: 'kefu',
              component: r => require.ensure([], () => r(require('../pages/backend/kefu/layouts/Default.vue')), 'decoration-backend-decoration-kefu'),
              children: [
                { path: '/', component: r => require.ensure([], () => r(require('../pages/backend/kefu/default/Index.vue')), 'decoration-backend-decoration-kefu') },
                {
                    path: 'baomingkehu',
                    component: r => require.ensure([], () => r(require('../pages/backend/kefu/baomingkehu/layouts/Default.vue')), 'decoration-backend-decoration-kefu-baomingkehu'),
                    children:[
                        { path: '/', component: r => require.ensure([], () => r(require('../pages/backend/kefu/baomingkehu/default/Index.vue')), 'decoration-backend-decoration-kefu-baomingkehu')},
                        { path: 'cankaofangan', component: r => require.ensure([], () => r(require('../pages/backend/kefu/baomingkehu/cankaofangan/default/Index.vue')), 'decoration-backend-decoration-kefu-baomingkehu')},
                    ]

                },
                {
                    path: 'qianzaikehu',
                    component: r => require.ensure([], () => r(require('../pages/backend/kefu/qianzaikehu/layouts/Default.vue')), 'decoration-backend-decoration-kefu-qianzaikehu'),
                    children:[
                        { path: '/', component: r => require.ensure([], () => r(require('../pages/backend/kefu/qianzaikehu/default/Index.vue')), 'decoration-backend-decoration-kefu-qianzaikehu')},
                        { path: 'cankaofangan', component: r => require.ensure([], () => r(require('../pages/backend/kefu/qianzaikehu/cankaofangan/default/Index.vue')), 'decoration-backend-decoration-kefu-qianzaikehu')},
                        { path: 'fanganjilu', component: r => require.ensure([], () => r(require('../pages/backend/kefu/qianzaikehu/fanganjilu/default/Index.vue')), 'decoration-backend-decoration-kefu-qianzaikehu')},
                    ]

                },
                {
                    path: 'lurukehu',
                    component: r => require.ensure([], () => r(require('../pages/backend/kefu/baomingkehu/layouts/Default.vue')), 'decoration-backend-decoration-kefu-lurukehu'),
                    children:[
                        { path: '/', component: r => require.ensure([], () => r(require('../pages/backend/kefu/lurukehu/default/Index.vue')), 'decoration-backend-decoration-kefu-lurukehu')},
                        { path: 'detail', component: r => require.ensure([], () => r(require('../pages/backend/kefu/lurukehu/detail/default/Index.vue')), 'decoration-backend-decoration-kefu-lurukehu')},
                        { path: 'add', component: r => require.ensure([], () => r(require('../pages/backend/kefu/lurukehu/add/Index.vue')), 'decoration-backend-decoration-kefu-lurukehu')},

                    ]

                },
               {
                  path: 'dingjinkehu',
                  component: r => require.ensure([], () => r(require('../pages/backend/kefu/dingjinkehu/layouts/Default.vue')), 'decoration-backend-decoration-kefu-dingjinkehu'),
                  children:[
                      { path: '/', component: r => require.ensure([], () => r(require('../pages/backend/kefu/dingjinkehu/default/Index.vue')), 'decoration-backend-decoration-kefu-dingjinkehu')},
                      {
                          path: 'chakanfangan',
                          component: r => require.ensure([], () => r(require('../pages/backend/kefu/dingjinkehu/chakanfangan/layouts/Default.vue')), 'decoration-backend-decoration-kefu-dingjinkehu'),
                          children: [
                              { path: '/', component: r => require.ensure([], () => r(require('../pages/backend/kefu/dingjinkehu/chakanfangan/default/Index.vue')), 'decoration-backend-decoration-kefu-dingjinkehu') },
                              {
                                  path: 'fanganjilu',component: r => require.ensure([], () => r(require('../pages/backend/kefu/dingjinkehu/chakanfangan/fanganjilu/default/Index.vue')), 'decoration-backend-decoration-kefu-dingjinkehu-goutongrizhi'),
                              },
                          ]

                      },

                  ]

               },
              {
                  path: 'daikaigong',
                  component: r => require.ensure([], () => r(require('../pages/backend/kefu/daikaigong/layouts/Default.vue')), 'decoration-backend-decoration-kefu-daikaigong'),
                  children:[
                      { path: '/', component: r => require.ensure([], () => r(require('../pages/backend/kefu/daikaigong/default/Index.vue')), 'decoration-backend-decoration-kefu-daikaigong')},
                      {
                          path: 'chakanfangan',
                          component: r => require.ensure([], () => r(require('../pages/backend/kefu/daikaigong/chakanfangan/layouts/Default.vue')), 'decoration-backend-decoration-kefu-daikaigong'),
                          children: [
                              { path: '/', component: r => require.ensure([], () => r(require('../pages/backend/kefu/daikaigong/chakanfangan/default/Index.vue')), 'decoration-backend-decoration-kefu-daikaigong') },
                              { path: 'fanganjilu',component: r => require.ensure([], () => r(require('../pages/backend/kefu/daikaigong/chakanfangan/fanganjilu/default/Index.vue')), 'decoration-backend-decoration-kefu-daikaigong-goutongrizhi'),},
                          ]
                      },
                  ]
              },
                { path: 'shigongzhong', component: r => require.ensure([], () => r(require('../pages/backend/kefu/shigongzhong/Index.vue')), 'decoration-backend-decoration-kefu') },
                { path: 'wangongkehu', component: r => require.ensure([], () => r(require('../pages/backend/kefu/wangongkehu/Index.vue')), 'decoration-backend-decoration-kefu') },
                { path: 'zaixianxiaoxi', component: r => require.ensure([], () => r(require('../pages/backend/kefu/zaixianxiaoxi/Index.vue')), 'decoration-backend-decoration-kefu') }
              ]
            },
            {
              path: 'designer',
              component: r => require.ensure([], () => r(require('../pages/backend/designer/layouts/Default.vue')), 'decoration-backend-designer'),
              children: [
                { path: '/', component: r => require.ensure([], () => r(require('../pages/backend/designer/default/Index.vue')), 'decoration-backend-designer') },
                { path: 'paidan', component: r => require.ensure([], () => r(require('../pages/backend/designer/paidan/Index.vue')), 'decoration-backend-designer') },
                {
                    path: 'qianzaikehu',
                    component: r => require.ensure([], () => r(require('../pages/backend/designer/qianzaikehu/layouts/Default.vue')), 'decoration-backend-designer') ,
                    children:[
                        { path: '/', component: r => require.ensure([], () => r(require('../pages/backend/designer/qianzaikehu/default/Index.vue')), 'decoration-backend-designer-qianzaikehu') },
                        {
                            path: 'fanganjilu',
                            component: r => require.ensure([], () => r(require('../pages/backend/designer/qianzaikehu/fanganjilu/layouts/Default.vue')), 'decoration-backend-designer-qianzaikehu'),
                            children:[
                                { path: '/', component: r => require.ensure([], () => r(require('../pages/backend/designer/qianzaikehu/fanganjilu/default/Index.vue')), 'decoration-backend-designer-qianzaikehu') },
                                { path: 'add', component: r => require.ensure([], () => r(require('../pages/backend/designer/qianzaikehu/fanganjilu/add/default/Index.vue')), 'decoration-backend-designer-qianzaikehu') },
                            ]
                        },
                        { path: 'cankaofangan', component: r => require.ensure([], () => r(require('../pages/backend/designer/qianzaikehu/cankaofangan/default/Index.vue')), 'decoration-backend-designer-qianzaikehu') },
                    ]
                },
                {
                    path: 'dingjinkehu',
                    component: r => require.ensure([], () => r(require('../pages/backend/designer/dingjinkehu/layouts/Default.vue')), 'decoration-backend-designer-dingjinkehu'),
                    children:[
                        { path: '/', component: r => require.ensure([], () => r(require('../pages/backend/designer/dingjinkehu/default/Index.vue')), 'decoration-backend-designer-dingjinkehu') },
                        {
                            path: 'chakanfangan',
                            component: r => require.ensure([], () => r(require('../pages/backend/designer/dingjinkehu/chakanfangan/layouts/Default.vue')), 'decoration-backend-designer-dingjinkehu'),
                            children:[
                                { path: '/', component: r => require.ensure([], () => r(require('../pages/backend/designer/dingjinkehu/chakanfangan/default/Index.vue')), 'decoration-backend-designer-dingjinkehu') },
                                { path: 'goutongrizhi', component: r => require.ensure([], () => r(require('../pages/backend/designer/dingjinkehu/chakanfangan/goutongrizhi/default/Index.vue')), 'decoration-backend-designer-dingjinkehu') },
                            ]
                        },
                    ]
                },
                {
                    path: 'daikaigong',
                    component: r => require.ensure([], () => r(require('../pages/backend/designer/daikaigong/layouts/Default.vue')), 'decoration-backend-designer'),
                    children:[
                        { path: '/', component: r => require.ensure([], () => r(require('../pages/backend/designer/daikaigong/default/Index.vue')), 'decoration-backend-designer') },
                        {
                            path: 'chakanfangan',
                            component: r => require.ensure([], () => r(require('../pages/backend/designer/daikaigong/chakanfangan/layouts/Default.vue')), 'decoration-backend-designer'),
                            children:[
                                { path: '/', component: r => require.ensure([], () => r(require('../pages/backend/designer/daikaigong/chakanfangan/default/Index.vue')), 'decoration-backend-designer') },
                                { path: 'goutongrizhi', component: r => require.ensure([], () => r(require('../pages/backend/designer/daikaigong/chakanfangan/goutongrizhi/default/Index.vue')), 'decoration-backend-designer') },
                            ]
                        },
                    ]
                },
                { path: 'shigongzhong', component: r => require.ensure([], () => r(require('../pages/backend/designer/shigongzhong/Index.vue')), 'decoration-backend-designer') },
                { path: 'wangongkehu', component: r => require.ensure([], () => r(require('../pages/backend/designer/wangong/Index.vue')), 'decoration-backend-designer') }
              ]
            },
              {
                  path: 'stylist',
                  component: r => require.ensure([], () => r(require('../pages/backend/stylist/layouts/Default.vue')), 'decoration-backend-stylist'),
                  children: [
                      { path: '/', component: r => require.ensure([], () => r(require('../pages/backend/stylist/default/Index.vue')), 'decoration-backend-stylist') },
                      {
                          path: 'NewCustomer',
                          component: r => require.ensure([], () => r(require('../pages/backend/stylist/NewCustomer/layouts/Default.vue')), 'decoration-backend-stylist'),
                          children:[
                              { path: '/', component: r => require.ensure([], () => r(require('../pages/backend/stylist/NewCustomer/default/Index.vue')), 'decoration-backend-stylist') },
                              { path: 'cankaofangan', component: r => require.ensure([], () => r(require('../pages/backend/stylist/NewCustomer/cankaofangan/default/Index.vue')), 'decoration-backend-stylist') },
                          ]
                      },
                      {
                          path: 'dingjinkehu',
                          component: r => require.ensure([], () => r(require('../pages/backend/stylist/dingjinkehu/layouts/Default.vue')), 'decoration-backend-stylist'),
                          children:[
                              { path: '/', component: r => require.ensure([], () => r(require('../pages/backend/stylist/dingjinkehu/default/Index.vue')), 'decoration-backend-stylist') },
                              {
                                  path: 'chakanfangan',
                                  component: r => require.ensure([], () => r(require('../pages/backend/stylist/dingjinkehu/chakanfangan/layouts/Default.vue')), 'decoration-backend-stylist'),
                                  children:[
                                      { path: '/', component: r => require.ensure([], () => r(require('../pages/backend/stylist/dingjinkehu/chakanfangan/default/Index.vue')), 'decoration-backend-stylist') },
                                      { path: 'goutongrizhi', component: r => require.ensure([], () => r(require('../pages/backend/stylist/dingjinkehu/chakanfangan/goutongrizhi/default/Index.vue')), 'decoration-backend-stylist') },
                                      { path: 'collocation', component: r => require.ensure([], () => r(require('../pages/backend/stylist/dingjinkehu/chakanfangan/collocation/default/Index.vue')), 'decoration-backend-stylist') },
                                      { path: 'effect', component: r => require.ensure([], () => r(require('../pages/backend/stylist/dingjinkehu/chakanfangan/effect/default/Index.vue')), 'decoration-backend-stylist') },
                                      { path: 'shigongtu', component: r => require.ensure([], () => r(require('../pages/backend/stylist/dingjinkehu/chakanfangan/shigongtu/default/Index.vue')), 'decoration-backend-stylist') },
                                  ]
                              },
                          ]
                      },
                      {
                          path: 'daikaigong',
                          component: r => require.ensure([], () => r(require('../pages/backend/stylist/daikaigong/layouts/Default.vue')), 'decoration-backend-stylist'),
                          children:[
                              { path: '/', component: r => require.ensure([], () => r(require('../pages/backend/stylist/daikaigong/default/Index.vue')), 'decoration-backend-stylist') },
                              {
                                  path: 'chakanfangan',
                                  component: r => require.ensure([], () => r(require('../pages/backend/stylist/daikaigong/chakanfangan/layouts/Default.vue')), 'decoration-backend-stylist'),
                                  children:[
                                      { path: '/', component: r => require.ensure([], () => r(require('../pages/backend/stylist/daikaigong/chakanfangan/default/Index.vue')), 'decoration-backend-stylist') },
                                      { path: 'goutongrizhi', component: r => require.ensure([], () => r(require('../pages/backend/stylist/daikaigong/chakanfangan/goutongrizhi/default/Index.vue')), 'decoration-backend-stylist') },
                                      { path: 'collocation', component: r => require.ensure([], () => r(require('../pages/backend/stylist/daikaigong/chakanfangan/collocation/default/Index.vue')), 'decoration-backend-stylist') },
                                      { path: 'effect', component: r => require.ensure([], () => r(require('../pages/backend/stylist/daikaigong/chakanfangan/effect/default/Index.vue')), 'decoration-backend-stylist') },
                                      { path: 'shigongtu', component: r => require.ensure([], () => r(require('../pages/backend/stylist/daikaigong/chakanfangan/shigongtu/default/Index.vue')), 'decoration-backend-stylist') },
                                      { path: 'contract', component: r => require.ensure([], () => r(require('../pages/backend/stylist/daikaigong/chakanfangan/contract/default/Index.vue')), 'decoration-backend-stylist') },

                                  ]
                              },
                          ]
                      },
                      {
                          path: 'shigongzhong',
                          component: r => require.ensure([], () => r(require('../pages/backend/stylist/shigongzhong/layouts/Default.vue')), 'decoration-backend-stylist'),
                          children:[
                              { path: '/', component: r => require.ensure([], () => r(require('../pages/backend/stylist/shigongzhong/default/Index.vue')), 'decoration-backend-stylist') },
                              {
                                  path: 'chakanfangan',
                                  component: r => require.ensure([], () => r(require('../pages/backend/stylist/shigongzhong/chakanfangan/layouts/Default.vue')), 'decoration-backend-stylist'),
                                  children:[
                                      { path: '/', component: r => require.ensure([], () => r(require('../pages/backend/stylist/shigongzhong/chakanfangan/default/Index.vue')), 'decoration-backend-stylist') },
                                      { path: 'goutongrizhi', component: r => require.ensure([], () => r(require('../pages/backend/stylist/shigongzhong/chakanfangan/goutongrizhi/default/Index.vue')), 'decoration-backend-stylist') },
                                      { path: 'collocation', component: r => require.ensure([], () => r(require('../pages/backend/stylist/shigongzhong/chakanfangan/collocation/default/Index.vue')), 'decoration-backend-stylist') },
                                      { path: 'effect', component: r => require.ensure([], () => r(require('../pages/backend/stylist/shigongzhong/chakanfangan/effect/default/Index.vue')), 'decoration-backend-stylist') },
                                      { path: 'shigongtu', component: r => require.ensure([], () => r(require('../pages/backend/stylist/shigongzhong/chakanfangan/shigongtu/default/Index.vue')), 'decoration-backend-stylist') },
                                      { path: 'contract', component: r => require.ensure([], () => r(require('../pages/backend/stylist/shigongzhong/chakanfangan/contract/default/Index.vue')), 'decoration-backend-stylist') },
                                      { path: 'check', component: r => require.ensure([], () => r(require('../pages/backend/stylist/shigongzhong/chakanfangan/check/default/Index.vue')), 'decoration-backend-stylist') },

                                  ]
                              },
                          ]
                      },
                      {
                          path: 'qianzaikehu',
                          component: r => require.ensure([], () => r(require('../pages/backend/stylist/qianzaikehu/layouts/Default.vue')), 'decoration-backend-stylist'),
                          children:[
                              { path: '/', component: r => require.ensure([], () => r(require('../pages/backend/stylist/qianzaikehu/default/Index.vue')), 'decoration-backend-stylist') },
                              { path: 'cankaofangan', component: r => require.ensure([], () => r(require('../pages/backend/stylist/qianzaikehu/cankaofangan/default/Index.vue')), 'decoration-backend-stylist') },
                              {
                                  path: 'fanganjilu',
                                  component: r => require.ensure([], () => r(require('../pages/backend/stylist/qianzaikehu/fanganjilu/layouts/Default.vue')), 'decoration-backend-stylist'),
                                  children:[
                                      { path: '/', component: r => require.ensure([], () => r(require('../pages/backend/stylist/qianzaikehu/fanganjilu/default/Index.vue')), 'decoration-backend-stylist') },
                                      { path: 'add', component: r => require.ensure([], () => r(require('../pages/backend/stylist/qianzaikehu/fanganjilu/add/default/Index.vue')), 'decoration-backend-stylist') },

                                  ]

                              },

                          ]
                      },

                  ]
              },
              {
                  path: 'manager',
                  component: r => require.ensure([], () => r(require('../pages/backend/manager/layouts/Default.vue')), 'decoration-backend-manager'),
                  children: [
                      { path: '/', component: r => require.ensure([], () => r(require('../pages/backend/manager/default/Index.vue')), 'decoration-backend-manager') },
                      {
                          path: 'customer',
                          component: r => require.ensure([], () => r(require('../pages/backend/manager/customer/layouts/Default.vue')), 'decoration-backend-manager'),
                          children:[
                              { path: '/', component: r => require.ensure([], () => r(require('../pages/backend/manager/customer/default/Index.vue')), 'decoration-backend-manager') },
                              {
                                  path: 'chakanfangan',
                                  component: r => require.ensure([], () => r(require('../pages/backend/manager/customer/chakanfangan/layouts/Default.vue')), 'decoration-backend-manager'),
                                  children:[
                                      { path: '/', component: r => require.ensure([], () => r(require('../pages/backend/manager/customer/chakanfangan/default/Index.vue')), 'decoration-backend-manager') },
                                      { path: 'shigongtu', component: r => require.ensure([], () => r(require('../pages/backend/manager/customer/chakanfangan/shigongtu/default/Index.vue')), 'decoration-backend-manager') },
                                  ]

                              },
                              { path: 'paidan', component: r => require.ensure([], () => r(require('../pages/backend/manager/customer/paidan/default/Index.vue')), 'decoration-backend-manager') },
                          ]


                      },

                  ]
              },
              {
                  path: 'project',
                  component: r => require.ensure([], () => r(require('../pages/backend/project/layouts/Default.vue')), 'decoration-backend-project'),
                  children: [
                      { path: '/', component: r => require.ensure([], () => r(require('../pages/backend/project/default/Index.vue')), 'decoration-backend-project') },
                      {
                          path: 'customer',
                          component: r => require.ensure([], () => r(require('../pages/backend/project/customer/layouts/Default.vue')), 'decoration-backend-project'),
                          children:[
                              { path: '/', component: r => require.ensure([], () => r(require('../pages/backend/project/customer/default/Index.vue')), 'decoration-backend-project') },
                              { path: 'chakanfangan', component: r => require.ensure([], () => r(require('../pages/backend/project/customer/chakanfangan/default/Index.vue')), 'decoration-backend-project') },

                          ]
                      },
                      {
                          path: 'daikaigong',
                          component: r => require.ensure([], () => r(require('../pages/backend/project/daikaigong/layouts/Default.vue')), 'decoration-backend-project'),
                          children:[
                              { path: '/', component: r => require.ensure([], () => r(require('../pages/backend/project/daikaigong/default/Index.vue')), 'decoration-backend-project') },
                              {
                                  path: 'purchase',
                                  component: r => require.ensure([], () => r(require('../pages/backend/project/daikaigong/purchase/layouts/Default.vue')), 'decoration-backend-project'),
                                  children:[
                                      { path: '/', component: r => require.ensure([], () => r(require('../pages/backend/project/daikaigong/purchase/default/Index.vue')), 'decoration-backend-project') },
                                      { path: 'history', component: r => require.ensure([], () => r(require('../pages/backend/project/daikaigong/purchase/history/default/Index.vue')), 'decoration-backend-project') },

                                  ]
                              },

                          ]
                      },
                      {
                          path: 'shigongzhong',
                          component: r => require.ensure([], () => r(require('../pages/backend/project/shigongzhong/layouts/Default.vue')), 'decoration-backend-project'),
                          children:[
                              { path: '/', component: r => require.ensure([], () => r(require('../pages/backend/project/shigongzhong/default/Index.vue')), 'decoration-backend-project') },
                              {
                                  path: 'chakanfangan',
                                  component: r => require.ensure([], () => r(require('../pages/backend/project/shigongzhong/chakanfangan/layouts/Default.vue')), 'decoration-backend-project'),
                                  children:[
                                      { path: '/', component: r => require.ensure([], () => r(require('../pages/backend/project/shigongzhong/chakanfangan/default/Index.vue')), 'decoration-backend-project') },
                                      { path: 'goutongrizhi', component: r => require.ensure([], () => r(require('../pages/backend/project/shigongzhong/chakanfangan/goutongrizhi/default/Index.vue')), 'decoration-backend-project') },
                                      { path: 'collocation', component: r => require.ensure([], () => r(require('../pages/backend/project/shigongzhong/chakanfangan/collocation/default/Index.vue')), 'decoration-backend-project') },
                                      {
                                          path: 'effect',
                                          component: r => require.ensure([], () => r(require('../pages/backend/project/shigongzhong/chakanfangan/effect/layouts/Default.vue')), 'decoration-backend-project'),
                                          children:[
                                              { path: '/', component: r => require.ensure([], () => r(require('../pages/backend/project/shigongzhong/chakanfangan/collocation/default/Index.vue')), 'decoration-backend-project') },
                                              { path: 'add', component: r => require.ensure([], () => r(require('../pages/backend/project/shigongzhong/chakanfangan/effect/default/Index.vue')), 'decoration-backend-project') },

                                          ]
                                      },
                                      { path: 'shigongtu', component: r => require.ensure([], () => r(require('../pages/backend/project/shigongzhong/chakanfangan/shigongtu/default/Index.vue')), 'decoration-backend-project') },
                                      { path: 'contract', component: r => require.ensure([], () => r(require('../pages/backend/project/shigongzhong/chakanfangan/contract/default/Index.vue')), 'decoration-backend-project') },
                                      { path: 'check', component: r => require.ensure([], () => r(require('../pages/backend/project/shigongzhong/chakanfangan/check/default/Index.vue')), 'decoration-backend-project') },
                                  ]
                              },
                          ]
                      },

                  ]
              },

            {
              path: 'my',
              component: r => require.ensure([], () => r(require('../pages/backend/my/layouts/Default.vue')), 'decoration-backend-my'),
              children: [
                  { path: '/', component: r => require.ensure([], () => r(require('../pages/backend/my/default/Index.vue')), 'decoration-backend-my') },
                  { path: 'personalData', component: r => require.ensure([], () => r(require('../pages/backend/my/personalData/default/Index.vue')), 'decoration-backend-my-data') },
                  { path: 'company', component: r => require.ensure([], () => r(require('../pages/backend/my/company/default/Index.vue')), 'decoration-backend-my-data') },
              ]
            },
           {
              path: 'caiwubu',
              component: r => require.ensure([], () => r(require('../pages/backend/caiwubu/layouts/Default.vue')), 'decoration-backend-caiwubu'),
              children: [
                  { path: '/', component: r => require.ensure([], () => r(require('../pages/backend/caiwubu/default/Index.vue')), 'decoration-backend-caiwubu') },
                  {
                      path: 'gongchengkuan',
                      component: r => require.ensure([], () => r(require('../pages/backend/caiwubu/gongchengkuan/layouts/Default.vue')), 'decoration-backend-caiwubu'),
                      children:[
                          { path: '/', component: r => require.ensure([], () => r(require('../pages/backend/caiwubu/gongchengkuan/default/Index.vue')), 'decoration-backend-caiwubu-gongchengkuan') },
                          { path: 'shoudingjin', component: r => require.ensure([], () => r(require('../pages/backend/caiwubu/gongchengkuan/shoudingjin/default/Index.vue')), 'decoration-backend-caiwubu-gongchengkuan') },
                          { path: 'shigongkuang', component: r => require.ensure([], () => r(require('../pages/backend/caiwubu/gongchengkuan/shigongkuang/default/Index.vue')), 'decoration-backend-caiwubu-gongchengkuan') },
                          {
                              path: 'shoukuan',
                              component: r => require.ensure([], () => r(require('../pages/backend/caiwubu/gongchengkuan/shoukuan/layouts/Default.vue')), 'decoration-backend-caiwubu-gongchengkuan'),
                              children:[
                                  { path: '/', component: r => require.ensure([], () => r(require('../pages/backend/caiwubu/gongchengkuan/shoukuan/default/Index.vue')), 'decoration-backend-caiwubu-gongchengkuan') },
                                  {
                                      path: 'way',
                                      component: r => require.ensure([], () => r(require('../pages/backend/caiwubu/gongchengkuan/shoukuan/way/layouts/Default.vue')), 'decoration-backend-caiwubu-gongchengkuan'),
                                      children:[
                                          { path: '/', component: r => require.ensure([], () => r(require('../pages/backend/caiwubu/gongchengkuan/shoukuan/way/default/Index.vue')), 'decoration-backend-caiwubu-gongchengkuan') },
                                          {
                                              path: 'add',
                                              component: r => require.ensure([], () => r(require('../pages/backend/caiwubu/gongchengkuan/shoukuan/way/add/layouts/Default.vue')), 'decoration-backend-caiwubu-gongchengkuan'),
                                              children:[
                                                  { path: '/', component: r => require.ensure([], () => r(require('../pages/backend/caiwubu/gongchengkuan/shoukuan/way/add/default/Index.vue')), 'decoration-backend-caiwubu-gongchengkuan') },
                                                  { path: 'tocollect', component: r => require.ensure([], () => r(require('../pages/backend/caiwubu/gongchengkuan/shoukuan/way/add/tocollect/default/Index.vue')), 'decoration-backend-caiwubu-gongchengkuan') },
                                                  { path: 'paid', component: r => require.ensure([], () => r(require('../pages/backend/caiwubu/gongchengkuan/shoukuan/way/add/paid/default/Index.vue')), 'decoration-backend-caiwubu-gongchengkuan') },
                                              ]
                                          },

                                      ]
                                  },
                              ]
                          },
                      ]
                  },
                  {
                      path: 'gongyingshang',
                      component: r => require.ensure([], () => r(require('../pages/backend/caiwubu/gongyingshang/layouts/Default.vue')), 'decoration-backend-caiwubu-gongyingshang'),
                      children:[
                          { path: '/', component: r => require.ensure([], () => r(require('../pages/backend/caiwubu/gongyingshang/default/Index.vue')), 'decoration-backend-gongyingshang') },
                          { path: 'fukuan', component: r => require.ensure([], () => r(require('../pages/backend/caiwubu/gongyingshang/fukuan/default/Index.vue')), 'decoration-backend-gongyingshang') },
                          {
                              path: 'details',
                              component: r => require.ensure([], () => r(require('../pages/backend/caiwubu/gongyingshang/details/layouts/Default.vue')), 'decoration-backend-gongyingshang'),
                              children:[
                                  { path: '/', component: r => require.ensure([], () => r(require('../pages/backend/caiwubu/gongyingshang/details/default/Index.vue')), 'decoration-backend-gongyingshang') },
                                  { path: 'copy', component: r => require.ensure([], () => r(require('../pages/backend/caiwubu/gongyingshang/details/copy/default/Index.vue')), 'decoration-backend-gongyingshang') },
                              ]
                          },

                      ]
                  },
                  {
                      path: 'cailiao',
                      component: r => require.ensure([], () => r(require('../pages/backend/caiwubu/cailiao/layouts/Default.vue')), 'decoration-backend-caiwubu'),
                      children:[
                          { path: '/', component: r => require.ensure([], () => r(require('../pages/backend/caiwubu/cailiao/default/Index.vue')), 'decoration-backend-caiwubu') },
                          { path: 'fukuan', component: r => require.ensure([], () => r(require('../pages/backend/caiwubu/cailiao/fukuan/default/Index.vue')), 'decoration-backend-caiwubu-cailiao') },
                          {
                              path: 'details',
                              component: r => require.ensure([], () => r(require('../pages/backend/caiwubu/cailiao/details/layouts/Default.vue')), 'decoration-backend-cailiao'),
                              children:[
                                  { path: '/', component: r => require.ensure([], () => r(require('../pages/backend/caiwubu/cailiao/details/default/Index.vue')), 'decoration-backend-cailiao') },
                                  { path: 'copy', component: r => require.ensure([], () => r(require('../pages/backend/caiwubu/cailiao/details/copy/default/Index.vue')), 'decoration-backend-cailiao') },
                              ]
                          },

                      ]
                  },
                  {
                      path: 'pay',
                      component: r => require.ensure([], () => r(require('../pages/backend/caiwubu/pay/layouts/Default.vue')), 'decoration-backend-caiwubu'),
                      children:[
                          { path: '/', component: r => require.ensure([], () => r(require('../pages/backend/caiwubu/pay/default/Index.vue')), 'decoration-backend-caiwubu') },
                          { path: 'fukuan', component: r => require.ensure([], () => r(require('../pages/backend/caiwubu/pay/fukuan/default/Index.vue')), 'decoration-backend-caiwubu-cailiao') },
                      ]
                  },
                  { path: 'cost',
                      component: r => require.ensure([], () => r(require('../pages/backend/caiwubu/cost/layouts/Default.vue')), 'decoration-backend-cost'),
                      children:[
                          { path: '/', component: r => require.ensure([], () => r(require('../pages/backend/caiwubu/cost/default/Index.vue')), 'decoration-backend-gongyingshang') },
                          { path: 'copy', component: r => require.ensure([], () => r(require('../pages/backend/caiwubu/cost/copy/default/Index.vue')), 'decoration-backend-gongyingshang') },
                      ]
                  },


              ]
           },
          ]
       }
   ]
};



