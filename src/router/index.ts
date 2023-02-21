import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'system-login',
    component: () => import('~/views/auth/System_Auth.vue'),
  },
]

export const router = createRouter({
  routes,
  strict: true,
  history: createWebHashHistory(),
})
