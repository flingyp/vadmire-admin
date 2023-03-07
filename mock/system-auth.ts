import { MockResponse } from 'mock'
import Mock from 'mockjs'
import { MockMethod } from 'vite-plugin-mock'
import { useRandomString } from '@flypeng/tool/browser'
import { VAdmireRoute } from '~/router'
import { ASYNC_ROUTES } from '~/router/modules'
import { adminAsyncRoutes, userAsyncRoutes } from './async-routes'

const mockRandom = Mock.Random

interface AuthLoginBody {
  username: string
  password: string
}

/**
 * System auth login
 * @param username
 * @param password
 * @returns
 */
function systemAuthLogin(username: string, password: string): MockResponse<{accessToken: string} | null> {
  if (username === 'admin' && password === 'admin') {
    return {
      statusCode: 200,
      statusText: '登录成功',
      data: {
        accessToken: `admin_${useRandomString(10)}`,
      },
    }
  }
  if (username === 'user' && password === 'user') {
    return {
      statusCode: 200,
      statusText: '登录成功',
      data: {
        accessToken: `user_${useRandomString(10)}`,
      },
    }
  }
  return {
    statusCode: 500,
    statusText: '用户名或密码错误',
    data: null,
  }
}

interface SystemAccountInfo {
  id: string
  username: string
  nickname: string
  birthday: string
  roles: string[]
  permissions: string[]
}

/**
 * System account info
 * @param token
 * @returns
 */
function systemAccountInfo(token: string): MockResponse<SystemAccountInfo | null> {
  if (token.match('admin_')) {
    return {
      statusCode: 200,
      statusText: '获取用户信息成功',
      data: {
        id: mockRandom.id(),
        username: 'admin',
        nickname: '超级管理员',
        birthday: mockRandom.date(),
        roles: ['root'],
        permissions: ['sys:root:*'],
      },
    }
  }
  if (token.match('user_')) {
    return {
      statusCode: 200,
      statusText: '获取用户信息成功',
      data: {
        id: mockRandom.id(),
        username: 'user',
        nickname: '普通管理员',
        birthday: mockRandom.date(),
        roles: ['user'],
        permissions: ['sys:user:*'],
      },
    }
  }
  return {
    statusCode: 500,
    statusText: '用户不存在',
    data: null,
  }
}

/**
 * Get async routes of system account
 * @param token
 * @returns
 */
function getAsyncRoutes(token: string): MockResponse<VAdmireRoute[] | null> {
  if (token.match('admin_')) {
    return {
      statusCode: 200,
      statusText: '获取超级管理员账号路由',
      data: adminAsyncRoutes,
    }
  }
  if (token.match('user_')) {
    return {
      statusCode: 200,
      statusText: '获取普通管理员账号路由',
      data: userAsyncRoutes,
    }
  }
  return {
    statusCode: 500,
    statusText: '用户不存在',
    data: null,
  }
}

export default [
  {
    url: '/api/auth/login',
    method: 'post',
    response: ({ body }: {body: AuthLoginBody}) => systemAuthLogin(body.username, body.password),
  },
  {
    url: '/api/auth/info',
    method: 'post',
    response: ({ headers }: {headers: {authorization: string}}) => systemAccountInfo(headers.authorization),
  },
  {
    url: '/api/auth/getAsyncRoutes',
    method: 'post',
    response: ({ headers }: {headers: {authorization: string}}) => getAsyncRoutes(headers.authorization),
  },
] as MockMethod[]
