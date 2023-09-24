<script setup lang="ts">
import { darkTheme, zhCN, dateZhCN } from 'naive-ui'
import { useVAdmireConfigStore } from '~/store'
import BaseSpin from '~/components/common/BaseSpin.vue'

defineOptions({ name: 'SingleApp' })

const { naiveThemeOverrides, themeMode } = storeToRefs(useVAdmireConfigStore())

const { isLoading, loadingText } = inject('loading') as { isLoading: boolean, loadingText: string }
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
      <NNotificationProvider placement="bottom-right">
        <NDialogProvider>
          <NMessageProvider>
            <slot v-if="!isLoading" />

            <BaseSpin
              v-else
              class="w-screen h-screen overflow-hidden"
              size="medium"
              :is-loading="isLoading"
              :loading-text="loadingText"
            />
          </NMessageProvider>
        </NDialogProvider>
      </NNotificationProvider>
    </NConfigProvider>
  </Suspense>
</template>
