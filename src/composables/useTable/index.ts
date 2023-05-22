export const useTable = <T>() => {
  const isLoading = ref(false)
  const tableData = ref<T>()

  // get table data method
  const getTableData = async (callback: Function) => {
    isLoading.value = true

    const { data } = await callback() as { data: T }
    tableData.value = data

    isLoading.value = false

    return data
  }

  return {
    isLoading,
    tableData,

    getTableData,
  }
}
