<script setup lang="ts">
import { darkTheme } from 'naive-ui'
import { useVAdmireConfigStore } from '~/store'

const { naiveThemeOverrides, themeMode } = storeToRefs(useVAdmireConfigStore())
</script>

<template>
  <Suspense>
    <NConfigProvider
      :theme="themeMode === 'LIGHT' ? null : darkTheme"
      :theme-overrides="naiveThemeOverrides"
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
