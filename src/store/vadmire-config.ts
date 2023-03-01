import { defineStore } from 'pinia'
import { useGetLocalKey, useRemoveLocalKey } from '@flypeng/tool/browser'
import { GlobalThemeOverrides } from 'naive-ui'
import {
  VAdmireConfig, defindVAdmireConfig, AUTH_TOKEN, THEME_MODE_KEY, sceneColorMap, PRIMARY_COLOR_KEY,
} from '~/vadmire.config'
import { getDifSceneColor } from '~/utils'

const defaultVAdmireConfig = defindVAdmireConfig()

export const useVAdmireConfigStore = defineStore('vadmireConfigStore', {
  state: (): VAdmireConfig => {
    defaultVAdmireConfig.primaryColor = useGetLocalKey(PRIMARY_COLOR_KEY) || sceneColorMap.primary
    if (useGetLocalKey(THEME_MODE_KEY) !== 'dark') {
      defaultVAdmireConfig.themeMode = 'LIGHT'
    } else {
      defaultVAdmireConfig.themeMode = 'DARK'
    }
    return defaultVAdmireConfig
  },
  getters: {
    naiveThemeOverrides(state): GlobalThemeOverrides {
      const primaryColorMap = getDifSceneColor(state.primaryColor, 'primary')
      const infoColorMap = getDifSceneColor(sceneColorMap.info, 'info')
      const successColorMap = getDifSceneColor(sceneColorMap.success, 'success')
      const warningColorMap = getDifSceneColor(sceneColorMap.warning, 'warning')
      const errorColorMap = getDifSceneColor(sceneColorMap.error, 'error')
      return {
        common: {
          ...primaryColorMap,
          ...infoColorMap,
          ...successColorMap,
          ...warningColorMap,
          ...errorColorMap,
        },
      }
    },
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
