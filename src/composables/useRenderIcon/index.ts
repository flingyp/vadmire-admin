import { Icon } from '@iconify/vue'

/**
 * unplugin-icons not support async components so to use Icon component
 * from @iconify/vue to realize async import of icon
 * issue: https://github.com/antfu/unplugin-icons/issues/5
 */
export function useRenderIcon(icon: string) {
  return () => h(Icon, { icon })
}
