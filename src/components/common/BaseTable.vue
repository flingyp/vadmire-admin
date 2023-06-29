<script setup lang="ts">
import { RowData } from 'naive-ui/es/data-table/src/interface'
import { BaseTableProps } from '~/types'

defineOptions({ name: 'BaseTable' })

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
defineEmits(['checkedRowKeys'])

const virtualScroll = computed(() => {
  if (props.isEnableVirtualScroll && props.maxHeight) return true
  return false
})

const selectedRowKeys = (row: RowData) => row.id
</script>

<template>
  <div>
    <slot name="search" />
    <slot name="handle" />
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
