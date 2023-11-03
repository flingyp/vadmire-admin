<script setup lang="ts">
import { useRouteMenuStore } from '~/store';
import GlobalMenu from '~/layout/components/GlobalMenu.vue';

const routeMenuStore = useRouteMenuStore();
</script>

<template>
  <div>
    <GlobalMenu :menu-options="routeMenuStore.vadmireMenu" />
  </div>
</template>
