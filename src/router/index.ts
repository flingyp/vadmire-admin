import nprogress from 'nprogress'
import { createRouter, createWebHashHistory } from 'vue-router'
import globalRouteGuardProcess from './global-route-guard'
import { vadmireRouteToRouteRecordRaw } from './utils'
import { CONSTANT_ROUTES } from './modules'

export const router = createRouter({
  routes: vadmireRouteToRouteRecordRaw(CONSTANT_ROUTES),
  strict: true,
  history: createWebHashHistory(),
})

nprogress.configure({ easing: 'ease', speed: 500, trickle: false })

router.beforeEach(async (to, from, next) => {
  nprogress.start()
  await globalRouteGuardProcess(to, from, next, router)
})

router.afterEach(async () => {
  nprogress.done()
})

export * from './types'
