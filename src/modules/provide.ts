import { App } from 'vue';

const { isLoading, setLoading } = useLoading(false);

/**
 * Config app provide global property
 * @param app
 */
export const useAppProvide = (app: App) => {
  app.provide('loading', {
    isLoading,
    setLoading,
    loadingText: '加载中...',
  });
};
