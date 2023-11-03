import { VAdmireRoute } from 'vue-router';
import { AUTH_TOKEN } from '~/vadmire.config';

/**
 * System auth login
 * @param signInModelData
 * @returns
 */
export interface SignInModelData {
  username: string;
  password: string;
}
export const getSignInAuthToken = async (signInModelData: SignInModelData) => {
  const { username, password } = signInModelData;
  return useRequest<{ accessToken: string }>({
    url: '/auth/login',
    method: 'POST',
    data: {
      username,
      password,
    },
  });
};

/**
 * System account info
 */
export interface SystemAccountInfo {
  id: string;
  username: string;
  nickname: string;
  birthday: string;
  roles: string[];
  permissions: string[];
}
export const getSystemAccountInfo = async () =>
  useRequest<SystemAccountInfo>({
    url: '/auth/info',
    method: 'POST',
    headers: { Authorization: sessionStorage.getItem(AUTH_TOKEN) },
  });

/**
 * Get async routes of system account
 * @returns
 */
export const getSystemAccountAsyncRoutes = async () =>
  useRequest<VAdmireRoute[]>({
    url: '/auth/getAsyncRoutes',
    method: 'POST',
    headers: { Authorization: sessionStorage.getItem(AUTH_TOKEN) },
  });
