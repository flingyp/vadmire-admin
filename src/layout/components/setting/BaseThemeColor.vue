<script setup lang="ts">
import { useSetLocalKey } from '@flypeng/tool/browser';
import { PRIMARY_COLOR_KEY } from '~/common';

const { primaryColor } = storeToRefs(useVAdmireConfigStore());

// primary color list
const primaryColorList = [
  '#f44336',
  '#e91e63',
  '#9c27b0',
  '#673ab7',
  '#3f51b5',
  '#2196f3',
  '#03a9f4',
  '#00bcd4',
  '#009688',
  '#4caf50',
  '#8bc34a',
  '#cddc39',
  '#ffeb3b',
  '#ffc107',
  '#ff9800',
  '#ff5722',
  '#795548',
  '#9e9e9e',
  '#607d8b',
];
const updateSystemPrimaryColor = (color: string) => {
  primaryColor.value = color;
  useSetLocalKey(PRIMARY_COLOR_KEY, color);
};
</script>

<template>
  <div class="w-full">
    <div class="w-full grid grid-cols-8 gap-4">
      <div
        v-for="item in primaryColorList"
        :key="item"
        class="w-7 h-7 rounded-sm cursor-pointer"
        :class="[primaryColor === item ? 'primary-item-active' : '']"
        :style="{ backgroundColor: item }"
        @click="updateSystemPrimaryColor(item)"
      />
    </div>
    <NColorPicker class="mt-4" :value="primaryColor" size="small" @update:value="updateSystemPrimaryColor" />
  </div>
</template>

<style scoped lang="scss">
.primary-item-active {
  position: relative;

  &::after {
    position: absolute;
    top: 50%;
    left: 50%;
    color: #fff;
    transform: translate(-50%, -50%);
    content: '✓';
  }
}
</style>
