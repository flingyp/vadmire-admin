<script setup lang="ts">
import { DropdownOption } from 'naive-ui';
import AvatarLogo from '~/assets/img/avatar-logo.png';
import BaseHeaderItem from './BaseHeaderItem.vue';
import { LOGIN_ROUTE_NAME } from '~/common';

const router = useRouter();
const routeMenuStore = useRouteMenuStore();
const vadmireConfigStore = useVAdmireConfigStore();

const options: DropdownOption[] = [
  {
    label: '退出系统',
    key: 'EXIT_SYSTEM',
  },
];
type OptionKeys = 'EXIT_SYSTEM';

const handleClickOption = async (key: OptionKeys) => {
  if (key === 'EXIT_SYSTEM') {
    // layout system custom logic
    await vadmireConfigStore.handleExitSystem();
    router.replace({ name: LOGIN_ROUTE_NAME });
  }
};
</script>

<template>
  <BaseHeaderItem class="text-sm">
    <NDropdown trigger="hover" :options="options" @select="handleClickOption">
      <div class="flex items-center">
        <img class="w-6 h-6 mr-1" :src="AvatarLogo" alt="Avatar Logo" />
        <span class="truncate">{{ routeMenuStore.account.nickname || '管理员' }}</span>
      </div>
    </NDropdown>
  </BaseHeaderItem>
</template>
