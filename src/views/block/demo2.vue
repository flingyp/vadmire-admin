<script setup lang="ts">
import { Tab, Vue3TabsChrome } from 'vue3-tabs-chrome'
import 'vue3-tabs-chrome/dist/vue3-tabs-chrome.css'

const tab = ref('facebook')
const tabs = reactive<Tab[]>([
  {
    label: 'google',
    key: 'google',
    favico: useRenderIcon('material-symbols:10k', 20, 20),
    dragable: false,
  },
  {
    label: 'facebook',
    key: 'facebook',
    favico: useRenderIcon('material-symbols:2k-plus', 20, 20),
    dragable: false,
  },
  {
    label: 'New Tab',
    key: 'costom key',
    dragable: false,
  },
])
</script>

<template>
  <Vue3TabsChrome
    v-model="tab"
    :tabs="tabs"
  />
</template>
