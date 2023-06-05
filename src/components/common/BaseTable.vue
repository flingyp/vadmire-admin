<script setup lang="ts">
import { DataTableColumn, PaginationProps } from 'naive-ui'
import { RowData } from 'naive-ui/es/data-table/src/interface'

type TableSize = 'small' | 'medium' | 'large'

interface BaseTableProps {
  headers: Array<DataTableColumn>
  data: any
  border?: boolean // 表格有无边框
  singleColumn?: boolean // 表格有无行分割线
  singleLine?: boolean // 表格有无列分割线
  size?: TableSize // 表格尺寸大小
  striped?: boolean // 表格条纹渲染
  maxHeight?: number // 表格最大高度
  loading?: boolean // 表格加载状态
  pagination?: PaginationProps // 表格分页
  rowKey?: string // 表格行选中所绑定的Key
}

defineOptions({ name: 'BaseTable' })

withDefaults(defineProps<BaseTableProps>(), {
  border: true,
  singleColumn: false,
  singleLine: false,
  size: 'medium',
  striped: true,
  maxHeight: undefined,
  loading: false,
  pagination: undefined,
  rowKey: 'id',
})

defineEmits(['checkedRowKeys'])

const selectedRowKeys = (row: RowData) => row.id
</script>

<template>
  <div>
    <NDataTable
      :columns="headers"
      :data="data"
      :bordered="border"
      :single-column="singleColumn"
      :single-line="singleLine"
      :size="size"
      :striped="striped"
      :max-height="maxHeight"
      :loading="loading"
      :pagination="pagination"
      :remote="true"
      :paginate-single-page="true"
      :row-key="selectedRowKeys"
      @update-checked-row-keys="$emit('checkedRowKeys', $event)"
    />
  </div>
</template>
