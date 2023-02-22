import { useCommonType, useGetLocalKey } from '@flypeng/tool/browser'
import { NavigationGuardNext, RouteLocationNormalized, Router } from 'vue-router'
import { authTokenKey, whiteRouteList } from '~/vadmire.config'

const routeGenerateMenuProcess = async () => {
  // 1. get user info
  const getAuthInfo = await useRequest({
    url: '/auth/info',
    method: 'POST',
    headers: { Authorization: useGetLocalKey(authTokenKey) },
  })
  console.log(getAuthInfo)

  // 2. get VAdmireRoute type route

  // 3. transform RouteRecordRaw tye route

  // 4. generate meun

  // 5. mount async route

  // 6. initial state store
}

export default async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
  routeInstance: Router,
) => {
  const localAuthToken = useGetLocalKey(authTokenKey)

  // local have auth token case
  if (!useCommonType.isNull(localAuthToken)) {
    console.log('from->', from)
    console.log('to->', to)

    await routeGenerateMenuProcess()
    if (from.name === 'System_Auth' && to.name !== 'System_Auth') {
      // go to route from login page and the route is not login page
      // next({ path: to.fullPath, replace: true })

    } else if (useCommonType.isUndefined(from.name) && to.name !== 'System_Auth') {
      // it isn't from login page and isn't go to login page (refresh page case)
      // next({ path: to.fullPath, replace: true })
    } else if (to.name === 'System_Auth') {
      // want to jump to the login page manually
      next({ name: 'System_Home' })
    }
    next()
  } else {
    // check whether white list is configured
    const isAccess = whiteRouteList.includes(to.name as string)
    // release if configured, otherwise it will go to the login page
    isAccess ? next() : next({ name: 'System_Auth' })
  }
}
