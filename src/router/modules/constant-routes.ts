import { VAdmireRoute } from '..'

export const CONSTANT_ROUTES: VAdmireRoute[] = [
  {
    path: '/about',
    name: 'SystemAbout',
    component: 'Layout',
    children: [
      {
        path: '',
        name: 'SystemAboutIndex',
        component: '~/views/SystemAbout.vue',
        meta: {
          text: '关于',
          icon: 'mdi:about-variant',
          single: true,
        },
      },
    ],
  },
  {
    path: '/common',
    name: 'CommonPage',
    component: 'Layout',
    meta: {
      text: '常用页面',
      icon: 'cib:creative-commons-share',
    },
    children: [
      {
        path: '404',
        name: 'Common_NotFound',
        component: '~/views/common/NotFound.vue',
        meta: {
          text: '404',
          icon: 'tabler:error-404',
        },
      },
      {
        path: '500',
        name: 'Common_ServerDown',
        component: '~/views/common/ServerDown.vue',
        meta: {
          text: '500',
          icon: 'la:500px',
        },
      },
      {
        path: 'naiveUIComponent',
        name: 'Common_NaiveUIComponent',
        component: '~/views/common/NaiveUIComponent.vue',
        meta: {
          text: '组件',
          icon: 'bxs:component',
        },
      },
    ],
  },
  {
    path: '/feature',
    name: 'Feature',
    component: 'Layout',
    meta: {
      text: '常用功能',
      icon: 'mdi:feature-highlight',
    },
    children: [
      {
        path: 'icon',
        name: 'Feature_Icon',
        component: '~/views/features/Icons.vue',
        meta: {
          text: 'Iconify图标',
          icon: 'line-md:iconify1',
        },
      },
      {
        path: 'permission',
        name: 'Feature_Permission',
        component: '~/views/features/Permissions.vue',
        meta: {
          text: '系统权限控制',
          icon: 'arcticons:permissionchecker',
        },
      },
      {
        path: 'wangEditor',
        name: 'Feature_WangEditor',
        component: '~/views/features/WangEditor.vue',
        meta: {
          text: '富文本编辑器',
          icon: 'icon-park-outline:editor',
        },
      },
      {
        path: 'vditor',
        name: 'Feature_Vditor',
        component: '~/views/features/Vditor.vue',
        meta: {
          text: 'Markdown编辑器',
          icon: 'bi:markdown',
        },
      },
      {
        path: 'echarts',
        name: 'Feature_Echarts',
        component: '~/views/features/Echarts.vue',
        meta: {
          text: 'Echarts图表',
          icon: 'et:piechart',
        },
      },
      {
        path: 'xgPlayer',
        name: 'Feature_XGPlayer',
        component: '~/views/features/XGPlayer.vue',
        meta: {
          text: '西瓜播放器',
          icon: 'carbon:data-player',
        },
      },
      {
        path: 'table',
        name: 'Feature_Table',
        component: '~/views/features/Table.vue',
        meta: {
          text: '基础表格',
          icon: 'ic:outline-table-view',
        },
      },
    ],
  },
  {
    path: '/docs',
    name: 'Feature_Docs',
    component: 'Layout',
    meta: {
      text: '文档',
      icon: 'iconoir:google-docs',
    },
    children: [
      {
        path: 'vue',
        name: 'Feature_Docs_Vue',
        meta: {
          text: 'Vue',
          icon: 'vscode-icons:file-type-vue',
          url: 'https://cn.vuejs.org',
          link: 'INTERNAL_LINK',
        },
      },
      {
        path: 'tailwindcss',
        name: 'Feature_TailwindCSS',
        meta: {
          text: 'TailwindCSS',
          icon: 'logos:tailwindcss-icon',
          url: 'https://www.tailwindcss.cn',
          link: 'INTERNAL_LINK',
        },
      },
      {
        path: 'naive-ui',
        name: 'Feature_Docs_NaiveUI',
        meta: {
          text: 'NaiveUI',
          icon: 'logos:naiveui',
          url: 'https://www.naiveui.com',
          link: 'INTERNAL_LINK',
        },
      },
      {
        path: 'vite',
        name: 'Feature_Docs_Vite',
        meta: {
          text: 'Vite (外链)',
          icon: 'vscode-icons:file-type-vite',
          url: 'https://cn.vitejs.dev',
          link: 'EXTERNAL_LINK',
        },
      },
    ],
  },
  {
    path: '/level-1',
    name: 'Level-1',
    component: 'Layout',
    meta: {
      text: '多级菜单',
      icon: 'mdi:feature-highlight',
    },
    children: [
      {
        path: 'level-2-1',
        name: 'Level-1_Level-2-1',
        component: '~/views/level/Level-2-1.vue',
        meta: {
          text: 'Level-2-1',
        },
      },
      {
        path: 'level-2-2',
        name: 'Level-1_Level-2-2',
        meta: {
          text: 'Level-2-2',
        },
        children: [
          {
            path: 'level-3-1',
            name: 'Level-1_Level-2-2_Level-3-1',
            component: '~/views/level/Level-3-1.vue',
            meta: {
              text: 'Level-3-1',
            },
          },
          {
            path: 'level-3-3',
            name: 'Level-1_Level-2-2_Level-3-3',
            meta: {
              text: 'Level-3-3',
            },
            children: [
              {
                path: 'level-4-1',
                name: 'Level-1_Level-2-2_Level-3-3_Level-4-1',
                component: '~/views/level/Level-4-1.vue',
                meta: {
                  text: 'Level-4-1',
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: '/',
    name: 'Home',
    redirect: '/about',
    meta: {
      isShow: false,
    },
  },
  {
    path: '/login',
    name: 'SystemAuth',
    component: '~/views/auth/SystemAuth.vue',
    meta: {
      text: 'SystemAuth',
      isShow: false,
    },
  },
  {
    path: '/404',
    name: 'SystemNotFound',
    component: '~/views/common/NotFound.vue',
    meta: {
      text: '404',
      isShow: false,
    },
  },
]

export const MATCH_404_ROUTES: VAdmireRoute = {
  path: '/:catchAll(.*)',
  redirect: '/404',
  name: 'Match_404',
  meta: {
    isShow: false,
  },
}
