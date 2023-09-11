<script setup lang="ts">
import { AuthorizedProps } from '~/types'

defineOptions({ name: 'Authorize' })
const props = defineProps<AuthorizedProps>()

const permission = toRef(props, 'permission')
const { isHavePermission } = usePermission(permission.value)
</script>

<template>
  <slot v-if="isHavePermission" />
</template>
