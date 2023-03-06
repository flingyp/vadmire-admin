import { useGetLocalKey } from '@flypeng/tool/browser'
import { THEME_MODE_KEY } from '~/vadmire.config'

// To do things when init application
export function useApp() {
  const vadmireConfigStore = useVAdmireConfigStore()
  const { toggleDark } = useTheme()

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
}
