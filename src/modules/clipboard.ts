import { App } from 'vue'
import Clipboard from 'v-clipboard'

export const useClipboard = (app: App) => {
  app.use(Clipboard)
}
