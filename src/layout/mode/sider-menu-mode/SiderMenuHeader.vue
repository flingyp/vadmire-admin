<script setup lang="ts">
import BaseGithubIcon from '~/layout/components/layout/BaseGithubIcon.vue'
import BaseFullScreen from '~/layout/components/layout/BaseFullScreen.vue'
import BaseSettingIcon from '~/layout/components/layout/BaseSettingIcon.vue'
import GlobalBreadCrumbMenu from '~/layout/components/GlobalBreadCrumbMenu.vue'
import BasePersonalCenter from '~/layout/components/layout/BasePersonalCenter.vue'
import BaseCollapsedSiderbar from '~/layout/components/layout/BaseCollapsedSiderbar.vue'
</script>

<template>
  <div class="flex items-center justify-between h-full">
    <div class="h-full flex items-center space-x-1">
      <BaseCollapsedSiderbar />
      <GlobalBreadCrumbMenu />
    </div>
    <div class="h-full flex items-center">
      <BaseGithubIcon />
      <BaseFullScreen />
      <BaseSettingIcon />
      <BasePersonalCenter />
    </div>
  </div>
</template>
