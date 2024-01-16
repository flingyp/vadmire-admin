<script setup lang="ts">
import { IS_RELOAD_CONTENT } from '~/common';

const isReloadContent = inject<Ref<boolean>>(IS_RELOAD_CONTENT);
const { setLoading: setGlobalLoading } = inject('loading') as { setLoading: (value: boolean) => void };

const route = useRoute();
const router = useRouter();
const routeMenuStore = useRouteMenuStore();
const { tabMenuKeys, vadmireTabMenu } = storeToRefs(routeMenuStore);

const isDisabled = computed(() => {
  if (routeMenuStore.tabMenuKeys.length <= 1) return true;
  return false;
});
const tabBarSettingOption = computed(() => [
  {
    label: '重新加载页面',
    key: 'RELOAD',
  },
  {
    label: '重新加载系统',
    key: 'RELOAD_SYSTEM',
  },
  {
    label: '关闭当前标签',
    key: 'CLOSE_CURRENT_TABMENU',
    disabled: isDisabled.value,
  },
  {
    label: '关闭其他标签',
    key: 'CLOSE_OTHER_TABMENU',
    disabled: isDisabled.value,
  },
]);

type TabBarSettingKey = 'RELOAD' | 'RELOAD_SYSTEM' | 'CLOSE_CURRENT_TABMENU' | 'CLOSE_OTHER_TABMENU';
const clickTabBarSetting = (key: TabBarSettingKey) => {
  const routerName = route.name as string;
  if (key === 'RELOAD') {
    isReloadContent!.value = true;
    setTimeout(() => {
      isReloadContent!.value = false;
    }, 1000);
  } else if (key === 'RELOAD_SYSTEM') {
    setGlobalLoading(true);
    setTimeout(() => {
      setGlobalLoading(false);
    }, 1000);
  } else if (key === 'CLOSE_CURRENT_TABMENU') {
    // click to delete tab menu
    // don't remove tab menu if tab menus have only one
    if (tabMenuKeys.value.length === 1) return;
    // remove tab menu is current active menu and should do that navigator other route
    const deleteIndex = tabMenuKeys.value.indexOf(routerName);
    const navigatorIndex = deleteIndex === 0 ? 1 : deleteIndex - 1;
    const navigatorMenu = vadmireTabMenu.value[navigatorIndex];
    router.push({ name: navigatorMenu.key as string });
    routeMenuStore.removeTabMenuKey(routerName);
  } else if (key === 'CLOSE_OTHER_TABMENU') {
    routeMenuStore.removeTabMenuKeyList(routerName);
  }
};
</script>

<template>
  <NDropdown trigger="hover" :options="tabBarSettingOption" @select="clickTabBarSetting">
    <icon-uil:align-justify class="cursor-pointer" />
  </NDropdown>
</template>
