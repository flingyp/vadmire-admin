import { MenuOption } from 'naive-ui'
import { defineStore } from 'pinia'
import { RouteRecordRaw } from 'vue-router'
import { SystemAccountInfo } from '~/requests'
import { VAdmireRoute } from '~/router'

export interface RouteMenuStore {
  account: SystemAccountInfo
  isMountedRoute: boolean
  isMountedNotFoundRoute: boolean
  isReloadView: boolean
  vadmireConstantRoutes: VAdmireRoute[]
  vadmireAsyncRoutes: VAdmireRoute[]
  vadmireMenu: MenuOption[]
  vrouterConstantRoutes: RouteRecordRaw[]
  vrouterAsyncRoutes: RouteRecordRaw[]
}

export const useRouteMenuStore = defineStore('routeMenuStore', {
  state: (): RouteMenuStore => ({
    account: {
      id: '',
      username: '',
      nickname: '',
      birthday: '',
      roles: [],
      permissions: [],
    },
    isMountedNotFoundRoute: false,
    isMountedRoute: false,
    isReloadView: false,
    vadmireConstantRoutes: [],
    vadmireAsyncRoutes: [],
    vadmireMenu: [],
    vrouterConstantRoutes: [],
    vrouterAsyncRoutes: [],
  }),
})
