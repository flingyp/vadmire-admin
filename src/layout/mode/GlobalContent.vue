<script setup lang="ts">
import GlobalTabBar from '~/layout/components/GlobalTabBar.vue'

const vadmireConfigStore = useVAdmireConfigStore()
</script>

<template>
  <GlobalTabBar />
  <div class="p-2">
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
      </Transition>
    </RouterView>
  </div>
</template>
