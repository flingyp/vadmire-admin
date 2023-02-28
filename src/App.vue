<script setup lang="ts">
import SingleApp from '~/components/common/SingleApp.vue'

const vadmireConfigStore = useVAdmireConfigStore()
// initial configuration
onMounted(() => {
  /**
   * SM: 640
   * MD: 768
   * LG: 1024
   * XL: 1280
   * 2XL: 1536
   */
  const documentWidth = window.innerWidth || document.documentElement.clientWidth
  if (documentWidth <= 640) {
    vadmireConfigStore.isCollapsedSider = true
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
