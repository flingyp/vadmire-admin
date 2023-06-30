<script setup lang="ts">
import { BaseTableHandleProps } from '~/types'

withDefaults(defineProps<BaseTableHandleProps>(), {
  value: '',
})

defineEmits(['add', 'export'])
</script>

<template>
  <NButton
    type="primary"
    size="small"
    class="px-6 py-2"
    @click="$emit('add')"
  >
    新增
  </NButton>
  <NButton
    type="info"
    size="small"
    ghost
    class="px-6 py-2"
    @click="$emit('export')"
  >
    导出
  </NButton>
</template>
