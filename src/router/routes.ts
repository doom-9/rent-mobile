export const routes = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('@/layout/basic/index.vue'),
    children: [
      {
        path: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: 'tabbar.home',
          keepAlive: true,
        },
      },
      {
        path: 'list',
        component: () => import('@/views/list/index.vue'),
        meta: {
          title: 'tabbar.list',
          keepAlive: true,
        },
      },
      {
        path: 'member',
        component: () => import('@/views/member/index.vue'),
        meta: {
          title: 'tabbar.member',
          keepAlive: true,
        },
      },
      {
        path: 'demo',
        component: () => import('@/views/demo/index.vue'),
        meta: {
          title: 'tabbar.demo',
          keepAlive: true,
        },
      },
      {
        name: 'listDetails',
        path: '/details',
        component: () => import('@/views/list/details/index.vue'),
        meta: {
          title: 'list.details',
          border: false,
        },
      },
    ],
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '',
      keepAlive: true,
    },
  },
  {
    name: 'privacyAgreement',
    path: '/privacyAgreement',
    component: () => import('@/views/privacyAgreement/index.vue'),
    meta: {
      title: '隐私协议',
      keepAlive: true,
    },
  },
  {
    name: 'userAgreement',
    path: '/userAgreement',
    component: () => import('@/views/userAgreement/index.vue'),
    meta: {
      title: '用户协议',
      keepAlive: true,
    },
  },
  {
    name: 'findingAHouseServiceProtocol',
    path: '/findingAHouseServiceProtocol',
    component: () => import('@/views/findingAHouseServiceProtocol/index.vue'),
    meta: {
      title: '用户协议',
      keepAlive: true,
    },
  },
  {
    name: 'contract',
    path: '/contract',
    component: () => import('@/views/contract/index.vue'),
    meta: {
      title: '合同',
      keepAlive: true,
    },
  },
  {
    name: 'aboutUs',
    path: '/aboutUs',
    component: () => import('@/views/aboutUs/index.vue'),
    meta: {
      title: '关于我们',
      keepAlive: true,
    },
  },
  // 匹配不到重定向会主页
  {
    // 找不到路由重定向到404页面
    path: '/:pathMatch(.*)',
    redirect: '/Home',
  },
];

export default routes;
