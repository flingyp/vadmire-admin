<script setup lang="ts">
import BaseButtonTabBar from './layout/BaseButtonTabBar.vue'
import BaseTabBarIcon from './layout/BaseTabBarIcon.vue'

const vadmireConfigStore = useVAdmireConfigStore()

const tabBarHeight = computed(() => ({ height: `${vadmireConfigStore.tabBarHeight}px` }))
</script>

<template>
  <div
    class="
    flex items-center justify-between transition
    duration-300 delay-50 p-2 border-b border-b-vBorderLight dark:border-b-vBorderDark"
    :style="tabBarHeight"
  >
    <div class="flex-1 flex items-center mr-2">
      <BaseButtonTabBar />
    </div>
    <div class="text-base flex justify-end items-center h-full">
      <BaseTabBarIcon />
    </div>
  </div>
</template>
