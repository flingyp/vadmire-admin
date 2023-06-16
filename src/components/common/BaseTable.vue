<script setup lang="ts">
import { DataTableColumn, PaginationProps } from 'naive-ui'
import { RowData } from 'naive-ui/es/data-table/src/interface'
import BaseTableHandle from './BaseTableHandle.vue'

type TableSize = 'small' | 'medium' | 'large'

defineOptions({ name: 'BaseTable' })

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
  searchValue?: string
}

const props = withDefaults(defineProps<BaseTableProps>(), {
  border: true,
  singleColumn: false,
  singleLine: false,
  size: 'medium',
  striped: true,
  maxHeight: undefined,
  loading: false,
  pagination: undefined,
  rowKey: 'id',
  searchValue: '',
})

const emit = defineEmits(['checkedRowKeys', 'update:searchValue', 'addData', 'exportExcel', 'search'])

const selectedRowKeys = (row: RowData) => row.id

const tableSearchValue = ref(props.searchValue)
watch(tableSearchValue, (value) => emit('update:searchValue', value))
const baseTableHandleAddData = () => emit('addData')
const baseTableHandleExportFile = () => emit('exportExcel')
const baseTableHandleSearch = () => emit('search')
</script>

<template>
  <div>
    <div class="mb-4 flex items-center justify-end space-x-1">
      <BaseTableHandle
        v-model:value="tableSearchValue"
        @add="baseTableHandleAddData"
        @export="baseTableHandleExportFile"
        @search="baseTableHandleSearch"
      />
    </div>
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
