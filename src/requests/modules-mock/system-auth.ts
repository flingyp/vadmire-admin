import { useGetLocalKey } from '@flypeng/tool/browser'
import { AUTH_TOKEN } from '~/vadmire.config'
import { VAdmireRoute } from '~/router'

/**
 * System auth login
 * @param signInModeldata
 * @returns
 */
export interface SignInModelData {
  username: string
  password: string
}
export const getSignInAuthToken = async (signInModeldata: SignInModelData) => {
  const { username, password } = signInModeldata
  return useRequest<{accessToken: string}>({
    url: '/auth/login',
    method: 'POST',
    data: {
      username,
      password,
    },
  })
}

/**
 * System account info
 */
export interface SystemAccountInfo {
  id: string
  username: string
  nickname: string
  birthday: string
  roles: string[]
  permissions: string[]
}
export const getSystemAccountInfo = async () => useRequest<SystemAccountInfo>({
  url: '/auth/info',
  method: 'POST',
  headers: { Authorization: useGetLocalKey(AUTH_TOKEN) },
})

/**
 * Get async routes of system account
 * @returns
 */
export const getSystemAccountAsyncRoutes = async () => useRequest<VAdmireRoute[]>({
  url: '/auth/getAsyncRoutes',
  method: 'POST',
  headers: { Authorization: useGetLocalKey(AUTH_TOKEN) },
})
