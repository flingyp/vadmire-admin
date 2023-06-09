<script setup lang="ts">
import { VAdmireMenuOption } from 'naive-ui'
import RenderIconify from '~/components/common/RenderIconify.vue'

interface BaseSearchItemProps {
  menu: VAdmireMenuOption
}
const props = defineProps<BaseSearchItemProps>()
const emit = defineEmits(['close'])

const router = useRouter()

const navigatorTo = () => {
  router.push({ name: (props.menu.key as string) })
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
