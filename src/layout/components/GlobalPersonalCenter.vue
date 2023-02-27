<script setup lang="ts">
import { DropdownOption } from 'naive-ui'
import AvatarLogo from '~/assets/img/avatar-logo.png'
import GlobalHeaderItem from './GlobalHeaderItem.vue'

const router = useRouter()
const vadmireConfigStore = useVAdmireConfigStore()

const options: DropdownOption[] = [
  {
    label: '退出系统',
    key: 'EXIT_SYSTEM',
  },
]
type OptionKeys = 'EXIT_SYSTEM'

const handleClickOption = async (key: OptionKeys) => {
  if (key === 'EXIT_SYSTEM') {
    // layout system custom logic
    await vadmireConfigStore.handleExitSystem()
    router.push({ name: 'SystemAuth' })
  }
}
</script>

<template>
  <GlobalHeaderItem class="text-sm">
    <NDropdown
      trigger="hover"
      :options="options"
      @select="handleClickOption"
    >
      <div class="flex items-center">
        <img
          class="w-6 h-6 mr-1 "
          :src="AvatarLogo"
          alt="Avatar Logo"
        >
        <span>超级管理员</span>
      </div>
    </NDropdown>
  </GlobalHeaderItem>
</template>
