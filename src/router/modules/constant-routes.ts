import { VAdmireRoute } from '..'

export const CONSTANT_ROUTES: VAdmireRoute[] = [
  {
    path: '/about',
    name: 'SystemAbout',
    component: 'Layout',
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
    path: '/common',
    name: 'CommonPage',
    component: 'Layout',
    meta: {
      text: '常用页面',
      icon: 'cib:creative-commons-share',
    },
    children: [
      {
        path: '404',
        name: 'Common_NotFound',
        component: '~/views/common/NotFound.vue',
        meta: {
          text: '404',
          icon: 'tabler:error-404',
        },
      },
      {
        path: '500',
        name: 'Common_ServerDown',
        component: '~/views/common/ServerDown.vue',
        meta: {
          text: '500',
          icon: 'la:500px',
        },
      },
    ],
  },
  {
    path: '/',
    name: 'Home',
    redirect: '/about',
    meta: {
      isShow: false,
    },
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
    component: '~/views/common/NotFound.vue',
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
