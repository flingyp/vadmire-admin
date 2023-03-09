import { useGetLocalKey } from '@flypeng/tool/browser'
import { THEME_MODE_KEY } from '~/vadmire.config'

// To do things when init application
export function useApp() {
  const route = useRoute()
  const { toggleDark } = useTheme()
  const vadmireConfigStore = useVAdmireConfigStore()

  // init theme mode (auto config tailwindcss class theme mode)
  toggleDark(useGetLocalKey(THEME_MODE_KEY) === 'dark')

  // listener window size change
  useMonitorWindow(([width]: [number, number]) => {
    if (width <= 768) {
      vadmireConfigStore.isCollapsedSider = true
    } else {
      vadmireConfigStore.isCollapsedSider = false
    }
  })

  // set title tag content
  watch(() => route.name, () => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    document.querySelector('title')!.innerHTML = route.meta.text
      ? `${route.meta.text} | ${vadmireConfigStore.name}` : vadmireConfigStore.name
  })
}
