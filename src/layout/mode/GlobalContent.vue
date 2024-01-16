<script setup lang="ts">
import { IS_RELOAD_CONTENT } from '~/common';
import GlobalTabBar from '~/layout/components/GlobalTabBar.vue';

const vadmireConfigStore = useVAdmireConfigStore();

const isReloadContent = ref<boolean>(false);
provide(IS_RELOAD_CONTENT, isReloadContent);
</script>

<template>
  <GlobalTabBar
    v-if="vadmireConfigStore.isVisibleTabBar"
    :class="[vadmireConfigStore.fixedTabBar ? 'sticky z-10 top-0 bg-vPageBgColor dark:bg-vPageBgDarkColor' : 'static']"
  />
  <div v-if="!isReloadContent">
    <RouterView v-slot="{ Component, route }">
      <Transition :name="vadmireConfigStore.pageTransition" mode="out-in" appear>
        <KeepAlive v-if="(route.meta.cache ?? true) || route.meta.cache">
          <Component :is="Component" :key="route.path" class="p-2" />
        </KeepAlive>
        <component :is="Component" v-else :key="route.path" class="p-2" />
      </Transition>
    </RouterView>
  </div>
  <div
    v-else
    class="w-full flex items-center justify-center"
    :style="{ height: vadmireConfigStore.contentContainerHeight }"
  >
    <NSpin size="medium">
      <template #description> 重新加载中... </template>
    </NSpin>
  </div>

  <NBackTop :right="40">
    <div class="text-xl">
      <icon-ph:rocket-bold />
    </div>
  </NBackTop>
</template>
