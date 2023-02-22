import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'

import systemAuthModule from '../mock/system-auth'

export function setupProdMockServer() {
  createProdMockServer([...systemAuthModule])
}
