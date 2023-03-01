import { defineStore } from 'pinia'
import { useGetLocalKey, useRemoveLocalKey } from '@flypeng/tool/browser'
import {
  VAdmireConfig, defindVAdmireConfig, AUTH_TOKEN, THEME_MODE_KEY,
} from '~/vadmire.config'

const defaultVAdmireConfig = defindVAdmireConfig()

export const useVAdmireConfigStore = defineStore('vadmireConfigStore', {
  state: (): VAdmireConfig => {
    if (useGetLocalKey(THEME_MODE_KEY) !== 'dark') {
      defaultVAdmireConfig.themeMode = 'LIGHT'
    } else {
      defaultVAdmireConfig.themeMode = 'DARK'
    }
    return defaultVAdmireConfig
  },
  actions: {
    // controls whether the sidebar is collapsed
    handleIsCollapsedSider() {
      this.isCollapsedSider = !this.isCollapsedSider
    },
    // exit system logic
    async handleExitSystem() {
      useRemoveLocalKey(AUTH_TOKEN)
    },
  },
})
