import { App } from 'vue'
import { createPinia } from 'pinia'

export const usePinia = (app: App) => {
  app.use(createPinia())
}
