<script setup lang="ts">
const route = useRoute()
const vadmireConfigStore = useVAdmireConfigStore()

const iframeLink = ref(route.meta.url)
const iframeHeight = computed(() => vadmireConfigStore.contentContainerHeight)
</script>

<template>
  <iframe
    class="!p-0"
    :style="{height: iframeHeight}"
    :src="iframeLink"
    allowpaymentrequest
    allowfullscreen
    importance="high"
    width="100%"
    height="100%"
  />
</template>
