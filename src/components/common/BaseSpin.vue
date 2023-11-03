<script setup lang="ts">
import { BaseSpinProps } from '~/types';

defineOptions({ name: 'BaseSpin' });
withDefaults(defineProps<BaseSpinProps>(), {
  size: 'medium',
  isLoading: false,
  loadingText: '',
});
</script>

<template>
  <NSpin rotate :size="size" :show="isLoading" :description="loadingText">
    <slot />
  </NSpin>
</template>
