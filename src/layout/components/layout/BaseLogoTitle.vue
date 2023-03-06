<script setup lang="ts">
import Logo from '~/assets/svg/admire-logo.svg'

const { width } = useWindowSize()
const vadmireConfigStore = useVAdmireConfigStore()

const baseLogoTitleWidth = computed(() => {
  if (width.value <= 768) {
    if (vadmireConfigStore.isCollapsedSider) return { width: '64px' }
    return { width: `${vadmireConfigStore.siderWidth}px` }
  }
  if (vadmireConfigStore.layoutMode === 'SIDER_MIX_MENU') return { width: `${vadmireConfigStore.siderWidth}px` }
  if (vadmireConfigStore.isCollapsedSider) return { width: '64px' }
  return { width: `${vadmireConfigStore.siderWidth}px` }
})
const baseLogoTitleHeight = computed(() => ({ height: `${vadmireConfigStore.headerHeight}px` }))
const isShowTitle = computed(() => {
  if (width.value <= 768) {
    if (vadmireConfigStore.isCollapsedSider) return false
    return true
  }
  if (vadmireConfigStore.layoutMode === 'SIDER_MIX_MENU') return true
  if (vadmireConfigStore.isCollapsedSider) return false
  return true
})
</script>

<template>
  <div
    class="flex items-center justify-center"
    :style="{...baseLogoTitleHeight, ...baseLogoTitleWidth}"
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
