export const adminAsyncRoutes = [
  {
    path: '/permission',
    name: 'Permission',
    component: 'Layout',
    meta: {
      text: '权限测试',
      icon: 'arcticons:permission-pilot',
    },
    children: [
      {
        path: 'role',
        name: 'PermissionRole',
        component: '~/views/permission/PermissionRoot.vue',
        meta: {
          text: '超级管理员',
          permissions: ['sys:root:*'],
          icon: 'fluent-mdl2:permissions',
        },
      },
      {
        path: 'button',
        name: 'PermissionButton',
        component: '~/views/permission/PermissionButton.vue',
        meta: {
          text: '按钮权限指令',
          icon: 'arcticons:permissionchecker',
        },
      },
    ],
  },
]

export const userAsyncRoutes = [
  {
    path: '/permission',
    name: 'Permission',
    component: 'Layout',
    meta: {
      text: '权限测试',
      icon: 'arcticons:permission-pilot',
    },
    children: [
      {
        path: 'user',
        name: 'PermissionUser',
        component: '~/views/permission/PermissionUser.vue',
        meta: {
          text: '普通管理员',
          permissions: ['sys:user:*'],
          icon: 'icon-park-outline:permissions',
        },
      },
      {
        path: 'button',
        name: 'PermissionButton',
        component: '~/views/permission/PermissionButton.vue',
        meta: {
          text: '按钮权限指令',
          icon: 'arcticons:permissionchecker',
        },
      },
    ],
  },
]
