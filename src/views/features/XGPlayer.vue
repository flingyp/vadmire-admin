<script setup lang="ts">
import XGPlayer from '~/components/common/XGPlayer.vue'

const videoSrc = ref('http://sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-720p.mp4')
</script>

<template>
  <div class="p-4 flex flex-col items-center space-y-2">
    <div>
      <label class="font-bold text-base text-primary mr-2">西瓜视频播放器</label>
      <a
        href="http://v2.h5player.bytedance.com"
        target="_blank"
        class="text-sm text-primarySuppl"
      >文档</a>
    </div>
    <div>
      <XGPlayer :url="videoSrc" />
    </div>
  </div>
</template>
