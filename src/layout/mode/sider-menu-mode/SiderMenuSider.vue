<script setup lang="ts">
import { useRouteMenuStore } from '~/store'

import GlobalMenu from '~/layout/components/GlobalMenu.vue'
import BaseLogoTitle from '~/layout/components/layout/BaseLogoTitle.vue'

const routeMenuStore = useRouteMenuStore()
</script>

<template>
  <div>
    <BaseLogoTitle />
    <GlobalMenu :menu-options="routeMenuStore.vadmireMenu" />
  </div>
</template>
