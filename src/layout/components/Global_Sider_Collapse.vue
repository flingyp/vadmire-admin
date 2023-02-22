<script setup lang="ts">
const vadmireStore = useVAdmireStore()
</script>

<template>
  <icon-line-md:menu-fold-left
    v-if="!vadmireStore.isScaleSider"
    class="text-base cursor-pointer"
  />
  <icon-line-md:menu-fold-right
    v-else
    class="text-base cursor-pointer"
  />
</template>
