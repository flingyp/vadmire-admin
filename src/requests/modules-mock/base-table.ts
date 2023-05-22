import { useGetLocalKey } from '@flypeng/tool/browser'
import { AUTH_TOKEN } from '~/vadmire.config'

interface TableParams {
  page: number
  size: number
}

export const getBaseTableData = async (params: TableParams) => {
  const { page, size } = params
  return useRequest({
    url: '/feature/table',
    method: 'post',
    data: {
      page,
      size,
    },
    headers: { Authorization: useGetLocalKey(AUTH_TOKEN) },
  })
}
