<script setup lang="ts">import { LayoutMode } from '~/vadmire.config'

const vadmireConfigStore = useVAdmireConfigStore()

interface LayoutItem {
  key: LayoutMode,
  value: string
}
// layout list
const systemLayoutOption: LayoutItem[] = [
  {
    key: 'SIDER_MENU',
    value: '左侧菜单',
  },
  {
    key: 'TOP_MENU',
    value: '顶部菜单',
  },
  {
    key: 'SIDER_MIX_MENU',
    value: '顶部混合菜单',
  },
]
const changeLayoutMode = (mode: LayoutMode) => {
  vadmireConfigStore.layoutMode = mode
}
</script>

<template>
  <div class="w-full grid grid-cols-1 space-y-2">
    <NButton
      v-for="item in systemLayoutOption"
      :key="item.key"
      :type="vadmireConfigStore.layoutMode === item.key ? 'primary' : 'default'"
      @click="changeLayoutMode(item.key)"
    >
      {{ item.value }}
    </NButton>
  </div>
</template>
