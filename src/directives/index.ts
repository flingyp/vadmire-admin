import { App } from 'vue'

import permissionDirective from './permission-button'

export default async (app: App) => {
  permissionDirective(app)
}
