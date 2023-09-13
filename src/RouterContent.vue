<script setup lang="ts">

const isOnline = useOnline()
const { success, error } = useNaiveNotification()
watch(() => isOnline.value, (newVal, oldVal) => {
  if (oldVal && !newVal) {
    error({ content: '网络已断开连接', closable: true })
  }
  if (!oldVal && newVal) {
    success({ content: '网络已重新连接', closable: true })
  }
})
</script>

<template>
  <RouterView />
</template>
