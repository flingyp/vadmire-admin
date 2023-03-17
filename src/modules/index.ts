import { App } from 'vue'
import { usePinia } from './pinia'
import { useVueRouter } from './vue-router'

export default async (app: App) => {
  useVueRouter(app)
  usePinia(app)
}
