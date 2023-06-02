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
    headers: { Authorization: sessionStorage.getItem(AUTH_TOKEN) },
  })
}
