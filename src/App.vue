<script setup lang="ts">
import Single_App from '~/components/common/Single_App.vue'
</script>

<template>
  <Single_App>
    <div class="font-mono text-sm font-medium overflow-hidden w-screen box-border scroll-smooth transition-all">
      <RouterView />
    </div>
  </Single_App>
</template>
