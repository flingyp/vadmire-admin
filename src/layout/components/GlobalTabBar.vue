<script setup lang="ts">
import GlobalButtonTabBar from './GlobalButtonTabBar.vue'
</script>

<template>
  <div class="flex items-center justify-between p-2 border-b">
    <div class="flex-1 flex items-center mr-2">
      <GlobalButtonTabBar />
    </div>
    <div class="text-base flex justify-end items-center h-full">
      <icon-uil:align-justify />
    </div>
  </div>
</template>
