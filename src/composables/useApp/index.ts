import { useGetLocalKey } from '@flypeng/tool/browser'
import { THEME_MODE_KEY } from '~/vadmire.config'

// To do things when init application
export function useApp() {
  const { t } = useI18n()
  const route = useRoute()
  const { toggleDark } = useTheme()
  const vadmireConfigStore = useVAdmireConfigStore()
  const { name, isCollapsedSider, defaultLocales } = storeToRefs(vadmireConfigStore)

  // init theme mode (auto config tailwindcss class theme mode)
  toggleDark(useGetLocalKey(THEME_MODE_KEY) === 'dark')

  // listener window size change
  useMonitorWindow(([width]: [number, number]) => {
    if (width <= 768) {
      isCollapsedSider.value = true
    } else {
      isCollapsedSider.value = false
    }
  })

  // TODO: 国际化文本代码抽离优化
  const setHtmlTitle = () => {
    const internationalReg = /^\$t\(['"]([^']+)['"]\)$/
    let menuText = route.meta.text || ''
    if (internationalReg.test(menuText)) {
      const key = menuText.match(internationalReg)?.[1]
      key && (menuText = t(key))
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    document.querySelector('title')!.innerHTML = menuText
      ? `${menuText} | ${name.value}` : name.value
  }

  // set title tag content
  watch(defaultLocales, setHtmlTitle)
  watch(() => route.name, setHtmlTitle)
}
