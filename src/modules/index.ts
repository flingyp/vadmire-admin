import { App } from 'vue'
import { usePinia } from './pinia'
import { useVueI18n } from './vue-i18n'
import { useVueRouter } from './vue-router'

export default async (app: App) => {
  useVueRouter(app)
  useVueI18n(app)
  usePinia(app)
}
