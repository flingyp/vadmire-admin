import { useCommonType, useDeepClone, useGetLocalKey } from '@flypeng/tool/browser'
import { NavigationGuardNext, RouteLocationNormalized, Router } from 'vue-router'
import { Store } from 'pinia'
import { authTokenKey, whiteRouteList, handleRouteForm } from '~/vadmire.config'
import { getSystemAccountInfo } from '~/requests'
import { ASYNC_ROUTES, CONSTANT_ROUTES, MATCH_404_ROUTES } from './modules'
import {
  filterRoutes, vadmireRouteToRouteRecordRaw, generateSystemMenu, mountRoute, transform,
} from './utils'
import { VAdmireRoute } from './types'
import { RouteMenuStore, useRouteMenuStore } from '~/store'

const routeGenerateMenuProcess = async (
  routerInstance: Router,
  routeMenuStore: Store<'routeMenuStore', RouteMenuStore, {}, {}>,
) => {
  // 1. get account info
  const { data: systemAccountInfo } = await getSystemAccountInfo()
  const permissions: string[] = systemAccountInfo.permissions || []

  // 2. filter VAdmireRoute async route
  const asyncRoutes = useDeepClone(ASYNC_ROUTES)
  let filterAsyncRoutes: VAdmireRoute[] = []
  if (handleRouteForm === 'WEB') {
    filterAsyncRoutes = filterRoutes(asyncRoutes, permissions)
    console.log('filterAsyncRoutes->', filterAsyncRoutes)
  } else if (handleRouteForm === 'SERVER') {
    console.log('SERVER')
  }

  // 3. transform route list of VAdmireRoute[] to route of RouteRecordRaw[]
  const vrouterAsyncRoutes = vadmireRouteToRouteRecordRaw(filterAsyncRoutes)
  const vrouterConstantRoutes = vadmireRouteToRouteRecordRaw(CONSTANT_ROUTES)

  console.log('vrouterAsyncRoutes->', vrouterAsyncRoutes)
  console.log('vrouterConstantRoutes->', vrouterConstantRoutes)

  // 4. generate meun
  const vadmireMenu = generateSystemMenu([...vrouterConstantRoutes, ...vrouterAsyncRoutes])
  console.log('vadmireMenu->', vadmireMenu)

  // 5. mount async route
  vrouterAsyncRoutes.forEach((route) => {
    if (route.meta?.link === 'EXTERNAL_LINK') return
    mountRoute(route, routerInstance)
  })

  // 6. initial state store
  routeMenuStore.account = systemAccountInfo
  routeMenuStore.vadmireConstantRoutes = CONSTANT_ROUTES
  routeMenuStore.vadmireAsyncRoutes = filterAsyncRoutes
  // @ts-ignore
  routeMenuStore.vadmireMenu = vadmireMenu
  routeMenuStore.vrouterConstantRoutes = vrouterConstantRoutes
  routeMenuStore.vrouterAsyncRoutes = vrouterAsyncRoutes
}

export default async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
  routeInstance: Router,
) => {
  const routeMenuStore = useRouteMenuStore()

  const localAuthToken = useGetLocalKey(authTokenKey)

  // local have auth token case
  if (!useCommonType.isNull(localAuthToken)) {
    if (from.name === 'SystemAuth' && to.name !== 'SystemAuth') {
      // 1. go to route from login page and the route is not login page
      if (!routeMenuStore.isMountedRoute) {
        await routeGenerateMenuProcess(routeInstance, routeMenuStore)
        routeMenuStore.isMountedRoute = true
        next({ path: to.fullPath, replace: true })
      }
    } else if (useCommonType.isUndefined(from.name) && to.name !== 'SystemAuth') {
      // 2. it isn't from login page and isn't go to login page (refresh page case)
      if (!routeMenuStore.isMountedRoute) {
        await routeGenerateMenuProcess(routeInstance, routeMenuStore)
        routeMenuStore.isMountedRoute = true
        next({ path: to.fullPath, replace: true })
      }
    } else if (to.name === 'SystemAuth') {
      // 3. want to jump to the login page manually
      next({ name: 'LayoutHome' })
    }

    // mount not found common route
    if (!routeMenuStore.isMountedNotFoundRoute) {
      mountRoute(transform(MATCH_404_ROUTES), routeInstance)
      routeMenuStore.isMountedNotFoundRoute = true
    }

    next()
  } else {
    // check whether white list is configured
    const isAccess = whiteRouteList.includes(to.name as string)
    // release if configured, otherwise it will go to the login page
    isAccess ? next() : next({ name: 'SystemAuth' })
  }
}
