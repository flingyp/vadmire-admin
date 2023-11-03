import { App } from 'vue';
import { router } from '~/router';

export const useVueRouter = (app: App) => {
  app.use(router);
};
