<script setup lang="ts">
import { Icon } from '@iconify/vue'

const routeMenuStore = useRouteMenuStore()

</script>

<template>
  <div class="flex justify-between p-2 border-b">
    <div class="w-[96%] h-full flex items-center space-x-2 mr-2">
      <div
        v-for="menu in routeMenuStore.vadmireTabMenu"
        :key="menu.key"
        class="flex items-center border px-2 py-1"
      >
        <Icon
          :icon="menu.iconLabel"
          class="text-base mr-1"
        />
        <span>{{ menu.label }}</span>
      </div>
    </div>
    <div class="text-base flex justify-end">
      <icon-uil:align-justify />
    </div>
  </div>
</template>
