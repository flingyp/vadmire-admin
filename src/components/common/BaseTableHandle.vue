<script setup lang="ts">
import { BaseTableHandleProps } from '~/types'

defineOptions({ name: 'BaseTableHandle' })
withDefaults(defineProps<BaseTableHandleProps>(), {
  value: '',
})
defineEmits(['add', 'into', 'export'])
</script>

<template>
  <div class="w-full flex items-center justify-between">
    <div>
      <NButton
        type="primary"
        size="small"
        class="px-6 py-2"
        @click="$emit('add')"
      >
        新增
      </NButton>
    </div>
    <div class="space-x-2">
      <NButton
        type="primary"
        size="small"
        class="px-6 py-2"
        @click="$emit('into')"
      >
        导入
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
    </div>
  </div>
</template>
