<script setup lang="ts">
import { DataTableColumns } from 'naive-ui'

type TableSize = 'small' | 'medium' | 'large'

interface BaseTableProps {
  headers: DataTableColumns<any>
  data: Array<any>

  border?: boolean // 表格有无边框
  singleColumn?: boolean // 表格有无行分割线
  singleLine?: boolean // 表格有无列分割线
  size?: TableSize // 表格尺寸大小
  striped?: boolean // 表格条纹渲染
  maxHeight?: number // 表格最大高度
}

withDefaults(defineProps<BaseTableProps>(), {
  border: true,
  singleColumn: false,
  singleLine: false,
  size: 'medium',
  striped: true,
  maxHeight: undefined,
})
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
    />
  </div>
</template>
