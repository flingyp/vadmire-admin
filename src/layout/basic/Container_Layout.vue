<script setup lang="ts">
import Basic_Layout from './Basic_Layout.vue'

import Global_Footer from '../mode/Global_Footer.vue'
import Global_Content from '../mode/Global_Content.vue'

import Sider_Menu_Header from '../mode/sider-menu-mode/Sider_Menu_Header.vue'
import Sider_Mix_Menu_Header from '../mode/sider-mix-menu-mode/Sider_Mix_Menu_Header.vue'
import Top_Menu_Header from '../mode/top-menu-mode/Top_Menu_Header.vue'

import Sider_Menu_Sider from '../mode/sider-menu-mode/Sider_Menu_Sider.vue'
import Sider_Mix_Menu_Sider from '../mode/sider-mix-menu-mode/Sider_Mix_Menu_Sider.vue'
import Top_Menu_Sider from '../mode/top-menu-mode/Top_Menu_Sider.vue'

const vadmireStore = useVAdmireStore()

const Global_Header = computed(() => {
  if (vadmireStore.layoutMode === 'SIDER_MENU') {
    return Sider_Menu_Header
  }
  if (vadmireStore.layoutMode === 'SIDER_MIX_MENU') {
    return Sider_Mix_Menu_Header
  }
  if (vadmireStore.layoutMode === 'TOP_MENU') {
    return Top_Menu_Header
  }
})

const Global_Sider = computed(() => {
  if (vadmireStore.layoutMode === 'SIDER_MENU') {
    return Sider_Menu_Sider
  }
  if (vadmireStore.layoutMode === 'SIDER_MIX_MENU') {
    return Sider_Mix_Menu_Sider
  }
  if (vadmireStore.layoutMode === 'TOP_MENU') {
    return Top_Menu_Sider
  }
})

</script>

<template>
  <Basic_Layout>
    <template #header>
      <component :is="Global_Header" />
    </template>

    <template #sider>
      <component :is="Global_Sider" />
    </template>

    <template #content>
      <Global_Content />
    </template>

    <template #footer>
      <component :is="Global_Footer" />
    </template>
  </Basic_Layout>
</template>
