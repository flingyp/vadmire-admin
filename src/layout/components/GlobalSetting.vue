<script setup lang="ts">
import { useMessage } from 'naive-ui'
import { useCopyContent, useDeepClone, useSetLocalKey } from '@flypeng/tool/browser'
import {
  LayoutMode, PRIMARY_COLOR_KEY, defaultVAdmireConfig, VAdmireConfig, LOCAL_SYSTEM_KEY,
} from '~/vadmire.config'
import BaseSettingContainer from './setting/BaseSettingContainer.vue'

const message = useMessage()
const { toggleDark } = useTheme()
const vadmireConfigStore = useVAdmireConfigStore()

// theme mode
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

// layout list
interface LayoutItem {
  key: LayoutMode,
  value: string
}
const systemLayoutOption: LayoutItem[] = [
  {
    key: 'SIDER_MENU',
    value: '左侧菜单',
  },
  {
    key: 'TOP_MENU',
    value: '顶部菜单',
  },
  {
    key: 'SIDER_MIX_MENU',
    value: '顶部混合菜单',
  },
]
const changeLayoutMode = (mode: LayoutMode) => {
  vadmireConfigStore.layoutMode = mode
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

// fixed tab bar
const updateFixedTabBar = (value: boolean) => {
  vadmireConfigStore.fixedTabBar = value
}

// watch vadmireConfigStore.$state config change
watchEffect(() => {
  const vadmireConfig = vadmireConfigStore.$state
  useSetLocalKey(LOCAL_SYSTEM_KEY, vadmireConfig)
})
</script>

<template>
  <NDrawer
    v-model:show="vadmireConfigStore.isScaleDrawer"
    :width="380"
    native-scrollbar
    placement="right"
  >
    <NDrawerContent
      title="系统设置"
      closable
    >
      <BaseSettingContainer title="系统名称">
        <NInput
          v-model:value="vadmireConfigStore.name"
          type="text"
          placeholder="系统名称"
          class="w-32 text-center"
        />
      </BaseSettingContainer>

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

      <BaseSettingContainer title="布局模式">
        <div class="w-full grid grid-cols-1 space-y-2">
          <NButton
            v-for="item in systemLayoutOption"
            :key="item.key"
            :type="vadmireConfigStore.layoutMode === item.key ? 'primary' : 'default'"
            @click="changeLayoutMode(item.key)"
          >
            {{ item.value }}
          </NButton>
        </div>
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

      <BaseSettingContainer title="系统配置">
        <div class="w-full grid grid-cols-1 gap-y-2">
          <div class="w-full flex justify-between items-center">
            <span class="w-32 text-start mr-1 truncate">固定标签栏</span>
            <NSwitch
              v-model:value="vadmireConfigStore.fixedTabBar"
              @update:value="updateFixedTabBar"
            />
          </div>
          <div class="w-full flex justify-between items-center">
            <span class="w-32 text-start mr-1 truncate">顶部栏高度</span>
            <NInputNumber
              v-model:value="vadmireConfigStore.headerHeight"
              class="flex-1"
              placeholder="Min 44, Max 84"
              :min="44"
              :max="74"
            />
          </div>
          <div class="w-full flex justify-between items-center">
            <span class="w-32 text-start mr-1 truncate">侧边栏宽度</span>
            <NInputNumber
              v-model:value="vadmireConfigStore.siderWidth"
              class="flex-1"
              placeholder="Min 220, Max 272"
              :min="220"
              :max="272"
            />
          </div>
          <div class="w-full flex justify-between items-center">
            <span class="w-32 text-start mr-1 truncate">底部栏高度</span>
            <NInputNumber
              v-model:value="vadmireConfigStore.footerHeight"
              class="flex-1"
              placeholder="Min 44, Max 84"
              :min="44"
              :max="84"
            />
          </div>
          <div class="w-full flex justify-between items-center">
            <span class="w-32 text-start mr-1 truncate">标签栏高度</span>
            <NInputNumber
              v-model:value="vadmireConfigStore.tabBarHeight"
              class="flex-1"
              placeholder="Min 40, Max 60"
              :min="40"
              :max="60"
            />
          </div>
          <div class="w-full flex justify-between items-center">
            <span class="w-32 text-start mr-1 truncate">过渡切换</span>
            <NSelect
              v-model:value="vadmireConfigStore.pageTransition"
              class="flex-1"
              :options="pageSwitchTransitionOption"
            />
          </div>
        </div>
      </BaseSettingContainer>

      <BaseSettingContainer title="拷贝系统配置">
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
