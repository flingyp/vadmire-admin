import { useGetLocalKey } from '@flypeng/tool/browser'
import { AUTH_TOKEN } from '~/vadmire.config'

/**
 * 用户登录
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
 * 获取用户信息
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
