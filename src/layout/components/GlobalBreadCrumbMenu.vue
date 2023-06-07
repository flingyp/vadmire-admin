<script setup lang="ts">
import { useDeepClone } from '@flypeng/tool/browser'
import { MenuOption } from 'naive-ui'

const { t } = useI18n()
const router = useRouter()
const routeMenuStore = useRouteMenuStore()
const { breadCrumbMenus } = storeToRefs(routeMenuStore)

// TODO: 国际化文本代码抽离优化
const transformMenu = (menu: MenuOption) => {
  const newMenu = useDeepClone(menu) as MenuOption
  if (newMenu.children) {
    newMenu.children = newMenu.children.map((item) => transformMenu(item))
  }
  let menuText = menu.label as string
  const internationalReg = /^\$t\(['"]([^']+)['"]\)$/
  if (internationalReg.test(menuText)) {
    const key = menuText.match(internationalReg)![1]
    menuText = t(key)
  }
  newMenu.label = menuText
  return newMenu
}

const transformMenuList = computed(() => {
  const menuOptions = useDeepClone(breadCrumbMenus.value) as MenuOption[]
  const i18nMenu = menuOptions.map((menu) => transformMenu(menu))
  return i18nMenu
})

// click breadcrumb menu
const clickBreadCrumbItem = (key: string) => {
  // create tab menu key
  routeMenuStore.createTabMenuKey(key)

  router.push({ name: key })
}
</script>

<template>
  <div class="h-full flex items-center">
    <NBreadcrumb>
      <NBreadcrumbItem
        v-for="item in transformMenuList"
        :key="item.key"
      >
        <NDropdown
          :options="item.children"
          @select="clickBreadCrumbItem"
        >
          <span>{{ item.label }}</span>
        </NDropdown>
      </NBreadcrumbItem>
    </NBreadcrumb>
  </div>
</template>
