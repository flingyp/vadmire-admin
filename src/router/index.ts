import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = []

export const router = createRouter({
  routes,
  strict: true,
  history: createWebHashHistory(),
})
