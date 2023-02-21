<script setup lang="ts"></script>

<template>
  <div class="flex flex-row items-center justify-center mt-4">
    <hr class="w-28 border-gray-300 block">
    <label class="mx-2 text-sm text-gray-500">Or continue with</label>
    <hr class="w-28 border-gray-300 block">
  </div>

  <div class="flex items-center justify-around space-x-4 mt-4">
    <NButton class="flex-1">
      <template #icon>
        <icon-fa:weixin />
      </template>
    </NButton>

    <NButton class="flex-1">
      <template #icon>
        <icon-mdi:twitter />
      </template>
    </NButton>

    <NButton class="flex-1">
      <template #icon>
        <icon-mdi:github />
      </template>
    </NButton>
  </div>
</template>

<style scoped></style>
