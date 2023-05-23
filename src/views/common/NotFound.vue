<script setup lang="ts">
import NotFoundIcon from '~/assets/svg/not-found.svg'
import { REDIRECT_404_ROUTE_NAME } from '~/vadmire.config'

const router = useRouter()
const vadmireConfigStore = useVAdmireConfigStore()
const containerHeight = computed(() => vadmireConfigStore.contentContainerHeight)
</script>

<template>
  <div
    class="flex flex-col justify-center items-center"
    :style="{height: containerHeight}"
  >
    <img
      class="w-[500px] h-64"
      :src="NotFoundIcon"
      alt="Not Found"
    >
    <NButton
      type="primary"
      class="w-60 mt-8"
      @click="router.push({name: REDIRECT_404_ROUTE_NAME, replace: true})"
    >
      Go Home
    </NButton>
  </div>
</template>
