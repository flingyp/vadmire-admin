<template>
  <div class="h-full flex items-center">
    <NBreadcrumb>
      <NBreadcrumbItem
        v-for="item in routeMenuStore.breadCrumbMenus"
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

<script setup lang="ts">
const router = useRouter()
const routeMenuStore = useRouteMenuStore()

// click breadcrumb menu
const clickBreadCrumbItem = (key: string) => {
  // create tab menu key
  routeMenuStore.createTabMenuKey(key)

  router.push({ name: key })
}
</script>
