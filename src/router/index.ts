import nprogress from 'nprogress'
import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '',
    name: 'System_Home',
    redirect: '/layout',
  },
  {
    path: '/login',
    name: 'System_Auth',
    component: () => import('~/views/auth/System_Auth.vue'),
  },
  {
    path: '/layout',
    name: 'Layout_Home',
    component: () => import('~/layout/Layout_Home.vue'),
  },
]

export const router = createRouter({
  routes,
  strict: true,
  history: createWebHashHistory(),
})

nprogress.configure({ easing: 'ease', speed: 500, trickle: false })

router.beforeEach(async (to, from, next) => {
  nprogress.start()
  next()
})

router.afterEach(async () => {
  nprogress.done()
})

export * from './types/vadmire-route'
