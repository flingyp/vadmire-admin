<script setup lang="ts">
import { log } from 'console'
import { IS_RELOAD_CONTENT } from '~/vadmire.config'

const isReloadContent = inject<Ref<boolean>>(IS_RELOAD_CONTENT)

const route = useRoute()
const router = useRouter()
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
  const routerName = route.name as string
  if (key === 'RELOAD') {
    isReloadContent!.value = true
    setTimeout(() => {
      isReloadContent!.value = false
    }, 1000)
  } else if (key === 'CLOSE_CURRENT_TABMENU') {
    // click to delete tab menu
    // don't remove tab menu if tab menus have only one
    if (routeMenuStore.tabMenuKeys.length === 1) return
    // remove tab menu is current active menu and should do that navigator other route
    const deleteIndex = routeMenuStore.tabMenuKeys.indexOf(routerName)
    const navigatorIndex = deleteIndex === 0 ? 1 : deleteIndex - 1
    const navigatorMenu = routeMenuStore.vadmireTabMenu[navigatorIndex]
    router.push({ name: navigatorMenu.key as string })
    routeMenuStore.removeTabMenuKey(routerName)
  } else if (key === 'CLOSE_OTHER_TABMENU') {
    routeMenuStore.removeTabMenuKeyList(routerName)
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
