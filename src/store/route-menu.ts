import { defineStore } from 'pinia'
import { MenuOption } from 'naive-ui'
import { RouteRecordRaw } from 'vue-router'
import { useGetLocalKey, useSetLocalKey } from '@flypeng/tool/browser'

import { VAdmireRoute } from '~/router'
import { SystemAccountInfo } from '~/requests'
import { TAB_MENU_KEY } from '~/vadmire.config'

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
  breadCrumbMenus: MenuOption[]
  tabMenuKeys: string[]
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
    breadCrumbMenus: [],
    tabMenuKeys: JSON.parse(useGetLocalKey(TAB_MENU_KEY) || '[]') as string[],
  }),
  getters: {
    vadmireMenuByFlat(state) {
      const { vadmireMenu } = state
      const vadmireMenuByFlat: MenuOption[] = []
      const flat = (menu: MenuOption[]) => {
        menu.forEach((item) => {
          vadmireMenuByFlat.push(item)
          if (item.children) flat(item.children)
        })
      }
      // @ts-ignore
      flat(vadmireMenu)
      return vadmireMenuByFlat
    },
    vadmireTabMenu(state) {
      const { tabMenuKeys } = state
      const menuByFlat = this.vadmireMenuByFlat
      const menuList: MenuOption[] = []
      // eslint-disable-next-line no-restricted-syntax
      for (const item of tabMenuKeys) {
        const tabMenu = menuByFlat.find((menu) => menu.key === item)
        if (tabMenu) menuList.push(tabMenu)
      }

      return menuList
    },
  },
  actions: {
    // create tab menu key
    createTabMenuKey(key: string) {
      if (!this.tabMenuKeys.includes(key)) {
        this.tabMenuKeys = [...this.tabMenuKeys, key]
        useSetLocalKey(TAB_MENU_KEY, JSON.stringify(this.tabMenuKeys))
      }
    },
    // remove tab menu key
    removeTabMenuKey(key: string) {
      const deleteIndex = this.tabMenuKeys.indexOf(key)
      if (deleteIndex !== -1) {
        this.tabMenuKeys.splice(deleteIndex, 1)
        useSetLocalKey(TAB_MENU_KEY, JSON.stringify(this.tabMenuKeys))
      }
    },
    // remove tab menu keys list
    removeTabMenuKeyList(existKey: string) {
      const existKeyIndex = this.tabMenuKeys.indexOf(existKey)
      if (existKeyIndex !== -1) {
        this.tabMenuKeys = [this.tabMenuKeys[existKeyIndex]]
        useSetLocalKey(TAB_MENU_KEY, JSON.stringify(this.tabMenuKeys))
      }
    },
  },
})
