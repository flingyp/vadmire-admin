<script setup lang="ts">
import GlobalSetting from '~/layout/components/GlobalSetting.vue'
import GlobalLogoTitle from '~/layout/components/GlobalLogoTitle.vue'
import GlobalFullScreen from '~/layout/components/GlobalFullScreen.vue'
import GlobalPersonalCenter from '~/layout/components/GlobalPersonalCenter.vue'
import GlobalSiderCollapse from '~/layout/components/GlobalCollapsedSiderbar.vue'
</script>

<template>
  <div class="flex justify-between px-4">
    <div>
      <GlobalLogoTitle />
    </div>
    <div class="flex">
      <GlobalFullScreen />
      <GlobalSiderCollapse />
      <GlobalSetting />
      <GlobalPersonalCenter />
    </div>
  </div>
</template>
