<script setup lang="ts">
import SingleApp from '~/components/common/SingleApp.vue'
</script>

<template>
  <SingleApp>
    <div class="font-sans text-sm font-medium overflow-hidden w-screen box-border scroll-smooth transition">
      <RouterView />
    </div>
  </SingleApp>
</template>
