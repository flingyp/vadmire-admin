<script setup lang="ts">
const { toggleDark } = useTheme();
const { themeMode } = storeToRefs(useVAdmireConfigStore());
const themeModeActive = computed(() => themeMode.value === 'DARK');
const updateThemeMode = (mode: boolean) => {
  if (mode) {
    toggleDark(true);
  } else {
    toggleDark(false);
  }
};
</script>

<template>
  <NSwitch v-model:value="themeModeActive" @update:value="updateThemeMode">
    <template #checked>
      <icon-line-md:sunny-outline-to-moon-alt-loop-transition />
    </template>
    <template #unchecked>
      <icon-line-md:sunny-outline-loop />
    </template>
  </NSwitch>
</template>
