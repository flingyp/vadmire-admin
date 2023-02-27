<script setup lang="ts">
import { useRouteMenuStore } from '~/store'

import GlobalMenu from '~/layout/components/GlobalMenu.vue'
import GlobalSetting from '~/layout/components/GlobalSetting.vue'
import GlobalLogoTitle from '~/layout/components/GlobalLogoTitle.vue'
import GlobalFullScreen from '~/layout/components/GlobalFullScreen.vue'
import GlobalPersonalCenter from '~/layout/components/GlobalPersonalCenter.vue'

const routeMenuStore = useRouteMenuStore()
</script>

<template>
  <div class="flex items-center justify-between px-4 h-full">
    <div>
      <GlobalLogoTitle />
    </div>
    <div>
      <GlobalMenu
        mode="horizontal"
        :menu-options="routeMenuStore.vadmireMenu"
      />
    </div>
    <div class="h-full flex items-center">
      <GlobalFullScreen />
      <GlobalSetting />
      <GlobalPersonalCenter />
    </div>
  </div>
</template>
