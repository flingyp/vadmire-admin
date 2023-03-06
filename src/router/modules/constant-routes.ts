import { VAdmireRoute } from '..'

export const CONSTANT_ROUTES: VAdmireRoute[] = [
  {
    path: '/about',
    name: 'SystemAbout',
    component: 'Layout',
    meta: {
      text: '关于页面',
      icon: 'mdi:about-variant',
    },
    children: [
      {
        path: '',
        name: 'SystemAboutIndex',
        component: '~/views/SystemAbout.vue',
        meta: {
          text: '关于',
          icon: 'mdi:about-variant',
          single: true,
        },
      },
    ],
  },
  {
    path: '/login',
    name: 'SystemAuth',
    component: '~/views/auth/SystemAuth.vue',
    meta: {
      isShow: false,
    },
  },
  {
    path: '/404',
    name: 'SystemNotFound',
    component: '~/views/404.vue',
    meta: {
      isShow: false,
    },
  },
  {
    path: '/demo',
    name: 'SystemDemo',
    component: 'Layout',
    meta: {
      text: 'Demo页面',
      isShow: true,
      icon: 'arcticons:democracy',
    },
    children: [
      {
        path: '',
        name: 'SystemDemoMain',
        component: '~/views/Demo.vue',
        meta: {
          text: 'Demo',
          icon: 'material-symbols:workspace-premium-outline',
          single: true,
        },
      },
    ],
  },
  {
    path: '/',
    name: 'Home',
    redirect: '/demo',
    meta: {
      isShow: false,
    },
  },
  {
    path: '/layout',
    name: 'LayoutHome',
    component: 'Layout',
    meta: {
      isShow: false,
    },
  },
  {
    path: '/block/demo1',
    name: 'BlockDemo-1',
    component: '~/views/block/demo1.vue',
    meta: {
      isShow: false,
    },
  },
  {
    path: '/block/demo2',
    name: 'BlockDemo-2',
    component: '~/views/block/demo2.vue',
    meta: {
      isShow: false,
    },
  },
]

export const MATCH_404_ROUTES: VAdmireRoute = {
  path: '/:catchAll(.*)',
  redirect: '/404',
  name: 'Match_404',
  meta: {
    isShow: false,
  },
}
