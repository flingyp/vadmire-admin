<script setup lang="ts">
import { DataTableColumn, NButton } from 'naive-ui';
import BaseTable from '~/components/common/BaseTable.vue';
import BaseTableHandle from '~/components/common/BaseTableHandle.vue';
import BaseTableSearch from '~/components/common/BaseTableSearch.vue';
import { getBaseTableData } from '~/requests';
import { RecordSearchItem } from '~/types';

interface PersonInfo {
  name: string;
  birthday: string;
  address: string;
  postalCode: string;
  sex: string;
}

const { success, error, info } = useNaiveMessage();

// search input bind value
const searchValue = ref('');

const { isLoading, tableData, pagination, getTableData } = useTable<PersonInfo>();

// basic table columns list
const baseTableColumns: Array<DataTableColumn> = [
  {
    type: 'selection',
  },
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
              success(`点击更新： ${row.name}`);
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
              error(`点击删除： ${row.name}`);
            },
          },
          {
            default: () => '删除',
          },
        ),
      ];
    },
  },
];

// get table data
const getData = async () =>
  getTableData(() =>
    getBaseTableData({
      page: pagination.value.page ?? 1,
      size: pagination.value.pageSize ?? 15,
    }),
  );

// onChange method
pagination.value.onChange = async (page: number) => {
  pagination.value.page = page;
  await getData();
};

// onUpdatePageSize method
pagination.value.onUpdatePageSize = async (pageSize: number) => {
  pagination.value.pageSize = pageSize;
  await getData();
};
// add table data
const addTableData = () => info('点击新增');

// checked row keys
const checkedRowKeys = (id: string) => success(`选中行所绑定的ID值: ${id}`);

// config search from list
const searchFormList = ref<RecordSearchItem[]>([
  {
    label: '序号',
    key: 'id',
    type: 'input',
    placeholder: '请输入序号',
    value: '',
  },
  {
    label: '名称',
    key: 'name',
    type: 'input',
    placeholder: '请输入名称',
    value: '',
  },
  {
    label: '性别',
    key: 'sex',
    type: 'select',
    placeholder: '请选择性别',
    value: undefined,
    options: [
      {
        label: '男',
        value: 1,
      },
      {
        label: '女',
        value: 2,
      },
    ],
  },
  {
    label: '出生日期',
    key: 'birthday',
    type: 'date',
    placeholder: '请输入出生日期',
    value: undefined,
  },
  {
    label: '家庭住址',
    key: 'address',
    type: 'input',
    placeholder: '请输入家庭住址',
    value: '',
  },
  {
    label: '邮政编码',
    key: 'postalCode',
    type: 'input',
    placeholder: '请输入邮政编码',
    value: '',
  },
]);
const clickSearch = () => info('点击搜索');
const clickReset = () => info('点击重置');

const clickExport = () => info('点击导出');
const clickInto = () => info('点击导入');

onMounted(async () => {
  const { total } = await getData();
  pagination.value.pageCount = total;
});
</script>

<template>
  <div>
    <BaseTable
      size="small"
      :loading="isLoading"
      :headers="baseTableColumns"
      :data="tableData || []"
      :pagination="pagination"
      @checked-row-keys="checkedRowKeys"
      @add-data="addTableData"
    >
      <template #search>
        <div class="border border-vBorderLight dark:border-vBorderDark rounded p-4 mb-2">
          <BaseTableSearch
            v-model:search-form-list="searchFormList"
            class="grid grid-cols-4 gap-x-4"
            @search="clickSearch"
            @reset="clickReset"
          />
        </div>
      </template>
      <template #handle>
        <div class="mb-2 flex items-center justify-end space-x-1">
          <BaseTableHandle v-model:value="searchValue" @add="addTableData" @export="clickExport" @into="clickInto" />
        </div>
      </template>
    </BaseTable>
  </div>
</template>
