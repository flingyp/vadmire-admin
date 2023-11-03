import { useRandomString } from '@flypeng/tool/browser';
import Mock from 'mockjs';
import { MockMethod } from 'vite-plugin-mock';

const random = Mock.Random;

const generateBaseTableData = (page: number, size: number) => {
  const baseTableList = [];
  for (let i = 0; i < size; i++) {
    const item = {
      id: `${page}_${useRandomString(8)}`,
      name: random.cname(),
      birthday: random.date(),
      address: random.county(true),
      postalCode: random.zip(),
      sex: random.boolean() ? '男' : '女',
    };
    baseTableList.push(item);
  }

  return baseTableList;
};

function getBaseTableData(page: number, size: number) {
  return {
    statusCode: 200,
    statusText: '获取基础表格数据成功!',
    data: {
      total: 20,
      list: generateBaseTableData(page, size),
    },
  };
}

export default [
  {
    url: '/api/feature/table',
    method: 'post',
    response: ({ body }: { body: any }) => {
      const { page, size } = body;
      return getBaseTableData(page, size);
    },
  },
] as MockMethod[];
