<script setup lang="ts">
import Draggable from 'vuedraggable'

const drag = ref(false)
const draggableList = ref([
  {
    id: 1,
    label: 'Item 1',
  },
  {
    id: 2,
    label: 'Item 2',
  },
  {
    id: 3,
    label: 'Item 3',
  },
  {
    id: 4,
    label: 'Item 4',
  },
  {
    id: 5,
    label: 'Item 5',
  },
  {
    id: 6,
    label: 'Item 6',
  },
  {
    id: 7,
    label: 'Item 7',
  },
])
const dragStart = () => {
  drag.value = true
}
const dragEnd = () => {
  drag.value = false
  console.log('New draggableList->>>', draggableList.value)
}
</script>

<template>
  <div>
    <Draggable
      v-model="draggableList"
      item-key="id"
      group="people"
      @start="dragStart"
      @end="dragEnd"
    >
      <template #item="{element}">
        <div class="p-4 mb-4 last:mb-0 cursor-grab rounded border border-vBorderLight dark:border-vBorderDark">
          {{ element.id }} - {{ element.label }}
        </div>
      </template>
    </Draggable>
  </div>
</template>
