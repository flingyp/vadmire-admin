import { App } from 'vue'
import { usePinia } from './pinia'
import { useVueRouter } from './vue-router'
import { useI18n } from './i18n'

export default async (app: App) => {
  useVueRouter(app)
  usePinia(app)
  useI18n(app)
}
