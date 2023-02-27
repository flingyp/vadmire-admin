<script setup lang="ts">
import SingleApp from '~/components/common/SingleApp.vue'
</script>

<template>
  <SingleApp>
    <div class="font-mono text-sm font-medium overflow-hidden w-screen box-border scroll-smooth transition-all">
      <RouterView />
    </div>
  </SingleApp>
</template>
