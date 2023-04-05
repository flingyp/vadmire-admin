import { useGetLocalKey } from '@flypeng/tool/browser'
import { AUTH_TOKEN } from '~/vadmire.config'

export const getBaseTableData = async () => useRequest({
  url: '/feature/table',
  method: 'post',
  headers: { Authorization: useGetLocalKey(AUTH_TOKEN) },
})
