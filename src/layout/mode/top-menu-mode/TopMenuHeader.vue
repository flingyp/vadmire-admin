<script setup lang="ts">
import { useRouteMenuStore } from '~/store'

import GlobalMenu from '~/layout/components/GlobalMenu.vue'
import BaseSettingIcon from '~/layout/components/layout/BaseSettingIcon.vue'
import BaseLogoTitle from '~/layout/components/layout/BaseLogoTitle.vue'
import BaseFullScreen from '~/layout/components/layout/BaseFullScreen.vue'
import BasePersonalCenter from '~/layout/components/layout/BasePersonalCenter.vue'

const routeMenuStore = useRouteMenuStore()
</script>

<template>
  <div class="flex items-center justify-between px-4 h-full">
    <div>
      <BaseLogoTitle />
    </div>
    <div>
      <GlobalMenu
        mode="horizontal"
        :menu-options="routeMenuStore.vadmireMenu"
      />
    </div>
    <div class="h-full flex items-center">
      <BaseFullScreen />
      <BaseSettingIcon />
      <BasePersonalCenter />
    </div>
  </div>
</template>
