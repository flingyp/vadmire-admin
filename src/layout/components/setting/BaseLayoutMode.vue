<script setup lang="ts">
import { LayoutMode } from '~/vadmire.config'
import BaseLayoutItem from '../layout/BaseLayoutItem.vue'

const vadmireConfigStore = useVAdmireConfigStore()

const updateLayoutMode = (mode: LayoutMode) => {
  vadmireConfigStore.layoutMode = mode
}
</script>

<template>
  <div class="w-full grid grid-cols-3 gap-x-2">
    <BaseLayoutItem
      mode="SIDER_MENU"
      @update-layout-mode="updateLayoutMode"
    />
    <BaseLayoutItem
      mode="TOP_MENU"
      @update-layout-mode="updateLayoutMode"
    />
    <BaseLayoutItem
      mode="SIDER_MIX_MENU"
      @update-layout-mode="updateLayoutMode"
    />
  </div>
</template>
