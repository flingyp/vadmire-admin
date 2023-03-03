<script setup lang="ts">
import BaseButtonTabBar from './layout/BaseButtonTabBar.vue'

const vadmireConfigStore = useVAdmireConfigStore()

const tabBarHeight = computed(() => ({ height: `${vadmireConfigStore.tabBarHeight}px` }))
</script>

<template>
  <div
    class="flex items-center justify-between p-2 border-b border-b-vBorderLight dark:border-b-vBorderDark"
    :style="tabBarHeight"
  >
    <div class="flex-1 flex items-center mr-2">
      <BaseButtonTabBar />
    </div>
    <div class="text-base flex justify-end items-center h-full">
      <icon-uil:align-justify />
    </div>
  </div>
</template>
