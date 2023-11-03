import { App } from 'vue';
import { usePinia } from './pinia';
import { useVueRouter } from './vue-router';
import { useI18n } from './i18n';
import { useClipboard } from './clipboard';
import { useAppProvide } from './provide';

export default async (app: App) => {
  useVueRouter(app);
  usePinia(app);
  useI18n(app);
  useClipboard(app);
  useAppProvide(app);
};
