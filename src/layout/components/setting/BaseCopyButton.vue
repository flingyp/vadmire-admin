<script setup lang="ts">
import { useMessage } from 'naive-ui'
import { useCopyContent, useDeepClone } from '@flypeng/tool/browser'
import { defaultVAdmireConfig, VAdmireConfig } from '~/vadmire.config'

const message = useMessage()
const { toggleDark } = useTheme()
const vadmireConfigStore = useVAdmireConfigStore()

// copy and reset config
const copyConfig = () => {
  const systemConfig: VAdmireConfig = useDeepClone(vadmireConfigStore.$state)
  systemConfig.isScaleDrawer = false
  useCopyContent(JSON.stringify(systemConfig))
  message.success('系统配置已复制到剪贴板中，可替换vadmire.config.ts中的默认配置！')
}

const resetConfig = () => {
  const defaultConfig = defaultVAdmireConfig()
  defaultConfig.isScaleDrawer = true
  vadmireConfigStore.$state = defaultConfig
  // change local theme mode
  toggleDark(defaultConfig.themeMode !== 'LIGHT')
  message.success('系统配置已重置为默认配置！')
}
</script>

<template>
  <div class="w-full grid grid-cols-1 gap-y-2">
    <NButton
      block
      type="primary"
      @click="copyConfig"
    >
      拷贝系统配置
    </NButton>
    <NButton
      block
      type="info"
      @click="resetConfig"
    >
      重置系统配置
    </NButton>
  </div>
</template>
