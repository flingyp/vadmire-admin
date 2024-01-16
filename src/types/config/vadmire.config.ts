export type ThemeMode = 'LIGHT' | 'DARK';
export type LayoutMode = 'TOP_MENU' | 'SIDER_MENU' | 'SIDER_MIX_MENU';
export type HandleRouteForm = 'WEB' | 'SERVER';
export type Locales = 'zh_CN' | 'en_US' | 'ko_KR';

export interface VAdmireConfig {
  name: string;
  themeMode: ThemeMode;
  layoutMode: LayoutMode;
  primaryColor: string;
  isScaleDrawer: boolean;
  isCollapsedSider: boolean;
  headerHeight: number;
  footerHeight: number;
  siderWidth: number;
  tabBarHeight: number;
  isCollapsedSiderWidth: number;
  pageTransition: string;
  fixedTabBar: boolean;
  isVisibleTabBar: boolean;
  isVisibleFooter: boolean;
  isOpenDeployReload: boolean;
  defaultLocales: Locales;
}
