<script setup lang="ts">
import { useRouteMenuStore } from '~/store'

import GlobalMenu from '~/layout/components/GlobalMenu.vue'
import GlobalLogoTitle from '~/layout/components/GlobalLogoTitle.vue'

const routeMenuStore = useRouteMenuStore()
</script>

<template>
  <div>
    <GlobalLogoTitle />
    <GlobalMenu :menu-options="routeMenuStore.vadmireMenu" />
  </div>
</template>
