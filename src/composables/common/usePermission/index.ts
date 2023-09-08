export const usePermission = (permissionKeys: string[]) => {
  const routeMenuStore = useRouteMenuStore()
  const { account } = storeToRefs(routeMenuStore)
  const accountPermissionList = account.value.permissions
  const isHavePermission = permissionKeys.every((permission) => {
    if (accountPermissionList.includes(permission)) return true
    return false
  })
  return isHavePermission
}
