<script setup lang="ts">
import BaseHeaderItem from './BaseHeaderItem.vue';

const vadmireConfigStore = useVAdmireConfigStore();
const { isCollapsedSider } = storeToRefs(vadmireConfigStore);
</script>

<template>
  <BaseHeaderItem class="text-base cursor-pointer" @click="vadmireConfigStore.handleIsCollapsedSider">
    <icon-line-md:menu-fold-left v-if="!isCollapsedSider" />
    <icon-line-md:menu-fold-right v-else />
  </BaseHeaderItem>
</template>
