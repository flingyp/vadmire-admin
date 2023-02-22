<script setup lang="ts">
import { MenuOption } from 'naive-ui'

const route = useRoute()
const router = useRouter()
const vadmireStore = useVAdmireStore()

interface GlobalMenuProps {
  mode?: 'vertical' | 'horizontal'
  menuOptions: MenuOption[]
}

const props = withDefaults(defineProps<GlobalMenuProps>(), {
  mode: 'vertical',
  menuOptions: () => [],
})

// watch the route and change current checked menu
const routeKey = ref(route.name as string)
watchEffect(() => {
  const title = `${route.meta.text} | ${vadmireStore.name}`
  document.querySelector('title')!.innerHTML = title
  routeKey.value = route.name as string
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
