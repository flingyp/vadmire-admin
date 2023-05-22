<script setup lang="ts">
import BaseHeaderItem from './BaseHeaderItem.vue'

const vadmireConfigStore = useVAdmireConfigStore()
</script>

<template>
  <BaseHeaderItem

    @click="vadmireConfigStore.isScaleDrawer = true"
  >
    <icon-ant-design:setting-outlined id="driver-step-2" />
  </BaseHeaderItem>
</template>
