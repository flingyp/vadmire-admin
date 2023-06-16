<script setup lang="ts">
import RenderIconify from '~/components/common/RenderIconify.vue'

interface BaseTableHandleProps {
  value: string
}

withDefaults(defineProps<BaseTableHandleProps>(), {
  value: '',
})

defineEmits(['add', 'export', 'search', 'update:value'])
</script>

<template>
  <NInput
    placeholder="搜索框"
    autosize
    size="small"
    class="w-48"
    :value="value"
    @update:value="$emit('update:value', $event)"
  >
    <template #prefix>
      <RenderIconify icon="uil:comment-alt-search" />
    </template>
  </NInput>
  <NButton
    type="primary"
    size="small"
    class="px-4"
    @click="$emit('search')"
  >
    搜索
  </NButton>
  <NButton
    type="info"
    size="small"
    ghost
    class="px-4"
    @click="$emit('export')"
  >
    导出
  </NButton>
  <NButton
    size="small"
    class="px-4"
    @click="$emit('add')"
  >
    新增
  </NButton>
</template>
