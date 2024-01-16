import { HandleRouteForm } from '~/types';

// system login route name
export const LOGIN_ROUTE_NAME = 'SystemAuth';

// not found 404 route name
export const NOT_FOUND_404_ROUTE_NAME = 'SystemNotFound';

// system home route name
export const SYSTEM_HOME_ROUTE_NAME = 'SystemAboutIndex';

// system white routes list
export const WHITE_ROUTE_LIST: string[] = [LOGIN_ROUTE_NAME];

// system handle route form
export const HANDLE_ROUTE_FORM: HandleRouteForm = 'SERVER';

// session storage auth token key
export const AUTH_TOKEN = 'AUTH_TOKEN';

// local storage tab menu key
export const TAB_MENU_KEY = 'TAB_MENU_KEY';

// local theme mode key
export const THEME_MODE_KEY = 'vueuse-color-scheme';

// local primary color key
export const PRIMARY_COLOR_KEY = 'PRIMARY_COLOR_KEY';

// local system config key
export const LOCAL_SYSTEM_KEY = 'LOCAL_SYSTEM_KEY';

// local reload content key
export const IS_RELOAD_CONTENT = 'IS_RELOAD_CONTENT';

// driver.js plugin config key
export const DRIVER_CONFIG_KEY = 'IS_DRIVER_CONFIG';
