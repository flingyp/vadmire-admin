<script setup lang="ts">
import { useFullscreen } from '@vueuse/core';
import BaseHeaderItem from './BaseHeaderItem.vue';

const { isFullscreen, toggle } = useFullscreen();
</script>

<template>
  <BaseHeaderItem @click="toggle">
    <!-- screen -->
    <icon-ant-design:fullscreen-outlined v-show="!isFullscreen" />
    <!-- exit screen -->
    <icon-ant-design:fullscreen-exit-outlined v-show="isFullscreen" />
  </BaseHeaderItem>
</template>
