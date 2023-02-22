import { MockResponse } from 'mock'
import Mock from 'mockjs'
import { MockMethod } from 'vite-plugin-mock'
import { useRandomString } from '@flypeng/tool/browser'

const mockRandom = Mock.Random

interface AuthLoginBody {
  username: string
  password: string
}

/**
 * System Auth Login
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

interface SystemUserInfo {
  id: string
  username: string
  nickname: string
  birthday: string
  roles: string[]
  permissions: string[]
}

function systemUserInfo(token: string): MockResponse<SystemUserInfo | null> {
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

export default [
  {
    url: '/api/auth/login',
    method: 'post',
    response: ({ body }: {body: AuthLoginBody}) => systemAuthLogin(body.username, body.password),
  },
  {
    url: '/api/auth/info',
    method: 'post',
    response: ({ headers }: {headers: {authorization: string}}) => systemUserInfo(headers.authorization),
  },
] as MockMethod[]