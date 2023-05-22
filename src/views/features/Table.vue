<script setup lang="ts">
import { DataTableColumn, NButton, useMessage } from 'naive-ui'
import BaseTable from '~/components/common/BaseTable.vue'
import { getBaseTableData } from '~/requests'

interface PersonInfo {
  name: string
  birthday: string
  address: string
  postalCode: string
  sex: string
}

const message = useMessage()

// basic table columns list
const baseTableColumns: Array<DataTableColumn> = [
  {
    title: '名称',
    key: 'name',
  },
  {
    title: '性别',
    key: 'sex',
  },
  {
    title: '出生日期',
    key: 'birthday',
    align: 'center',
  },
  {
    title: '家庭住址',
    key: 'address',
    align: 'center',
  },
  {
    title: '邮政编码',
    key: 'postalCode',
    align: 'center',
  },
  {
    title: '操作',
    key: 'action',
    align: 'center',
    render(row) {
      return [
        h(
          NButton,
          {
            type: 'primary',
            tertiary: true,
            size: 'small',
            style: {
              marginRight: '8px',
            },
            onClick: () => {
              message.success(`点击更新： ${row.name}`)
            },
          },
          {
            default: () => '更新',
          },
        ),
        h(
          NButton,
          {
            type: 'error',
            tertiary: true,
            size: 'small',
            onClick: () => {
              message.error(`点击删除： ${row.name}`)
            },
          },
          {
            default: () => '删除',
          },
        ),
      ]
    },
  },
]

const { tableData, getTableData } = useTable<PersonInfo[]>()
await getTableData(getBaseTableData)
</script>

<template>
  <div>
    <BaseTable
      size="small"
      :headers="baseTableColumns"
      :data="tableData"
    />
  </div>
</template>
