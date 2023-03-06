<script setup lang="ts">
import { IS_RELOAD_CONTENT } from '~/vadmire.config'
import GlobalTabBar from '~/layout/components/GlobalTabBar.vue'

const vadmireConfigStore = useVAdmireConfigStore()

const isReloadContent = ref<boolean>(false)
provide(IS_RELOAD_CONTENT, isReloadContent)
</script>

<template>
  <GlobalTabBar
    :class="[vadmireConfigStore.fixedTabBar ? 'sticky z-50 top-0 bg-vPageBgColor dark:bg-vPageBgDarkColor': 'static']"
  />
  <div
    v-if="!isReloadContent"
    class="p-2"
  >
    <RouterView v-slot="{Component, route}">
      <Transition
        :name="vadmireConfigStore.pageTransition"
        mode="out-in"
        appear
      >
        <KeepAlive>
          <Component
            :is="Component"
            :key="route.path"
          />
        </KeepAlive>
        <!-- TODO: 不使用KeepAlive缓存 -->
      </Transition>
    </RouterView>
  </div>
  <div
    v-else
    class="w-full flex items-center justify-center"
    :style="{height: vadmireConfigStore.contentContainerHeight}"
  >
    <NSpin size="medium">
      <template #description>
        重新加载中...
      </template>
    </NSpin>
  </div>
</template>
