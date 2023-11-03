import nprogress from 'nprogress';
import { createRouter, createWebHashHistory } from 'vue-router';

import { CONSTANT_ROUTES } from './modules';
import { vadmireRouteToRouteRecordRaw } from './utils';
import globalRouteGuardProcess from './global-route-guard';

nprogress.configure({
  easing: 'ease',
  speed: 500,
  trickle: false,
  showSpinner: false,
});

const router = createRouter({
  routes: vadmireRouteToRouteRecordRaw(CONSTANT_ROUTES),
  strict: true,
  history: createWebHashHistory(),
});

router.beforeEach(async (to, from, next) => {
  nprogress.start();
  await globalRouteGuardProcess(to, from, next, router);
});

router.afterEach(async () => {
  nprogress.done();
});

export { router };
