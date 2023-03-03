<script setup lang="ts">
import { IS_RELOAD_CONTENT } from '~/vadmire.config'

const isReloadContent = inject<Ref<boolean>>(IS_RELOAD_CONTENT)

console.log('isReloadContent->', isReloadContent?.value)

const routeMenuStore = useRouteMenuStore()

const isDisabled = computed(() => {
  if (routeMenuStore.tabMenuKeys.length <= 1) return true
  return false
})
const tabBarSettingOption = computed(() => [
  {
    label: '重新加载页面',
    key: 'RELOAD',
  },
  {
    label: '关闭当前标签',
    key: 'CLOSE_CURRENT_TABMENU',
    disabled: isDisabled.value,
  },
  {
    label: '关闭其他标签',
    key: 'CLOSE_OTHER_TABMENU',
    disabled: isDisabled.value,
  },
])

type TabBarSettingKey = 'RELOAD' | 'CLOSE_CURRENT_TABMENU' | 'CLOSE_OTHER_TABMENU'
const clickTabBarSetting = (key: TabBarSettingKey) => {
  if (key === 'RELOAD') {
    isReloadContent!.value = true
    setTimeout(() => {
      isReloadContent!.value = false
    }, 1000)
  } else if (key === 'CLOSE_CURRENT_TABMENU') {
    console.log('CLOSE_CURRENT_TABMENU')
  } else if (key === 'CLOSE_OTHER_TABMENU') {
    console.log('CLOSE_OTHER_TABMENU')
  }
}
</script>

<template>
  <NDropdown
    trigger="hover"
    :options="tabBarSettingOption"
    @select="clickTabBarSetting"
  >
    <icon-uil:align-justify class="cursor-pointer" />
  </NDropdown>
</template>
