import { useDeepClone } from '@flypeng/tool/browser'
import { RouteRecordRaw, RouteRecordRedirectOption } from 'vue-router'
import { VAdmireRoute } from '..'
import Container_Layout from '~/layout/basic/Container_Layout.vue'
import Not_Found from '~/views/404.vue'

const systemViews = import.meta.glob('../../views/**/*.vue')

/**
 * get component: () => import('xx/xx.vue')
 * @param component
 * @returns
 */
export const getViewComponent = (component: string) => {
  const keyPath = component.replace('~/', '../../')
  return systemViews[keyPath]
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
  const vroute: RouteRecordRaw = {
    path: route.path,
    name: route.name,
    meta: route.meta,
    component: (route.component && getViewComponent(route.component)) || Not_Found,
    redirect: route.redirect as RouteRecordRedirectOption,
    children: [],
  }

  if (route.children) {
    vroute.children = vadmireRouteToRouteRecordRaw(route.children)
  }

  if (route.component === 'Layout') {
    vroute.component = Container_Layout
  }

  return vroute
}
