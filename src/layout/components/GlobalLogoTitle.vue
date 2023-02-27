<script setup lang="ts">
import Logo from '~/assets/img/admire-logo.png'

const vadmireConfigStore = useVAdmireConfigStore()
</script>

<template>
  <div
    class="flex items-center justify-center border-b"
    :style="{height: `${vadmireConfigStore.headerHeight}px`}"
  >
    <img
      :src="Logo"
      alt="logo"
      class="h-full"
    >
    <span
      v-show="!vadmireConfigStore.isCollapsedSider"
      class="text-gradient font-bold text-xl mt-1 select-none cursor-pointer"
    >
      {{ vadmireConfigStore.name }}
    </span>
  </div>
</template>

<style scoped>
.text-gradient {
  background-image: linear-gradient(to right, rgba(164,110,247), rgba(137,109,241));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
