import { useCommonType, useDeepClone } from '@flypeng/tool/browser'
import { MenuOption } from 'naive-ui'
import { VAdmireRoute } from '../types'

/**
 * Generate system menu
 * @param routes
 * @returns
 */
export const generateSystemMenu = (routes: VAdmireRoute[]): MenuOption[] => {
  const menus: MenuOption[] = []

  for (let i = 0; i < routes.length; i++) {
    const route = routes[i]
    const { meta } = route

    if (useCommonType.isUndefined(meta?.isShow) || meta?.isShow === true) {
      const menu: MenuOption = {}
      let handleRoute = useDeepClone(route) as VAdmireRoute

      if (handleRoute.children && handleRoute.children.length > 0) {
        if (handleRoute.children.length === 1 && handleRoute.children[0].meta?.single) { // single route
          // eslint-disable-next-line prefer-destructuring
          handleRoute = handleRoute.children[0]
        } else {
          menu.children = generateSystemMenu(handleRoute.children)
        }
      }
      menu.label = handleRoute.meta?.text || '默认标题'
      menu.sort = handleRoute.meta?.sort || 0
      menu.key = handleRoute.name
      if (handleRoute.meta?.icon) {
        menu.iconLabel = handleRoute.meta.icon
        menu.icon = useRenderIcon(handleRoute.meta.icon)
      }

      if (handleRoute.meta?.link === 'EXTERNAL_LINK' && handleRoute.meta.url) {
        menu.link = handleRoute.meta.link
        menu.url = handleRoute.meta.url
      }

      menus.push(menu)
    }
  }
  return menus
}

/**
 * Sort system menu
 * @param menus
 * @returns
 */
export const sortSystemMenu = (menus: MenuOption[]): MenuOption[] => {
  const sortMenus = useDeepClone(menus) as MenuOption[]
  sortMenus.forEach((menu) => {
    if (menu.children && menu.children.length > 0) {
      menu.children = sortSystemMenu(menu.children)
    }
  })
  return sortMenus.sort((a, b) => ((a.sort as number) - (b.sort as number)))
}
