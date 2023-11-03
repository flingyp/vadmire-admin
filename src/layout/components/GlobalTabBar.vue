<script setup lang="ts">
import BaseButtonTabBar from './layout/BaseButtonTabBar.vue';
import BaseTabBarIcon from './layout/BaseTabBarIcon.vue';

const { tabBarHeight } = storeToRefs(useVAdmireConfigStore());
</script>

<template>
  <div
    class="flex items-center justify-between transition duration-300 delay-50 p-2 border-b border-b-vBorderLight dark:border-b-vBorderDark"
    :style="{ height: `${tabBarHeight}px` }"
  >
    <div class="flex-1 flex items-center mr-2">
      <BaseButtonTabBar />
    </div>
    <div class="text-base flex justify-end items-center h-full">
      <BaseTabBarIcon />
    </div>
  </div>
</template>
