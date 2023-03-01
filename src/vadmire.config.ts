export type ThemeMode = 'LIGHT' | 'DARK'
export type LayoutMode = 'TOP_MENU' | 'SIDER_MENU' | 'SIDER_MIX_MENU'
export type HandleRouteForm = 'WEB' | 'SERVER'
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
  isCollapsedSiderWidth: number
}

// default vadmireConfigStore initial config
export function defindVAdmireConfig(): VAdmireConfig {
  return {
    name: 'VAdmire Admin',
    themeMode: 'LIGHT',
    layoutMode: 'SIDER_MENU',
    primaryColor: '#0071bc',
    isScaleDrawer: true,
    isCollapsedSider: false,
    headerHeight: 64,
    footerHeight: 64,
    siderWidth: 272,
    isCollapsedSiderWidth: 60,
  }
}

// system white routes list
export const whiteRouteList: string[] = ['SystemAuth']

// system handle route form
export const handleRouteForm: HandleRouteForm = 'WEB'

// local storage key list
export const AUTH_TOKEN = 'AUTH_TOKEN'

// local storage tab menu key list
export const TAB_MENU_KEY = 'TAB_MENU_KEY'
