import { DataTableColumns } from 'naive-ui'

export const useTable = <T>(tableColumns: DataTableColumns<T>) => {
  const headers = ref(tableColumns)

  return {
    headers,
  }
}
