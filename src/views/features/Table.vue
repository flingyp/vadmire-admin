<script setup lang="ts">
import { DataTableColumn, NButton } from 'naive-ui'
import BaseTable from '~/components/common/BaseTable.vue'
import BaseTableHandle from '~/components/common/BaseTableHandle.vue'
import { getBaseTableData } from '~/requests'

interface PersonInfo {
  name: string
  birthday: string
  address: string
  postalCode: string
  sex: string
}

const { success, error, info } = useNaiveMessage()

// search input bind value
const searchValue = ref('')

const {
  isLoading, tableData, pagination,
  getTableData, exportExcel,
} = useTable<PersonInfo>()

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
              success(`点击更新： ${row.name}`)
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
              error(`点击删除： ${row.name}`)
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

// export table data to excel file
const exportFile = () => {
  const sourceData = tableData.value?.map((item) => ({
    name: item.name,
    birthday: item.birthday,
    address: item.address,
    postalCode: item.postalCode,
    sex: item.sex,
  }))

  exportExcel('Sheet1', '基础表格文件', ['名称', '出生日期', '家庭住址', '邮政编码', '性别'], sourceData)
}

// add table data
const addTableData = () => {
  info('点击新增')
}

onMounted(async () => {
  const { total } = await getData()
  pagination.value.pageCount = total
})
</script>

<template>
  <div>
    <div class="mb-4 flex items-center space-x-1">
      <BaseTableHandle
        v-model:search-value="searchValue"
        @add="addTableData"
        @export="exportFile"
      />
      {{ searchValue }}
    </div>
    <BaseTable
      size="small"
      :loading="isLoading"
      :headers="baseTableColumns"
      :data="tableData"
      :pagination="pagination"
    />
  </div>
</template>
