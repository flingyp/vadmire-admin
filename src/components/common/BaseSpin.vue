<script setup lang="ts">
defineProps({
  size: {
    type: String as PropType<number | 'small' | 'medium' | 'large'>,
    default: 'medium',
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
  loadingText: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <NSpin
    rotate
    :size="size"
    :show="isLoading"
    :description="loadingText"
  >
    <slot />
  </NSpin>
</template>
