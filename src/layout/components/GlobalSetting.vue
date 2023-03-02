<script setup lang="ts">
import { useSetLocalKey } from '@flypeng/tool/browser'
import { PRIMARY_COLOR_KEY } from '~/vadmire.config'
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

// primary color list
const primaryColorList = [
  '#f44336',
  '#e91e63',
  '#9c27b0',
  '#673ab7',
  '#3f51b5',
  '#2196f3',
  '#03a9f4',
  '#00bcd4',
  '#009688',
  '#4caf50',
  '#8bc34a',
  '#cddc39',
  '#ffeb3b',
  '#ffc107',
  '#ff9800',
  '#ff5722',
  '#795548',
  '#9e9e9e',
  '#607d8b',
]
const updateSystemPrimaryColor = (color: string) => {
  vadmireConfigStore.primaryColor = color
  useSetLocalKey(PRIMARY_COLOR_KEY, color)
}

// page switch transition options
const pageSwitchTransitionOption = [{
  label: '消退',
  value: 'fade',
},
{
  label: '滑动消退',
  value: 'fade-slide',
},
{
  label: '向下滑动消退',
  value: 'fade-bottom',
},
{
  label: '向上滑动消退',
  value: 'fade-top',
},
{
  label: '放大消退',
  value: 'fade-scale',
},
{
  label: '缩放消退',
  value: 'zoom-fade',
},
{
  label: '缩放弹出',
  value: 'zoom-out',
}]

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
      <BaseSettingContainer title="暗黑模式">
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

      <BaseSettingContainer title="系统主题色">
        <div class="w-full">
          <div class="w-full grid grid-cols-8 gap-2">
            <div
              v-for="item in primaryColorList"
              :key="item"
              class="w-6 h-6 rounded-sm cursor-pointer"
              :class="[vadmireConfigStore.primaryColor === item ? 'primary-item-active' : '' ]"
              :style="{backgroundColor: item}"
              @click="updateSystemPrimaryColor(item)"
            />
          </div>
          <NColorPicker
            class="mt-4"
            :value="vadmireConfigStore.primaryColor"
            size="small"
            @update:value="updateSystemPrimaryColor"
          />
        </div>
      </BaseSettingContainer>

      <BaseSettingContainer title="切换过渡">
        <NSelect
          v-model:value="vadmireConfigStore.pageTransition"
          :options="pageSwitchTransitionOption"
        />
      </BaseSettingContainer>
    </NDrawerContent>
  </NDrawer>
</template>

<style scoped lang="scss">
.primary-item-active {
  position: relative;

  &::after {
    content: '✓';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #ffffff;
  }
}
</style>
