import { AnyColor, colord, Colord } from 'colord'

export const getColorInstance = (value: AnyColor | Colord) => colord(value)

export const getToHex = (value: Colord) => value.toHex()
export const isDarkColor = (value: Colord) => value.isDark()
export const isLightColor = (value: Colord) => value.isLight()

// 饱和度越高，说明颜色越深，饱和度越低，说明颜色越浅
export const toIncreaseSaturate = (color: Colord, value = 0.1) => getToHex(color.saturate(value))
export const toReduceSaturate = (color: Colord, value = 0.1) => getToHex(color.desaturate(value))

export const toLight = (color: Colord, value = 0) => getToHex(color.lighten(value))
export const toDark = (color: Colord, value = 0) => getToHex(color.darken(value))

export type ColorSceneType = '' | 'Hover' | 'Pressed' | 'Suppl'
export type ColorType = 'primary' | 'info' | 'success' | 'warning' | 'error'
export type SystemColors = `${ColorType}Color${ColorSceneType}`
export type Colors = Partial<Record<SystemColors, string>>

/**
 * 添加CSS Various 至HTML中
 */
export const addThemeCssVariousToHtml = (ThemeColors: Colors) => {
  const Keys = Object.keys(ThemeColors)
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const HtmlNode = document.querySelector('html')!
  // @ts-ignore
  Keys.forEach((key) => HtmlNode.style.setProperty(`--${key}`, ThemeColors[key]))
}

/**
 * 获取不同场景的颜色值
 * @param color
 * @param type
 */
export const getDifSceneColor = (color: string, type: ColorType) => {
  const SceneList: ColorSceneType[] = ['', 'Hover', 'Pressed', 'Suppl']
  const SceneColorMap: Colors = {}
  SceneList.forEach((scene) => {
    const ColorKey: SystemColors = `${type}Color${scene}`
    if (scene === '') SceneColorMap[ColorKey] = color
    const ColordInstance = getColorInstance(color)
    if (scene === 'Hover') SceneColorMap[ColorKey] = toReduceSaturate(ColordInstance, 0.3)
    if (scene === 'Pressed') SceneColorMap[ColorKey] = toIncreaseSaturate(ColordInstance, 0.5)
    if (scene === 'Suppl') SceneColorMap[ColorKey] = toIncreaseSaturate(ColordInstance, 0.5)
  })
  addThemeCssVariousToHtml(SceneColorMap)
  return SceneColorMap
}
