<script setup lang="ts">
import { VAdmireMenuOption } from 'naive-ui'
import RenderIconify from '~/components/common/RenderIconify.vue'

interface BaseSearchItemProps {
  menu: VAdmireMenuOption
}
const props = defineProps<BaseSearchItemProps>()
const emit = defineEmits(['close'])

const routeKey = props.menu.key as string
const router = useRouter()
const routeMenuStore = useRouteMenuStore()

const navigatorTo = () => {
  routeMenuStore.createTabMenuKey(routeKey)
  router.push({ name: routeKey })
  emit('close')
}
</script>

<template>
  <div
    class="flex items-center p-1 cursor-pointer hover:text-primary"
    @click="navigatorTo"
  >
    <RenderIconify
      :icon="menu.iconLabel"
      class="w-4 h-4 mr-1"
    />
    <span>{{ menu.label }}</span>
  </div>
</template>
