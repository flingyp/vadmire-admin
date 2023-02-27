<script setup lang="ts">
import { useFullscreen } from '@vueuse/core'
import GlobalHeaderItem from './GlobalHeaderItem.vue'

const { isFullscreen, toggle } = useFullscreen()
</script>

<template>
  <GlobalHeaderItem @click="toggle">
    <!-- screen -->
    <icon-ant-design:fullscreen-outlined v-show="!isFullscreen" />
    <!-- exit screen -->
    <icon-ant-design:fullscreen-exit-outlined v-show="isFullscreen" />
  </GlobalHeaderItem>
</template>
