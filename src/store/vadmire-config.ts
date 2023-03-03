import { defineStore } from 'pinia'
import { GlobalThemeOverrides } from 'naive-ui'
import { useGetLocalKey, useRemoveLocalKey } from '@flypeng/tool/browser'
import { getDifSceneColor } from '~/utils'
import {
  VAdmireConfig, defaultVAdmireConfig, AUTH_TOKEN,
  THEME_MODE_KEY, sceneColorMap, PRIMARY_COLOR_KEY, LOCAL_SYSTEM_KEY,
} from '~/vadmire.config'

const localConfig = JSON.parse(
  useGetLocalKey(LOCAL_SYSTEM_KEY)
  || JSON.stringify(defaultVAdmireConfig()),
) as VAdmireConfig

const localVAdmireConfig = localConfig

export const useVAdmireConfigStore = defineStore('vadmireConfigStore', {
  state: (): VAdmireConfig => {
    localVAdmireConfig.primaryColor = useGetLocalKey(PRIMARY_COLOR_KEY) || sceneColorMap.primary
    if (useGetLocalKey(THEME_MODE_KEY) !== 'dark') {
      localVAdmireConfig.themeMode = 'LIGHT'
    } else {
      localVAdmireConfig.themeMode = 'DARK'
    }
    return localVAdmireConfig
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
    contentContainerHeight(state): string {
      return `calc(100vh - ${state.headerHeight}px - ${state.footerHeight}px - ${state.tabBarHeight}px)`
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
