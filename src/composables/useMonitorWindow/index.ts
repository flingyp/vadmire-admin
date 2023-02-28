import { useWindowSize } from '@vueuse/core'
import { useThrottle } from '@flypeng/tool/browser'

const { width, height } = useWindowSize()

export function useMonitorWindow(callback: Function) {
  watch([width, height], useThrottle(callback, 800))
}
