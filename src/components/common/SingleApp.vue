<script setup lang="ts">
import { darkTheme } from 'naive-ui'
import { useVAdmireConfigStore } from '~/store'

const vadmireConfigStore = useVAdmireConfigStore()

const themeMode = computed(() => {
  if (vadmireConfigStore.themeMode === 'LIGHT') return null
  return darkTheme
})
</script>

<template>
  <Suspense>
    <NConfigProvider
      :theme="themeMode"
      class="w-screen h-screen"
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
