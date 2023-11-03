import { App, DirectiveBinding } from 'vue';

export default (app: App) => {
  app.directive('permission', (el: HTMLElement, binding: DirectiveBinding<string | string[]>) => {
    const { account } = storeToRefs(useRouteMenuStore());
    const accountPermissionList = account.value.permissions;
    const permissionList = typeof binding.value === 'string' ? [binding.value] : binding.value;
    const isHavePermission = permissionList.every((permission) => {
      if (accountPermissionList.includes(permission)) return true;
      return false;
    });
    if (!isHavePermission) {
      el.classList.add('cursor-not-allowed', 'pointer-events-none', 'hidden');
    }
  });
};
