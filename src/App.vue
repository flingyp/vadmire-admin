<script setup lang="ts">
import SingleApp from '~/components/common/SingleApp.vue'

const vadmireConfigStore = useVAdmireConfigStore()

// listener window size change
useMonitorWindow(([width]: [number, number]) => {
  if (width <= 768) {
    vadmireConfigStore.isCollapsedSider = true
  } else {
    vadmireConfigStore.isCollapsedSider = false
  }
})
</script>

<template>
  <SingleApp>
    <div class="font-sans text-sm font-medium overflow-hidden w-screen box-border scroll-smooth transition">
      <RouterView />
    </div>
  </SingleApp>
</template>
