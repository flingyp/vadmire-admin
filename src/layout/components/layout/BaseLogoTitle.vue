<script setup lang="ts">
import Logo from '~/assets/svg/admire-logo.svg'

const vadmireConfigStore = useVAdmireConfigStore()

const isShowTitle = computed(() => {
  if (vadmireConfigStore.layoutMode === 'SIDER_MENU') {
    if (!vadmireConfigStore.isCollapsedSider) return true
    return false
  }
  return true
})

const baseLogoTitleStyle = computed(() => {
  const baseLogoTitleWidth = vadmireConfigStore.isCollapsedSider ? 64 : vadmireConfigStore.siderWidth
  const baseLogoTitleHeight = vadmireConfigStore.headerHeight
  return {
    width: `${baseLogoTitleWidth}px`,
    height: `${baseLogoTitleHeight}px`,
  }
})
</script>

<template>
  <div
    class="flex items-center justify-center"
    :style="baseLogoTitleStyle"
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
