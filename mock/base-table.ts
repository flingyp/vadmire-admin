import Mock from 'mockjs'
import { MockMethod } from 'vite-plugin-mock'

const random = Mock.Random

const generateBaseTableData = () => {
  const baseTableList = []
  for (let i = 0; i < 100; i++) {
    const item = {
      name: random.cname(),
      birthday: random.date(),
      address: random.county(true),
      postalCode: random.zip(),
      sex: random.boolean() ? '男' : '女',
    }
    baseTableList.push(item)
  }
  return baseTableList
}

function getBaseTableData() {
  return {
    statusCode: 200,
    statusText: '获取基础表格数据成功!',
    data: generateBaseTableData(),
  }
}

export default [
  {
    url: '/api/feature/table',
    method: 'post',
    response: () => getBaseTableData(),
  },
] as MockMethod[]
