import { useDeepClone } from '@flypeng/tool/browser'
import { RouteRecordRaw, RouteRecordRedirectOption, VAdmireRoute } from 'vue-router'

import NotFound from '~/views/common/NotFound.vue'
import ContainerLayout from '~/layout/basic/ContainerLayout.vue'
import SingleIframe from '~/components/common/SingleIframe.vue'

const systemViews = import.meta.glob('../../**/*.vue')

/**
 * Judge whether slash start
 * @param value
 * @returns
 */
const isSlashStart = (value: string) => /^\//g.test(value)

/**
 * Get component absoulte path
 * @param component
 * @returns
 */
export const getViewComponent = (component: string) => {
  const keyPath = component.replace('~/', '../../')
  return systemViews[keyPath]
}

/**
 * Judge route whether over two layer (multilevel route)
 * @param route
 */
export const isMultilevelRoute = (route: VAdmireRoute): boolean => {
  let flag = false
  if (route.children && route.children.length > 0) {
    // It is multilevel route when child route have children route list
    flag = route.children.some((childRoute) => {
      if (childRoute.children && childRoute.children.length > 0) return true
    })
  }
  return flag
}

/**
 * Extract the child routes of all multi-level routes
 * @param route
 * @returns
 */
const extractSubRoute = (route: VAdmireRoute, path = route.path): VAdmireRoute[] => {
  let subrouteList: VAdmireRoute[] = []
  if (route.children) {
    route.children.forEach((item) => {
      const childPath = `${path}/${item.path}`
      if (!item.children || item.children.length === 0) {
        item.path = childPath
        subrouteList.push(item)
      } else {
        subrouteList = [...subrouteList, ...extractSubRoute(item, childPath)]
      }
    })
  }
  return subrouteList
}

/**
 * Extract the parent routes of all multi-level routes
 * @param route
 * @returns
 */
const extractMultilevelRoute = (route: VAdmireRoute, path = route.path): VAdmireRoute[] => {
  let multilevelRouteList: VAdmireRoute[] = []
  multilevelRouteList.push(route)
  route.children?.forEach((item) => {
    if (item.children) {
      item.path = `${path}/${item.path}`
      multilevelRouteList = [...multilevelRouteList, ...extractMultilevelRoute(item)]
    }
  })
  return multilevelRouteList
}

/**
 * Handle multilevel route
 * @param route
 * @returns
 */
export const handleMultilevelRoute = (route: VAdmireRoute): VAdmireRoute => {
  const multilevelRoute: VAdmireRoute = useDeepClone(route)

  const subRouteList = extractSubRoute(multilevelRoute)
  const parentRouteList = extractMultilevelRoute(multilevelRoute)

  const parentVAdmireRouteList = parentRouteList.map((parentRoute) => {
    const vadmireRoute: VAdmireRoute = {
      path: '',
      redirect: '',
      name: '',
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const firstChildRoute = parentRoute.children![0]

    vadmireRoute.path = isSlashStart(parentRoute.path) ? `${parentRoute.path}` : `/${parentRoute.path}`
    vadmireRoute.redirect = `${firstChildRoute.path}`
    vadmireRoute.name = parentRoute.name
    vadmireRoute.meta = parentRoute.meta

    return vadmireRoute
  })

  const subRouteVAdmireRouteList = subRouteList.map((childRoute) => {
    const vadmireRoute: VAdmireRoute = {
      path: '',
      component: '',
      name: '',
    }

    vadmireRoute.path = childRoute.path
    vadmireRoute.component = childRoute.component
    vadmireRoute.name = childRoute.name
    vadmireRoute.meta = childRoute.meta

    return vadmireRoute
  })

  const parentRoute: VAdmireRoute = parentRouteList[0]
  parentRoute.component = 'Layout'
  parentRoute.children = [...subRouteVAdmireRouteList, ...parentVAdmireRouteList]

  return parentRoute
}

/**
 * VAdmireRoute[] => RouteRecordRaw[]
 * @param routes
 * @returns
 */
export const vadmireRouteToRouteRecordRaw = (routes: VAdmireRoute[]): RouteRecordRaw[] => {
  const vadmireRoutes: VAdmireRoute[] = useDeepClone(routes)
  const vrouterRoutes: RouteRecordRaw[] = []

  vadmireRoutes.forEach((route) => {
    // eslint-disable-next-line no-use-before-define
    vrouterRoutes.push(transform(route))
  })

  return vrouterRoutes
}

/**
 * VAdmireRoute => RouteRecordRaw
 * @param route
 * @returns
 */
export const transform = (route: VAdmireRoute): RouteRecordRaw => {
  let vroute: RouteRecordRaw = {
    path: route.path,
    name: route.name,
    meta: route.meta,
    component: (route.component && getViewComponent(route.component)) || NotFound,
    redirect: route.redirect as RouteRecordRedirectOption,
    children: [],
  }
  /**
   * 1. 先判断是不是多级菜单
   *  1.1 如果是则按照多级菜单的形式处理路由（将所有子路由全部抽离出来变成二级路由，多级菜单的父路由全部重定向到自己的第一个子路由上）
   *  1.2 如果不是则按照二级菜单的形式处理路由
   */
  if (!isMultilevelRoute(route)) {
    vroute.children = vadmireRouteToRouteRecordRaw(route.children || [])
  } else {
    /**
     * children route declare to two level route
     * parent route of multilevel route redirect to first child route
     */
    const multilevelVAdmireRoutes = handleMultilevelRoute(route)
    const multilevelVRoutes = transform(multilevelVAdmireRoutes)
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    multilevelVRoutes.children = vadmireRouteToRouteRecordRaw(multilevelVAdmireRoutes.children!)
    vroute = multilevelVRoutes
  }

  if (route.component === 'Layout') {
    vroute.component = ContainerLayout
  }

  // inner link to use iframe
  if (route.meta?.link && route.meta.link === 'INTERNAL_LINK') {
    vroute.component = SingleIframe
  }

  return vroute
}
