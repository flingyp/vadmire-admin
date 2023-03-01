<script setup lang="ts">
import BaseLogoTitle from '~/layout/components/layout/BaseLogoTitle.vue'
import BaseFullScreen from '~/layout/components/layout/BaseFullScreen.vue'
import BaseSettingIcon from '~/layout/components/layout/BaseSettingIcon.vue'
import BasePersonalCenter from '~/layout/components/layout/BasePersonalCenter.vue'
import GlobalBreadCrumbMenu from '~/layout/components/GlobalBreadCrumbMenu.vue'
import BaseCollapsedSiderbar from '~/layout/components/layout/BaseCollapsedSiderbar.vue'
</script>

<template>
  <div class="flex justify-between px-4">
    <div class="flex items-center space-x-10">
      <BaseLogoTitle />
      <GlobalBreadCrumbMenu />
    </div>
    <div class="flex">
      <BaseFullScreen />
      <BaseCollapsedSiderbar />
      <BaseSettingIcon />
      <BasePersonalCenter />
    </div>
  </div>
</template>
