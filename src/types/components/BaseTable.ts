import { DataTableColumn, PaginationProps, VAdmireTableSize } from 'naive-ui'
import { RowData } from 'naive-ui/es/data-table/src/interface'

export interface BaseTableProps {
  headers: Array<DataTableColumn>
  data: RowData[]
  border?: boolean // 表格有无边框
  singleColumn?: boolean // 表格有无行分割线
  singleLine?: boolean // 表格有无列分割线
  size?: VAdmireTableSize // 表格尺寸大小
  striped?: boolean // 表格条纹渲染
  maxHeight?: number // 表格最大高度
  minHeight?: number // 表格最小高度
  loading?: boolean // 表格加载状态
  pagination?: PaginationProps // 表格分页
  rowKey?: string // 表格行选中所绑定的Key
  searchValue?: string // 搜索框关键词
  scrollX?: number // 表格横向宽度
  isEnableVirtualScroll?: boolean // 是否开启虚拟滚动
}
