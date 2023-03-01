<script setup lang="ts"></script>
<!-- hover:bg-gray-50 -->
<template>
  <div
    class="px-3 py-2 h-full flex items-center justify-center
    cursor-pointer transition-all duration-500 text-base hover:bg-vBgColor dark:hover:bg-vBgDarkColor"
  >
    <slot />
  </div>
</template>
