<script setup lang="ts">
import GlobalHeaderItem from './GlobalHeaderItem.vue'

const vadmireConfigStore = useVAdmireConfigStore()
</script>

<template>
  <GlobalHeaderItem
    class="text-base cursor-pointer"
    @click="vadmireConfigStore.handleIsCollapsedSider"
  >
    <icon-line-md:menu-fold-left v-show="!vadmireConfigStore.isCollapsedSider" />
    <icon-line-md:menu-fold-right v-show="vadmireConfigStore.isCollapsedSider" />
  </GlobalHeaderItem>
</template>
