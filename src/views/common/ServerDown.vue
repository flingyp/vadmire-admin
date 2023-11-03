<script setup lang="ts">
import ServerDownIcon from '~/assets/svg/server-down.svg';
import { SYSTEM_HOME_ROUTE_NAME } from '~/vadmire.config';

const router = useRouter();
const vadmireConfigStore = useVAdmireConfigStore();
const containerHeight = computed(() => vadmireConfigStore.contentContainerHeight);
</script>

<template>
  <div class="flex flex-col justify-center items-center" :style="{ height: containerHeight }">
    <img class="w-[500px] h-64" :src="ServerDownIcon" alt="Not Found" />
    <NButton type="primary" class="w-60 mt-8" @click="router.push({ name: SYSTEM_HOME_ROUTE_NAME, replace: true })">
      Go Home
    </NButton>
  </div>
</template>
