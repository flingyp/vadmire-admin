<script setup lang="ts">
import { useSetLocalKey } from '@flypeng/tool/browser'
import { LOCAL_SYSTEM_KEY } from '~/vadmire.config'

import BaseThemeMode from './setting/BaseThemeMode.vue'
import BaseSystemName from './setting/BaseSystemName.vue'
import BaseLayoutMode from './setting/BaseLayoutMode.vue'
import BaseThemeColor from './setting/BaseThemeColor.vue'
import BaseCopyButton from './setting/BaseCopyButton.vue'
import BaseSystemConfig from './setting/BaseSystemConfig.vue'
import BaseSettingContainer from './setting/BaseSettingContainer.vue'

const vadmireConfigStore = useVAdmireConfigStore()
const { isScaleDrawer } = storeToRefs(vadmireConfigStore)

// watch vadmireConfigStore.$state config change
watchEffect(() => {
  const vadmireConfig = vadmireConfigStore.$state
  useSetLocalKey(LOCAL_SYSTEM_KEY, vadmireConfig)
})
</script>

<template>
  <NDrawer
    v-model:show="isScaleDrawer"
    :width="380"
    native-scrollbar
    placement="right"
  >
    <NDrawerContent
      title="系统设置"
      closable
    >
      <BaseSettingContainer title="系统名称">
        <BaseSystemName />
      </BaseSettingContainer>

      <BaseSettingContainer title="暗黑模式">
        <BaseThemeMode />
      </BaseSettingContainer>

      <BaseSettingContainer title="布局模式">
        <BaseLayoutMode />
      </BaseSettingContainer>

      <BaseSettingContainer title="系统主题色">
        <BaseThemeColor />
      </BaseSettingContainer>

      <BaseSettingContainer title="系统配置">
        <BaseSystemConfig />
      </BaseSettingContainer>

      <BaseSettingContainer title="拷贝系统配置">
        <BaseCopyButton />
      </BaseSettingContainer>
    </NDrawerContent>
  </NDrawer>
</template>
