<script setup lang="ts">
import { useRouteMenuStore } from '~/store'

import Global_Menu from '~/layout/components/Global_Menu.vue'
import Global_LogoTitle from '~/layout/components/Global_LogoTitle.vue'

const routeMenuStore = useRouteMenuStore()
</script>

<template>
  <div>
    <Global_LogoTitle />
    <Global_Menu :menu-options="routeMenuStore.vadmireMenu" />
  </div>
</template>
