<script setup lang="ts">

const pageScreenshot = () => {
  const body = document.querySelector('body')
  body && useHtml2Image(body, '页面截图')
}

const menuScreenshot = () => {
  const menu = document.querySelector('.n-layout-content')
  menu && useHtml2Image(menu, '菜单截图')
}

</script>

<template>
  <div class="space-x-1">
    <NButton
      type="primary"
      @click="pageScreenshot"
    >
      页面截图
    </NButton>

    <NButton
      type="info"
      @click="menuScreenshot"
    >
      菜单截图
    </NButton>
  </div>
</template>
