<script setup lang="ts">
const { success, error } = useNaiveMessage();

const content = ref('拷贝DOM元素内容');
const clipboardSuccessHandler = () => {
  success('拷贝成功');
};
const clipboardErrorHandler = () => {
  error('拷贝失败');
};
</script>

<template>
  <div class="border m-2 border-vBorderLight dark:border-vBorderDark">
    <div class="text-base font-bold mb-4">v-clipboard 剪贴板指令</div>
    <NButton
      v-clipboard="content"
      v-clipboard:success="clipboardSuccessHandler"
      v-clipboard:error="clipboardErrorHandler"
      type="primary"
    >
      {{ content }}
    </NButton>
  </div>
</template>
