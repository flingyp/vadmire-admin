import { VAdmireRoute } from '..'

export const ASYNC_ROUTES: VAdmireRoute[] = [
  {
    path: '/permission',
    name: 'Permission',
    component: 'Layout',
    meta: {
      text: '权限测试',
    },
    children: [
      {
        path: 'user',
        name: 'Permission_User',
        component: '~/views/permission/Permission_User.vue',
        meta: {
          text: '普通管理员',
          permissions: ['sys:user:*'],
        },
      },
      {
        path: 'role',
        name: 'Permission_Role',
        component: '~/views/permission/Permission_Root.vue',
        meta: {
          text: '超级管理员',
          permissions: ['sys:root:*'],
        },
      },
      {
        path: 'button',
        name: 'Permission_Button',
        component: '~/views/permission/Permission_Button.vue',
        meta: {
          text: '按钮权限指令',
        },
      },
    ],

  },
]
