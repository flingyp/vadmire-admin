<script setup lang="ts">
import Vditor from '~/components/common/Vditor.vue'

const markdownContent = ref('# 🎉️ VAdmire Admin🎉️\n\n')
</script>

<template>
  <Vditor v-model:content="markdownContent" />
</template>
