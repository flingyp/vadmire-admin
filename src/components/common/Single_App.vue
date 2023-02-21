<script setup lang="ts">
import { darkTheme } from 'naive-ui'
import { useVAdmireStore } from '~/store'

const vadmireStore = useVAdmireStore()

const themeMode = computed(() => {
  if (vadmireStore.themeMode === 'LIGHT') return null
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
