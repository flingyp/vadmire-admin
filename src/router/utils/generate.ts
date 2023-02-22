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

      // 处理子菜单
      if (handleRoute.children) {
        // 处理单一路由
        if (handleRoute.children.length === 1 && handleRoute.children[0].meta?.single) {
          // eslint-disable-next-line prefer-destructuring
          handleRoute = handleRoute.children[0]
        } else {
          menu.children = generateSystemMenu(handleRoute.children)
        }
      }

      menu.label = handleRoute.meta?.text || '默认标题'
      menu.key = handleRoute.name as string

      // 设置图标
      // if (handleRoute.meta?.icon) {
      //   menu.icon = renderIcon(handleRoute.meta.icon)
      // }

      // 外链地址
      if (route.meta?.link === 'EXTERNAL_LINK' && route.meta.url) {
        menu.link = route.meta.link
        menu.url = route.meta.url
      }

      menus.push(menu)
    }
  })
  return menus
}
