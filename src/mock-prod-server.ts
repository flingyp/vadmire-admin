import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'

import systemAuthModule from '../mock/system-auth'
import baseTableModule from '../mock/base-table'

export function setupProdMockServer() {
  createProdMockServer([...systemAuthModule, ...baseTableModule])
}
