<script setup lang="ts">
import GlobalSetting from '~/layout/components/GlobalSetting.vue'
import GlobalFullScreen from '~/layout/components/GlobalFullScreen.vue'
import GlobalPersonalCenter from '~/layout/components/GlobalPersonalCenter.vue'
import GlobalBreadCrumbMenu from '~/layout/components/GlobalBreadCrumbMenu.vue'
import GlobalSiderCollapse from '~/layout/components/GlobalCollapsedSiderbar.vue'
</script>

<template>
  <div class="flex items-center justify-between h-full">
    <div class="h-full flex items-center space-x-1">
      <GlobalSiderCollapse />
      <GlobalBreadCrumbMenu />
    </div>
    <div class="h-full flex items-center">
      <GlobalFullScreen />
      <GlobalSetting />
      <GlobalPersonalCenter />
    </div>
  </div>
</template>
