<script setup lang="ts">
import { PhotoProvider, PhotoConsumer } from 'vue3-photo-preview'

const imageList = ref([
  'http://img.netbian.com/file/2023/0519/235052lgdqO.jpg',
  'http://img.netbian.com/file/2023/0519/234648CFCso.jpg',
  'http://img.netbian.com/file/2023/0524/000923ho8Ai.jpg',
  'http://img.netbian.com/file/2023/0519/234158pBGos.jpg',
  'http://img.netbian.com/file/2023/0521/192916KVvhR.jpg',
  'http://img.netbian.com/file/2023/0519/1511239QVOY.gif',
  'http://img.netbian.com/file/2023/0424/211557lkb3P.jpg',
])
</script>

<template>
  <div class="space-x-2">
    <div class="mb-2">
      图片预览插件是:
      <strong>
        <a
          href="https://github.com/NameWjp/vue3-photo-preview"
          target="_blank"
          class="text-primary"
        >vue3-photo-preview</a>
      </strong>
    </div>
    <PhotoProvider
      :photo-closable="false"
      :mask-closable="true"
      :should-transition="true"
    >
      <PhotoConsumer
        v-for="(src, index) in imageList"
        :key="index"
        :src="src"
        :intro="src"
      >
        <img
          :src="src"
          alt="Preview Image"
          class="w-40 h-40 object-cover cursor-pointer rounded"
        >
      </PhotoConsumer>
    </PhotoProvider>
  </div>
</template>
