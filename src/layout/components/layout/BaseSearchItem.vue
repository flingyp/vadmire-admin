<script setup lang="ts">
import { VAdmireMenuOption } from 'naive-ui'
import RenderIconify from '~/components/common/RenderIconify.vue'

interface BaseSearchItemProps {
  menu: VAdmireMenuOption
  level: number
}
const props = withDefaults(defineProps<BaseSearchItemProps>(), {
  level: 0,
})
const emit = defineEmits(['close'])

const routeKey = props.menu.key as string
const router = useRouter()
const routeMenuStore = useRouteMenuStore()

const navigatorTo = () => {
  if (props.menu.children && props.menu.children?.length > 0) return
  routeMenuStore.createTabMenuKey(routeKey)
  router.push({ name: routeKey })
  emit('close')
}
</script>

<template>
  <div
    class="cursor-pointer"
    :style="{paddingLeft: `${props.level * 16}px`}"
  >
    <div
      class="flex items-center hover:text-primary"
      @click="navigatorTo"
    >
      <RenderIconify
        :icon="menu.iconLabel"
        class="w-4 h-4 mr-1"
      />
      <span>{{ menu.label }}</span>
    </div>
    <div
      v-if="menu.children && menu.children?.length > 0"
      class="space-y-1 mt-1"
    >
      <BaseSearchItem
        v-for="item in menu.children"
        :key="item.key"
        :menu="item"
        :level="level + 1"
      />
    </div>
  </div>
</template>
