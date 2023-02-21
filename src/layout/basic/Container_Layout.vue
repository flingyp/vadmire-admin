<script setup lang="ts">
import Basic_Layout from './Basic_Layout.vue'

import Global_Footer from '../mode/Global_Footer.vue'
import Global_Content from '../mode/Global_Content.vue'
</script>

<template>
  <Basic_Layout>
    <template #header>
      头部
    </template>

    <template #sider>
      侧边栏
    </template>

    <template #content>
      <Global_Content />
    </template>

    <template #footer>
      <component :is="Global_Footer" />
    </template>
  </Basic_Layout>
</template>
