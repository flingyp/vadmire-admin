<script setup lang="ts">
import { RecordSearchItem } from '~/types'

const props = defineProps({
  searchFormList: {
    type: Array<RecordSearchItem>,
    default: () => [],
  },
})
const emit = defineEmits(['update:searchFormList', 'search', 'reset'])

const searchForm = ref(props.searchFormList)

watch(searchForm, (newValue) => {
  emit('update:searchFormList', newValue)
}, { deep: true })
</script>

<template>
  <NForm
    label-placement="left"
    label-width="auto"
  >
    <NFormItem
      v-for="search in searchForm"
      :key="search.key"
      :label="search.label"
    >
      <NInput
        v-if="search.type === 'input'"
        v-model:value="search.value"
        :placeholder="search.placeholder"
      />
      <NSelect
        v-else-if="search.type === 'select'"
        v-model:value="search.value"
        :placeholder="search.placeholder"
        :options="search.options"
      />
      <NDatePicker
        v-else-if="search.type === 'date'"
        v-model:formatted-value="search.value"
        type="date"
        class="w-full"
        :placeholder="search.placeholder"
      />
    </NFormItem>
    <NFormItem>
      <div class="space-x-2">
        <NButton
          type="primary"
          class="px-6"
          @click="$emit('search')"
        >
          搜索
        </NButton>
        <NButton
          type="primary"
          class="px-6"
          ghost
          @click="$emit('reset')"
        >
          重置
        </NButton>
      </div>
    </NFormItem>
  </NForm>
</template>
