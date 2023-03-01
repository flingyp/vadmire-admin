<script setup lang="ts">
interface BasicContainerBox {
  title: string
}
withDefaults(defineProps<BasicContainerBox>(), {
  title: '默认标题',
})
</script>

<template>
  <div>
    <NDivider dashed>
      {{ title }}
    </NDivider>
    <div class="w-full flex justify-center">
      <slot>默认内容</slot>
    </div>
  </div>
</template>
