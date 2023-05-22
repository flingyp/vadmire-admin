export const useTable = <T>() => {
  const tableData = ref<T>()

  // get table data method
  const getTableData = async (callback: Function) => {
    const { data } = await callback() as { data: T }
    tableData.value = data
    return data
  }

  return {
    tableData,

    getTableData,
  }
}
