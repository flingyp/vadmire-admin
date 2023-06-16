<script setup lang="ts">
import { useGetLocalKey, useSetLocalKey } from '@flypeng/tool/browser'
import { LOCAL_SYSTEM_KEY, Locales } from '~/vadmire.config'
import BaseHeaderItem from './BaseHeaderItem.vue'

const { locale } = useI18n()
const vadmireConfigStore = useVAdmireConfigStore()

const localeOption = computed(() => [
  {
    label: '中文',
    key: 'zh_CN',
  },
  {
    label: 'English',
    key: 'en_US',
  },
  {
    label: '한국어',
    key: 'ko_KR',
  },
])

/**
 * Switch Language
 * @param key
 */
const clickSwitchLocale = (key: Locales) => {
  const localVAdmireConfig = JSON.parse(useGetLocalKey(LOCAL_SYSTEM_KEY) || '{}')

  locale.value = key
  vadmireConfigStore.defaultLocales = key

  changeDayjsLocales(key)

  localVAdmireConfig.defaultLocales = key
  useSetLocalKey(LOCAL_SYSTEM_KEY, JSON.stringify(localVAdmireConfig))
}
</script>

<template>
  <NDropdown
    trigger="hover"
    :options="localeOption"
    @select="clickSwitchLocale"
  >
    <BaseHeaderItem>
      <icon-carbon:ibm-watson-language-translator class="cursor-pointer" />
    </BaseHeaderItem>
  </NDropdown>
</template>
