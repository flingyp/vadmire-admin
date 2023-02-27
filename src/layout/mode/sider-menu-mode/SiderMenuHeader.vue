<script setup lang="ts">
import GlobalSiderCollapse from '~/layout/components/GlobalCollapsedSiderbar.vue'
import GlobalFullScreen from '~/layout/components/GlobalFullScreen.vue'
</script>

<template>
  <div class="flex items-center justify-between h-full">
    <div class="h-full">
      <GlobalSiderCollapse />
    </div>
    <div class="h-full">
      <GlobalFullScreen />
    </div>
  </div>
</template>
