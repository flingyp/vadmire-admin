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
const {
  isLoading, tableData, pagination, getTableData,
} = useTable<PersonInfo[]>()

// basic table columns list
const baseTableColumns: Array<DataTableColumn> = [
  {
    title: '序号',
    key: 'id',
  },
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

const getData = async () => getTableData(() => getBaseTableData({
  page: pagination.value.page ?? 1,
  size: pagination.value.pageSize ?? 15,
}))

// onChange method
pagination.value.onChange = async (page: number) => {
  pagination.value.page = page
  await getData()
}

// onUpdatePageSize method
pagination.value.onUpdatePageSize = async (pageSize: number) => {
  pagination.value.pageSize = pageSize
  await getData()
}

onMounted(async () => {
  const { total } = await getData()
  pagination.value.pageCount = total
})
</script>

<template>
  <div>
    <BaseTable
      size="small"
      :loading="isLoading"
      :headers="baseTableColumns"
      :data="tableData"
      :pagination="pagination"
    />
  </div>
</template>
