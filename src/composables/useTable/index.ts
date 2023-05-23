import { PaginationProps } from 'naive-ui'
import XLSX from 'xlsx'

export const useTable = <T>() => {
  const isLoading = ref(false)
  const tableData = ref<T[]>()

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

  // export table data to excel file
  const exportExcel = (sheetName: string, fileName: string, headerName?: string[], sourceData?: unknown[]) => {
    isLoading.value = true

    let worksheet: XLSX.WorkSheet

    sourceData ? (worksheet = XLSX.utils.json_to_sheet(sourceData))
      : (worksheet = XLSX.utils.json_to_sheet(tableData.value ?? []))

    const workbook = XLSX.utils.book_new()

    headerName && XLSX.utils.sheet_add_aoa(worksheet, [headerName], { origin: 'A1' })

    XLSX.utils.book_append_sheet(workbook, worksheet, sheetName ?? 'Sheet1')

    XLSX.writeFile(workbook, `${fileName}.xlsx`, { compression: true })

    isLoading.value = false
  }

  return {
    isLoading,
    pagination,
    tableData,

    getTableData,
    exportExcel,
  }
}
