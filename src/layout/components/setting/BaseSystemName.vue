<script setup lang="ts">
const { name } = storeToRefs(useVAdmireConfigStore())
</script>

<template>
  <NInput
    v-model:value="name"
    type="text"
    placeholder="系统名称"
    class="w-32 text-center"
  />
</template>
