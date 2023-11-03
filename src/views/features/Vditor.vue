<script setup lang="ts">
import Vditor from '~/components/common/Vditor.vue';

const markdownContent = ref('# 🎉️ VAdmire Admin🎉️\n\n');
</script>

<template>
  <div>
    <Vditor v-model:content="markdownContent" />
  </div>
</template>
