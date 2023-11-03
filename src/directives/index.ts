import { App } from 'vue';

import permissionDirective from './permission';

export default async (app: App) => {
  permissionDirective(app);
};
