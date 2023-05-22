import { PaginationProps } from 'naive-ui'

export const useTable = <T>() => {
  const isLoading = ref(false)
  const tableData = ref<T>()

  // :pagination="pagination" on Table page of src\views\feature\base-table.vue and show type error
  // const pagination: Ref<PaginationProps> solves ts type error
  const pagination: Ref<PaginationProps> = ref({
    page: 1,
    pageSize: 20,
    pageSizes: [5, 10, 15, 20, 30],
    pageCount: 10,
    showSizePicker: true,
    showQuickJumper: true,
    // (onChange | onUpdatePageSize) custom method
  })

  // get table data method
  const getTableData = async (callback: Function) => {
    isLoading.value = true

    const { data } = await callback() as { data: any }

    tableData.value = data.list

    isLoading.value = false

    return data
  }

  return {
    isLoading,
    pagination,
    tableData,

    getTableData,
  }
}
