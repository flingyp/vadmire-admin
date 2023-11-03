<script setup lang="ts">
import { PhotoProvider, PhotoConsumer } from 'vue3-photo-preview';

const imageList = ref([
  'https://images5.alphacoders.com/131/thumbbig-1316260.webp',
  'https://images6.alphacoders.com/131/1314156.jpg',
  'https://images.alphacoders.com/131/1313793.jpg',
]);
</script>

<template>
  <div class="space-x-2">
    <div class="mb-2">
      图片预览插件是:
      <strong>
        <a href="https://github.com/NameWjp/vue3-photo-preview" target="_blank" class="text-primary"
          >vue3-photo-preview</a
        >
      </strong>
    </div>
    <PhotoProvider :photo-closable="false" :mask-closable="true" :should-transition="true">
      <PhotoConsumer v-for="(src, index) in imageList" :key="index" :src="src" :intro="src">
        <img :src="src" alt="Preview Image" class="w-40 h-40 object-cover cursor-pointer rounded" />
      </PhotoConsumer>
    </PhotoProvider>
  </div>
</template>
