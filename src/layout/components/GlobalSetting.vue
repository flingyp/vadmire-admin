<script setup lang="ts">
import BaseSettingContainer from './setting/BaseSettingContainer.vue'

const { toggleDark } = useTheme()
const vadmireConfigStore = useVAdmireConfigStore()

const themeModeActive = computed(() => vadmireConfigStore.themeMode === 'DARK')
const updateThemeMode = (mode: boolean) => {
  if (mode) {
    vadmireConfigStore.themeMode = 'DARK'
    toggleDark(true)
  } else {
    vadmireConfigStore.themeMode = 'LIGHT'
    toggleDark(false)
  }
}
</script>

<template>
  <NDrawer
    v-model:show="vadmireConfigStore.isScaleDrawer"
    :width="360"
    native-scrollbar
    placement="right"
  >
    <NDrawerContent
      title="系统设置"
      closable
    >
      <BaseSettingContainer title="主题模式">
        <NSwitch
          v-model:value="themeModeActive"
          @update:value="updateThemeMode"
        >
          <template #checked>
            <icon-line-md:sunny-outline-to-moon-alt-loop-transition />
          </template>
          <template #unchecked>
            <icon-line-md:sunny-outline-loop />
          </template>
        </NSwitch>
      </BaseSettingContainer>
    </NDrawerContent>
  </NDrawer>
</template>
