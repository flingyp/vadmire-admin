<script setup lang="ts">
import { DataTableColumn, PaginationProps, VAdmireTableSize } from 'naive-ui'
import { RowData } from 'naive-ui/es/data-table/src/interface'
import BaseTableHandle from './BaseTableHandle.vue'

defineOptions({ name: 'BaseTable' })

interface BaseTableProps {
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

const props = withDefaults(defineProps<BaseTableProps>(), {
  border: true,
  singleColumn: false,
  singleLine: false,
  size: 'medium',
  striped: true,
  maxHeight: undefined,
  minHeight: undefined,
  loading: false,
  pagination: undefined,
  rowKey: 'id',
  searchValue: '',
  scrollX: undefined,
  isEnableVirtualScroll: false,
})

const virtualScroll = computed(() => {
  if (props.isEnableVirtualScroll && props.maxHeight) return true
  return false
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
      :min-height="minHeight"
      :loading="loading"
      :pagination="pagination"
      :remote="true"
      :paginate-single-page="true"
      :row-key="selectedRowKeys"
      :scroll-x="scrollX"
      :virtual-scroll="virtualScroll"
      @update-checked-row-keys="$emit('checkedRowKeys', $event)"
    />
  </div>
</template>
