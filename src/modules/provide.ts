import { App } from 'vue'

/**
 * Config app provide global property
 * @param app
 */
export const useAppProvide = (app: App) => {
  const { isLoading, setLoading } = useLoading(false)
  app.provide('loading', {
    isLoading,
    setLoading,
    loadingText: '加载中...',
  })
}
