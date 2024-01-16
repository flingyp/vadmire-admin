import { defineStore } from 'pinia';
import { GlobalThemeOverrides } from 'naive-ui';
import { useGetLocalKey, useRemoveLocalKey } from '@flypeng/tool/browser';
import { getDifSceneColor } from '~/utils';
import { defaultVAdmireConfig, sceneColorMap } from '~/vadmire.config';
import { AUTH_TOKEN, THEME_MODE_KEY, PRIMARY_COLOR_KEY, LOCAL_SYSTEM_KEY, DRIVER_CONFIG_KEY } from '~/common';
import { VAdmireConfig } from '~/types';

const localVAdmireConfig = { ...defaultVAdmireConfig(), ...JSON.parse(useGetLocalKey(LOCAL_SYSTEM_KEY) || '{}') };

export const useVAdmireConfigStore = defineStore('vadmireConfigStore', {
  state: (): VAdmireConfig => {
    localVAdmireConfig.primaryColor = useGetLocalKey(PRIMARY_COLOR_KEY) || sceneColorMap.primary;
    if (useGetLocalKey(THEME_MODE_KEY) !== 'dark') {
      localVAdmireConfig.themeMode = 'LIGHT';
    } else {
      localVAdmireConfig.themeMode = 'DARK';
    }
    return localVAdmireConfig;
  },
  getters: {
    naiveThemeOverrides(state): GlobalThemeOverrides {
      const primaryColorMap = getDifSceneColor(state.primaryColor, 'primary');
      const infoColorMap = getDifSceneColor(sceneColorMap.info, 'info');
      const successColorMap = getDifSceneColor(sceneColorMap.success, 'success');
      const warningColorMap = getDifSceneColor(sceneColorMap.warning, 'warning');
      const errorColorMap = getDifSceneColor(sceneColorMap.error, 'error');
      return {
        common: {
          ...primaryColorMap,
          ...infoColorMap,
          ...successColorMap,
          ...warningColorMap,
          ...errorColorMap,
        },
      };
    },
    contentContainerHeight(state): string {
      if (state.isVisibleFooter && state.isVisibleTabBar) {
        return `calc(100vh - ${state.headerHeight}px - ${state.footerHeight}px - ${state.tabBarHeight}px)`;
      }
      if (state.isVisibleFooter && !state.isVisibleTabBar) {
        return `calc(100vh - ${state.headerHeight}px - ${state.footerHeight}px)`;
      }
      if (!state.isVisibleFooter && state.isVisibleTabBar) {
        return `calc(100vh - ${state.headerHeight}px  - ${state.tabBarHeight}px)`;
      }
      return `calc(100vh - ${state.headerHeight}px`;
    },
  },
  actions: {
    // controls whether the sidebar is collapsed
    handleIsCollapsedSider() {
      this.isCollapsedSider = !this.isCollapsedSider;
    },
    // exit system logic
    async handleExitSystem() {
      const routeMenuStore = useRouteMenuStore();
      // reset variants of handling to get route and to generate route logic
      routeMenuStore.isMountedRoute = false;
      routeMenuStore.isMountedNotFoundRoute = false;
      useRemoveLocalKey(LOCAL_SYSTEM_KEY);
      useRemoveLocalKey(DRIVER_CONFIG_KEY);
      sessionStorage.removeItem(AUTH_TOKEN);
    },
  },
});
