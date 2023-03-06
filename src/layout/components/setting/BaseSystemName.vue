<script setup lang="ts">
const vadmireConfigStore = useVAdmireConfigStore()
</script>

<template>
  <NInput
    v-model:value="vadmireConfigStore.name"
    type="text"
    placeholder="系统名称"
    class="w-32 text-center"
  />
</template>
