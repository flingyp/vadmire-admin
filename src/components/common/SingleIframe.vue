<script setup lang="ts">
defineOptions({ name: 'SingleIframe' })

const route = useRoute()
const { contentContainerHeight } = storeToRefs(useVAdmireConfigStore())
const iframeLink = ref(route.meta.url || '')
</script>

<template>
  <iframe
    class="!p-0"
    :style="{height: contentContainerHeight}"
    :src="iframeLink"
    allowpaymentrequest
    allowfullscreen
    importance="high"
    width="100%"
    height="100%"
  />
</template>
