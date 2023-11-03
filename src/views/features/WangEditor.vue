<script setup lang="ts">
import WangEditor from '~/components/common/WangEditor.vue';

// editor content
const editorContent = ref('<h1 style="text-align: center;">✌️VAdmire Admin✌️</h1>');
</script>

<template>
  <div>
    <WangEditor v-model:content="editorContent" />
  </div>
</template>
