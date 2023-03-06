<script setup lang="ts">
import packageJson from '../../package.json'

interface PackageJson {
  name: string
  version: string
  description: string
  dependencies: Record<string, string>
  devDependencies: Record<string, string>
}
const {
  name, version, description, dependencies, devDependencies,
} = packageJson as PackageJson

interface PackageItem {
  name: string
  version: string
}

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
