import { VAdmireRoute } from 'vue-router'

const filter = (routes: VAdmireRoute[], permissions: string[]) => {
  const newRoutes: VAdmireRoute[] = []
  routes.forEach((route) => {
    if (route.children && route.children.length > 0) {
      route.children = filter(route.children, permissions)
    }
    /**
     * 用户是否有权限根据 *:*:* 结构去判断
     * (* 代表任何权限， 一般第一个代表系统，第二个代表系统模块，第三个代表具体的模块业务)
     * 例如：sys:user:update： 解读为用户模块更新权限）
     */
    let isHavePermission = false
    const routePermissions = route.meta?.permissions || []
    if (routePermissions.length === 0) isHavePermission = true
    else {
      isHavePermission = routePermissions.some((item) => {
        const routePermissonList = item.split(':')
        return permissions.some((userPermission) => {
          const userPermissionList = userPermission.split(':')
          if (
            routePermissonList[0] === userPermissionList[0]
            && routePermissonList[1] === userPermissionList[1]
            && routePermissonList[2] === userPermissionList[2]
          ) return true
          return false
        })
      })
    }
    // 判断路由是否有权限，有则添加
    if (isHavePermission) {
      newRoutes.push(route)
    }
  })
  return newRoutes
}

/**
 * filter routes
 * @param routes
 * @param permissions
 * @returns
 */
export const filterRoutes = (routes: VAdmireRoute[], permissions: string[]) => {
  const filteredRoutes = filter(routes, permissions)
  return filteredRoutes
}
