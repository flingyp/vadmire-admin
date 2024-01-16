import type { VAdmireConfig } from './types';
import type { ColorType } from './utils';

// different scene color
export const sceneColorMap: Record<ColorType, string> = {
  primary: '#03a9f4',
  info: '#687FFF',
  success: '#61D132',
  warning: '#FFA500',
  error: '#FF4838',
};

// default vadmireConfigStore initial config
export function defaultVAdmireConfig(): VAdmireConfig {
  return {
    name: 'VAdmire Admin',
    themeMode: 'LIGHT',
    layoutMode: 'SIDER_MENU',
    primaryColor: sceneColorMap.primary,
    isScaleDrawer: false,
    isCollapsedSider: false,
    headerHeight: 64,
    footerHeight: 64,
    siderWidth: 272,
    tabBarHeight: 40,
    isCollapsedSiderWidth: 60,
    pageTransition: 'fade',
    fixedTabBar: false,
    isVisibleTabBar: true,
    isVisibleFooter: true,
    isOpenDeployReload: true,
    defaultLocales: 'zh_CN',
  };
}
