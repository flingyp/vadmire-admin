<script setup lang="ts">
import GlobalHeaderItem from './GlobalHeaderItem.vue'

const vadmireConfigStore = useVAdmireConfigStore()
</script>

<template>
  <GlobalHeaderItem @click="vadmireConfigStore.handleIsCollapsedSider">
    <icon-line-md:menu-fold-left
      v-if="!vadmireConfigStore.isCollapsedSider"
      class="text-base cursor-pointer"
    />
    <icon-line-md:menu-fold-right
      v-else
      class="text-base cursor-pointer"
    />
  </GlobalHeaderItem>
</template>
