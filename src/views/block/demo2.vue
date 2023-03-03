<script setup lang="ts">
import { Tab, Vue3TabsChrome } from 'vue3-tabs-chrome'
import 'vue3-tabs-chrome/dist/vue3-tabs-chrome.css'
import AvatarLogo from '~/assets/img/avatar-logo.png'

const tab = ref('facebook')
const tabs = reactive<Tab[]>([
  {
    label: 'google',
    key: 'google',
    favico: useRenderIcon('material-symbols:10k', 20, 20),
    swappable: false,
  },
  {
    label: 'facebook',
    key: 'facebook',
    favico: AvatarLogo,
    swappable: false,
  },
  {
    label: 'New Tab',
    key: 'costom key',
    favico: (() => '😆'),
    swappable: false,
  },
])
</script>

<template>
  <Vue3TabsChrome
    v-model="tab"
    :tabs="tabs"
  />
</template>
