<script setup lang="ts">
import { useNotification } from 'naive-ui';

const notification = useNotification();

notification.info({
  title: '💕💕💕 VAdmire Admin',
  content: '如果觉得项目不错，给个 Star ⭐️ 鼓励一下作者吧！\n链接：https://github.com/flingyp/vadmire-admin',
});
</script>

<template>
  <label />
</template>
