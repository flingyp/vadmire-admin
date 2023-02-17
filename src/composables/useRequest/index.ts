import type { CreateAxiosDefaults, Method, ResponseType } from 'axios'
import axios from 'axios'

const axiosConfig: CreateAxiosDefaults = {
  baseURL: 'https://api.github.com',
  timeout: 5000,
}

const requestInstance = axios.create(axiosConfig)

// Request interceptor
requestInstance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
)

// Response interceptor
requestInstance.interceptors.response.use(
  (response) => response,
  (error) => error.response,
)

interface RequestOptions {
  url: string
  method: Method,
  params?: Record<string, unknown>
  data?: Record<string, unknown>
  responseType?: ResponseType
}

interface ResponseOptions<K = unknown> {
  status: number
  statusText: string
  data: K
}

export const useRequest = async <T = unknown> (options: RequestOptions) => {
  const {
    url, method, params, data, responseType,
  } = options

  const requestResult = await requestInstance.request<unknown, ResponseOptions<T>>({
    url,
    method,
    params,
    data,
    responseType: responseType || 'json',
  })

  return {
    status: requestResult.status,
    statusText: requestResult.statusText,
    data: requestResult.data,
  }
}
