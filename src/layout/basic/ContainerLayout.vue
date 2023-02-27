<script setup lang="ts">
import BasicLayout from './BasicLayout.vue'

import GlobalFooter from '../mode/GlobalFooter.vue'
import GlobalContent from '../mode/GlobalContent.vue'

import SiderMenuHeader from '../mode/sider-menu-mode/SiderMenuHeader.vue'
import SiderMenuSider from '../mode/sider-menu-mode/SiderMenuSider.vue'

import SiderMixMenuHeader from '../mode/sider-mix-menu-mode/SiderMixMenuHeader.vue'
import SiderMixMenuSider from '../mode/sider-mix-menu-mode/SiderMixMenuSider.vue'

import TopMenuHeader from '../mode/top-menu-mode/TopMenuHeader.vue'
import TopMenuSider from '../mode/top-menu-mode/TopMenuSider.vue'

const vadmireConfigStore = useVAdmireConfigStore()

const Global_Header = computed(() => {
  if (vadmireConfigStore.layoutMode === 'SIDER_MENU') {
    return SiderMenuHeader
  }
  if (vadmireConfigStore.layoutMode === 'SIDER_MIX_MENU') {
    return SiderMixMenuHeader
  }
  if (vadmireConfigStore.layoutMode === 'TOP_MENU') {
    return TopMenuHeader
  }
})

const Global_Sider = computed(() => {
  if (vadmireConfigStore.layoutMode === 'SIDER_MENU') {
    return SiderMenuSider
  }
  if (vadmireConfigStore.layoutMode === 'SIDER_MIX_MENU') {
    return SiderMixMenuSider
  }
  if (vadmireConfigStore.layoutMode === 'TOP_MENU') {
    return TopMenuSider
  }
})

</script>

<template>
  <BasicLayout>
    <template #header>
      <component :is="Global_Header" />
    </template>

    <template #sider>
      <component :is="Global_Sider" />
    </template>

    <template #content>
      <GlobalContent />
    </template>

    <template #footer>
      <component :is="GlobalFooter" />
    </template>
  </BasicLayout>
</template>
