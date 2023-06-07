<script setup lang="ts">
import { useRouteMenuStore } from '~/store'

import GlobalMenu from '~/layout/components/GlobalMenu.vue'
import BaseLogoTitle from '~/layout/components/layout/BaseLogoTitle.vue'
import BaseFullScreen from '~/layout/components/layout/BaseFullScreen.vue'
import BaseGithubIcon from '~/layout/components/layout/BaseGithubIcon.vue'
import BaseSettingIcon from '~/layout/components/layout/BaseSettingIcon.vue'
import BaseSwitchLocale from '~/layout/components/layout/BaseSwitchLocale.vue'
import BasePersonalCenter from '~/layout/components/layout/BasePersonalCenter.vue'

const routeMenuStore = useRouteMenuStore()
</script>

<template>
  <div class="flex items-center justify-between h-full">
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
      <BaseGithubIcon />
      <BaseFullScreen />
      <BaseSwitchLocale />
      <BaseSettingIcon />
      <BasePersonalCenter />
    </div>
  </div>
</template>
