<script setup lang="ts">
import { useVAdmireConfigStore } from '~/store'

const {
  layoutMode, isVisibleFotter, headerHeight, footerHeight, siderWidth, isCollapsedSider, isCollapsedSiderWidth,
} = storeToRefs(useVAdmireConfigStore())

// different layout mode
const isTopMenuMode = computed(() => layoutMode.value === 'TOP_MENU')
const isSiderMenuMode = computed(() => layoutMode.value === 'SIDER_MENU')
const isSiderMixMenuMode = computed(() => layoutMode.value === 'SIDER_MIX_MENU')

const siderHeight = computed(() => {
  if (isSiderMixMenuMode.value) {
    if (isVisibleFotter.value) return `calc(100vh - ${headerHeight.value}px - ${footerHeight.value}px)`
    return `calc(100vh - ${headerHeight.value}px`
  }
  if (isSiderMenuMode.value) return '100vh'
  return '0px'
})
const contentHeight = computed(() => {
  if (isVisibleFotter.value) return `calc(100vh - ${headerHeight.value}px - ${footerHeight.value}px)`
  return `calc(100vh - ${headerHeight.value}px`
})
</script>

<template>
  <NLayout :has-sider="isSiderMenuMode">
    <NLayoutHeader
      v-if="isTopMenuMode || isSiderMixMenuMode"
      bordered
    >
      <slot name="header">
        Default header
      </slot>
    </NLayoutHeader>

    <NLayoutSider
      v-if="isSiderMenuMode"
      bordered
      collapse-mode="width"
      :collapsed-width="isCollapsedSiderWidth"
      :native-scrollbar="false"
      :collapsed="isCollapsedSider"
    >
      <slot name="sider">
        Default sider
      </slot>
    </NLayoutSider>

    <NLayoutContent
      v-if="isTopMenuMode"
      bordered
      :native-scrollbar="false"
    >
      <slot name="content">
        Default content
      </slot>
    </NLayoutContent>

    <NLayout
      v-if="!isTopMenuMode"
      :has-sider="isSiderMixMenuMode"
    >
      <NLayoutHeader
        v-if="isSiderMenuMode"
        bordered
      >
        <slot name="header">
          Default header
        </slot>
      </NLayoutHeader>

      <NLayoutSider
        v-if="isSiderMixMenuMode"
        bordered
        collapse-mode="width"
        :collapsed-width="isCollapsedSiderWidth"
        :native-scrollbar="false"
        :collapsed="isCollapsedSider"
      >
        <slot name="sider">
          Default sider
        </slot>
      </NLayoutSider>

      <NLayoutContent
        v-if="isSiderMenuMode || isSiderMixMenuMode"
        bordered
        :native-scrollbar="false"
      >
        <slot name="content">
          Default content
        </slot>
      </NLayoutContent>

      <NLayoutFooter
        v-if="isVisibleFotter && isSiderMenuMode"
        bordered
      >
        <slot name="footer">
          Default footer
        </slot>
      </NLayoutFooter>
    </NLayout>

    <NLayoutFooter
      v-if="isVisibleFotter && (isTopMenuMode || isSiderMixMenuMode)"
      bordered
    >
      <slot name="footer">
        Default footer
      </slot>
    </NLayoutFooter>
  </NLayout>
</template>

<style scoped>

.n-layout-header {
  height: v-bind(headerHeight + 'px');
}

.n-layout-footer {
  height: v-bind(footerHeight + 'px');
}

.n-layout-sider {
  width: v-bind(siderWidth + 'px') !important;
  height: v-bind(siderHeight);
}

.n-layout-content {
  height: v-bind(contentHeight);
}
</style>
