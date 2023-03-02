<script setup lang="ts">
import Logo from '~/assets/svg/logo.svg'

const vadmireConfigStore = useVAdmireConfigStore()

const isShowTitle = computed(() => {
  if (vadmireConfigStore.layoutMode === 'SIDER_MENU') {
    if (!vadmireConfigStore.isCollapsedSider) return true
    return false
  }
  return true
})
</script>

<template>
  <div
    class="flex items-center justify-center border-b border-b-vBorderLight dark:border-b-vBorderDark"
    :style="{height: `${vadmireConfigStore.headerHeight}px`}"
  >
    <img
      :src="Logo"
      alt="Logo"
      class="h-ful w-6 h-6 mr-1"
    >
    <span
      v-show="isShowTitle"
      style="-webkit-text-fill-color: transparent;"
      class="
      text-gradient font-bold text-xl mt-1 select-none cursor-pointer
      bg-gradient-to-r from-primaryHover via-primary to-primarySuppl bg-clip-text"
    >
      {{ vadmireConfigStore.name }}
    </span>
  </div>
</template>
