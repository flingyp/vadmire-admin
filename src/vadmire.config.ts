import { ColorType } from './utils'

export type ThemeMode = 'LIGHT' | 'DARK'
export type LayoutMode = 'TOP_MENU' | 'SIDER_MENU' | 'SIDER_MIX_MENU'
export type HandleRouteForm = 'WEB' | 'SERVER'

// different scene color
export const sceneColorMap: Record<ColorType, string> = {
  primary: '#0071bc',
  info: '#687FFF',
  success: '#61D132',
  warning: '#FFA500',
  error: '#FF4838',
}

export interface VAdmireConfig {
  name: string
  themeMode: ThemeMode
  layoutMode: LayoutMode
  primaryColor: string
  isScaleDrawer: boolean
  isCollapsedSider: boolean
  headerHeight: number
  footerHeight: number
  siderWidth: number
  tabBarHeight: number
  isCollapsedSiderWidth: number
  pageTransition: string
  fixedTabBar: boolean
  isVisibleFooter: boolean
}

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
    tabBarHeight: 45,
    isCollapsedSiderWidth: 60,
    pageTransition: 'fade',
    fixedTabBar: false,
    isVisibleFooter: true,
  }
}

// system white routes list
export const whiteRouteList: string[] = ['SystemAuth']

// system handle route form
export const handleRouteForm: HandleRouteForm = 'SERVER'

// 404 page redirect to the page config
export const redirect404RouteName = 'SystemAboutIndex'

// local storage auth token key
export const AUTH_TOKEN = 'AUTH_TOKEN'

// local storage tab menu key
export const TAB_MENU_KEY = 'TAB_MENU_KEY'

// local theme mode key
export const THEME_MODE_KEY = 'vueuse-color-scheme'

// local primary color key
export const PRIMARY_COLOR_KEY = 'PRIMARY_COLOR_KEY'

// local system config key
export const LOCAL_SYSTEM_KEY = 'LOCAL_SYSTEM_KEY'

// local reload content key
export const IS_RELOAD_CONTENT = 'IS_RELOAD_CONTENT'

// driver.js plugin config key
export const DRIVER_CONFIG_KEY = 'IS_DRIVER_CONFIG'
