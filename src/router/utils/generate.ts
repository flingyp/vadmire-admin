import { useDeepClone } from '@flypeng/tool/browser'
import { MenuOption } from 'naive-ui'
import { RouteRecordRaw } from 'vue-router'

/**
 * generate system menu
 * @param routes
 * @returns
 */
export const generateSystemMenu = (routes: RouteRecordRaw[]): MenuOption[] => {
  const menus: MenuOption[] = []
  routes.forEach((route) => {
    if (route.meta?.isShow === undefined || route.meta.isShow === true) {
      const menu: MenuOption = {}
      let handleRoute = useDeepClone(route) as RouteRecordRaw

      // handle children menu
      if (handleRoute.children && handleRoute.children.length !== 0) {
        if (handleRoute.children.length === 1 && handleRoute.children[0].meta?.single) { // single route case
          // eslint-disable-next-line prefer-destructuring
          handleRoute = handleRoute.children[0]
        } else { // pultiple routes case
          menu.children = generateSystemMenu(handleRoute.children)
        }
      }

      menu.label = handleRoute.meta?.text || '默认标题'
      menu.key = handleRoute.name as string

      // set menu icon
      menu.iconLabel = handleRoute.meta?.icon
      if (handleRoute.meta?.icon) {
        menu.icon = useRenderIcon(handleRoute.meta.icon)
      }

      // set external link
      if (route.meta?.link === 'EXTERNAL_LINK' && route.meta.url) {
        menu.link = route.meta.link
        menu.url = route.meta.url
      }

      menus.push(menu)
    }
  })
  return menus
}
