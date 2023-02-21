export type ThemeMode = 'LIGHT' | 'DARK'
export type LayoutMode = 'TOP_MENU' | 'SIDER_MENU' | 'SIDER_MIX_MENU'
export interface VAdmireConfig {
  name: string
  themeMode: ThemeMode
  layoutMode: LayoutMode
  primaryColor: string
  isScaleDrawer: boolean
  isScaleMenu: boolean
  headerHeight: number
  footerHeight: number
  siderWidth: number
}

// default vadmireStore initial config
export function defindVAdmireConfig(): VAdmireConfig {
  return {
    name: 'VAdmire Admin',
    themeMode: 'LIGHT',
    layoutMode: 'SIDER_MIX_MENU',
    primaryColor: '#0071bc',
    isScaleDrawer: true,
    isScaleMenu: true,
    headerHeight: 64,
    footerHeight: 64,
    siderWidth: 240,
  }
}

// system white routes list
export const whiteRouteList: string[] = []

// system handle route form
export type HandleRouteForm = 'WEB' | 'SERVER'
export const handleRouteForm: HandleRouteForm = 'WEB'
