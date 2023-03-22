<script setup lang="ts">
import BasicLayout from './BasicLayout.vue'

import GlobalFooter from '../mode/GlobalFooter.vue'
import GlobalContent from '../mode/GlobalContent.vue'

import SiderMenuHeader from '../mode/sider-menu-mode/SiderMenuHeader.vue'
import SiderMenuSider from '../mode/sider-menu-mode/SiderMenuSider.vue'

import SiderMixMenuHeader from '../mode/sider-mix-menu-mode/SiderMixMenuHeader.vue'
import SiderMixMenuSider from '../mode/sider-mix-menu-mode/SiderMixMenuSider.vue'

import TopMenuHeader from '../mode/top-menu-mode/TopMenuHeader.vue'

import GlobalSetting from '~/layout/components/GlobalSetting.vue'

const { layoutMode } = storeToRefs(useVAdmireConfigStore())

const Global_Header = computed(() => {
  if (layoutMode.value === 'SIDER_MENU') return SiderMenuHeader
  if (layoutMode.value === 'SIDER_MIX_MENU') return SiderMixMenuHeader
  if (layoutMode.value === 'TOP_MENU') return TopMenuHeader
})

const Global_Sider = computed(() => {
  if (layoutMode.value === 'SIDER_MENU') return SiderMenuSider
  if (layoutMode.value === 'SIDER_MIX_MENU') return SiderMixMenuSider
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

  <GlobalSetting />
</template>
