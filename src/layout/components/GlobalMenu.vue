<script setup lang="ts">
import { MenuOption } from 'naive-ui'

const route = useRoute()
const router = useRouter()
const routeMenuStore = useRouteMenuStore()
const vadmireConfigStore = useVAdmireConfigStore()

interface GlobalMenuProps {
  mode?: 'vertical' | 'horizontal'
  menuOptions: MenuOption[]
}

withDefaults(defineProps<GlobalMenuProps>(), {
  mode: 'vertical',
  menuOptions: () => [],
})

// route key whether include from menu
const isIncludeMenuByKey = (key: string, menu: MenuOption): boolean => {
  if (key === menu.key) return true
  if (menu.children) return menu.children.some((item) => isIncludeMenuByKey(key, item))
  return false
}

// get breadcrumb menu
const getBreadCrumbMenu = (key: string, menu: MenuOption) => {
  const breadCrumbMenu: MenuOption[] = []
  breadCrumbMenu.push(menu)
  const getMenuByKey = (item: MenuOption) => {
    if (item.children) {
      item.children.forEach((child) => {
        if (isIncludeMenuByKey(key, child)) {
          breadCrumbMenu.push(child)
          getMenuByKey(child)
        }
      })
    }
  }
  getMenuByKey(menu)
  return breadCrumbMenu
}

// generate breadcrumb menu
const createBreadCrumbMenu = (key: string, menus: MenuOption[]) => {
  let parentMenu: MenuOption = {}
  for (let i = 0; i < menus.length; i++) {
    const isIncludeRouteKey = isIncludeMenuByKey(key, menus[i])
    if (isIncludeRouteKey) parentMenu = menus[i]
  }
  return getBreadCrumbMenu(key, parentMenu)
}

// watch the route and change current checked menu
const routeKey = ref(route.name as string)
watchEffect(() => {
  // set title content
  const title = `${route.meta.text} | ${vadmireConfigStore.name}`
  document.querySelector('title')!.innerHTML = title
  routeKey.value = route.name as string

  // generate breadcrumb menu
  // @ts-ignore
  routeMenuStore.breadCrumbMenus = createBreadCrumbMenu(routeKey.value, routeMenuStore.vadmireMenu)
})

// click menu
const clickMenu = (key: string, menu: MenuOption) => {
  if (menu.link === 'EXTERNAL_LINK' && menu.url) {
    window.open(menu.url as string)
  } else {
    router.push({ name: key })
  }
}
</script>

<template>
  <NMenu
    :value="routeKey"
    :mode="mode"
    :options="menuOptions"
    @update:value="clickMenu"
  />
</template>

<style lang="scss">
/* menu icon center */
div.n-menu-item-content--collapsed {
  padding-left: 17px !important;
}
</style>
