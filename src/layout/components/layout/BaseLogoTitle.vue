<script setup lang="ts">
import Logo from '~/assets/svg/admire-logo.svg';

const { width } = useWindowSize();
const vadmireConfigStore = useVAdmireConfigStore();
const { isCollapsedSider, siderWidth, headerHeight, layoutMode, name: systemName } = storeToRefs(vadmireConfigStore);

const baseLogoTitleWidth = computed(() => {
  if (width.value <= 768) {
    if (isCollapsedSider.value) return { width: '64px' };
    return { width: `${siderWidth.value}px` };
  }
  if (layoutMode.value === 'SIDER_MIX_MENU') return { width: `${siderWidth.value}px` };
  if (isCollapsedSider.value) return { width: '64px' };
  return { width: `${siderWidth.value}px` };
});
const baseLogoTitleHeight = computed(() => ({ height: `${headerHeight.value}px` }));
const isShowTitle = computed(() => {
  if (width.value <= 768) {
    if (isCollapsedSider.value) return false;
    return true;
  }
  if (layoutMode.value === 'SIDER_MIX_MENU') return true;
  if (isCollapsedSider.value) return false;
  return true;
});
</script>

<template>
  <div class="flex items-center justify-center" :style="{ ...baseLogoTitleHeight, ...baseLogoTitleWidth }">
    <img :src="Logo" alt="Logo" class="h-ful w-8 h-8 mr-2" />
    <span
      v-show="isShowTitle"
      style="-webkit-text-fill-color: transparent"
      class="text-gradient font-bold text-xl mt-1 select-none cursor-pointer bg-gradient-to-r from-primaryHover via-primary to-primarySuppl bg-clip-text"
    >
      {{ systemName }}
    </span>
  </div>
</template>
