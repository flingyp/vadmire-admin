<script setup lang="ts">
const { toggleDark } = useTheme()
const vadmireConfigStore = useVAdmireConfigStore()
const themeModeActive = computed(() => vadmireConfigStore.themeMode === 'DARK')
const updateThemeMode = (mode: boolean) => {
  if (mode) {
    toggleDark(true)
  } else {
    toggleDark(false)
  }
}
</script>

<template>
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
</template>
