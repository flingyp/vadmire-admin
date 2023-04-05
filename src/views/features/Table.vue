<script setup lang="ts">
import BaseTable from '~/components/common/BaseTable.vue'
import { getBaseTableData } from '~/requests'

interface PersonInfo {
  name: string
  birthday: string
  address: string
  postalCode: string
  sex: string
}

const { data } = await getBaseTableData()

const baseTableData = ref(data as PersonInfo[])

const baseTableColumns = [
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
  },
  {
    title: '家庭住址',
    key: 'address',
  },
  {
    title: '邮政编码',
    key: 'postalCode',
  },
]

const { headers: baseTableHeaders } = useTable<PersonInfo>(baseTableColumns)
</script>

<template>
  <div>
    <BaseTable
      size="small"
      :headers="baseTableHeaders"
      :data="baseTableData"
      :max-height="500"
    />
  </div>
</template>
