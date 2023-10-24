<script setup lang="ts">
import { Watermark } from '@pansy/vue-watermark'

const { contentContainerHeight, themeMode } = storeToRefs(useVAdmireConfigStore())

const watermarkOptions = ref({
  text: 'VAdmire Admin',
  fontColor: '#000',
})

watch(() => themeMode.value, (newVal) => {
  if (newVal === 'LIGHT') {
    watermarkOptions.value.fontColor = '#000'
  } else {
    watermarkOptions.value.fontColor = '#fff'
  }
})

</script>

<template>
  <div>
    <Watermark :options="watermarkOptions">
      <div
        :style="{height: contentContainerHeight}"
        class="flex flex-col space-y-4 items-center justify-center"
      >
        <h2>watermark</h2>
        <span>https://github.com/pansyjs/watermark</span>
      </div>
    </Watermark>
  </div>
</template>
