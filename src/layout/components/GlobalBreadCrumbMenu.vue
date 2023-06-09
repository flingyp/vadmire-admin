<script setup lang="ts">
import { useDeepClone } from '@flypeng/tool/browser'
import { VAdmireMenuOption } from 'naive-ui'
import { transformMenu } from '~/utils'

const { t } = useI18n()
const router = useRouter()
const routeMenuStore = useRouteMenuStore()
const { breadCrumbMenus } = storeToRefs(routeMenuStore)

const transformMenuList = computed(() => {
  const menuOptions = useDeepClone(breadCrumbMenus.value) as VAdmireMenuOption[]
  const i18nMenu = menuOptions.map((menu) => transformMenu(menu, t))
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
