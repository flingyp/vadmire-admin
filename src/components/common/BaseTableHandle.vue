<script setup lang="ts">
import RenderIconify from '~/components/common/RenderIconify.vue'

interface BaseTableHandleProps {
  searchValue: string
}

withDefaults(defineProps<BaseTableHandleProps>(), {
  searchValue: '',
})

defineEmits(['add', 'export', 'update:searchValue'])
</script>

<template>
  <NInput
    placeholder="搜索框"
    autosize
    size="small"
    class="w-48"
    @update:value="$emit('update:searchValue', $event)"
  >
    <template #prefix>
      <RenderIconify icon="uil:comment-alt-search" />
    </template>
  </NInput>
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
    type="primary"
    size="small"
    class="px-4"
    @click="$emit('add')"
  >
    新增
  </NButton>
</template>

<style scoped></style>
