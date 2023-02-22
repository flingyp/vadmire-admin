import { VAdmireRoute } from '..'

export const CONSTANT_ROUTES: VAdmireRoute[] = [
  {
    path: '/login',
    name: 'System_Auth',
    component: '~/views/auth/System_Auth.vue',
    meta: {
      isShow: false,
    },
  },
  {
    path: '/404',
    name: 'System_NotFound',
    component: '~/views/404.vue',
    meta: {
      isShow: false,
    },
  },
  {
    path: '/demo',
    name: 'System_Demo',
    component: '~/views/Demo.vue',
    meta: {
      text: 'Demo页面',
      isShow: true,
    },
  },
  {
    path: '/layout',
    name: 'Layout_Home',
    component: 'Layout',
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
