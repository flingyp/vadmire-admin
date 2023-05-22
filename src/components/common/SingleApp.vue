<script setup lang="ts">
import { darkTheme, zhCN, dateZhCN } from 'naive-ui'
import { useVAdmireConfigStore } from '~/store'

defineOptions({
  name: 'SingleApp',
})

const { naiveThemeOverrides, themeMode } = storeToRefs(useVAdmireConfigStore())
</script>

<template>
  <Suspense>
    <NConfigProvider
      :theme="themeMode === 'LIGHT' ? null : darkTheme"
      :theme-overrides="naiveThemeOverrides"
      :locale="zhCN"
      :date-locale="dateZhCN"
      class="w-screen h-screen overflow-hidden"
    >
      <NNotificationProvider>
        <NDialogProvider>
          <NMessageProvider>
            <slot />
          </NMessageProvider>
        </NDialogProvider>
      </NNotificationProvider>
    </NConfigProvider>
  </Suspense>
</template>
