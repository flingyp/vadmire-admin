<script setup lang="ts">
import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'
import { useDriver } from '~/composables/useDriver'
import packageJson from '../../package.json'

interface PackageJson {
  name: string
  version: string
  description: string
  dependencies: Record<string, string>
  devDependencies: Record<string, string>
}

interface PackageItem {
  name: string
  version: string
}

const {
  name, description, dependencies, devDependencies,
} = packageJson as PackageJson

const dependenciesList: PackageItem[] = []
const devDependenciesList: PackageItem[] = []

Object.keys(dependencies).forEach((key) => {
  const dependenciesItem: PackageItem = { name: '', version: '' }
  dependenciesItem.name = key
  dependenciesItem.version = dependencies[key]
  dependenciesList.push(dependenciesItem)
})

Object.keys(devDependencies).forEach((key) => {
  const devDependenciesItem: PackageItem = { name: '', version: '' }
  devDependenciesItem.name = key
  devDependenciesItem.version = devDependencies[key]
  devDependenciesList.push(devDependenciesItem)
})

const { isDriver, start } = useDriver(
  [
    {
      element: '#driver-step-1',
      popover: {
        title: '系统菜单',
        description: '菜单需要在 router/modules 中配置路由',
        position: 'right',
        offset: 80,
      },
    },
    {
      element: '#driver-step-2',
      popover: {
        title: '系统配置',
        description: '系统个性化配置',
        position: 'bottom-center',
        offset: 20,
      },
    },
  ],
)

onMounted(() => {
  // Start the introduction

  isDriver.value && start()
})

</script>

<template>
  <div class="space-y-2">
    <NCard
      :title="name"
      hoverable
    >
      {{ description }}
    </NCard>

    <NCard
      title="开发环境相关依赖"
      hoverable
    >
      <NDescriptions
        label-placement="left"
        bordered
      >
        <NDescriptionsItem
          v-for="(item, index) in devDependenciesList"
          :key="index"
          :label="item.name"
        >
          {{ item.version }}
        </NDescriptionsItem>
      </NDescriptions>
    </NCard>

    <NCard
      title="生成环境相关依赖"
      hoverable
    >
      <NDescriptions
        label-placement="left"
        bordered
      >
        <NDescriptionsItem
          v-for="(item, index) in dependenciesList"
          :key="index"
          :label="item.name"
        >
          {{ item.version }}
        </NDescriptionsItem>
      </NDescriptions>
    </NCard>
  </div>
</template>
