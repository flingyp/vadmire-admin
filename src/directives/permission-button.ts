import { App, DirectiveBinding } from 'vue'

export default (app: App) => {
  app.directive('permission', (el: HTMLElement, binding: DirectiveBinding<string | string[]>) => {
    const routeMenuStore = useRouteMenuStore()
    const accountPermissionList = routeMenuStore.account.permissions
    const buttonPermissionList = typeof binding.value === 'string' ? [binding.value] : binding.value
    const isHavePermission = buttonPermissionList.every((permission) => {
      if (accountPermissionList.includes(permission)) return true
      return false
    })
    if (!isHavePermission) {
      el.classList.add('cursor-not-allowed', 'pointer-events-none', 'hidden')
    }
  })
}
