<script setup lang="ts">
import { LayoutMode } from '~/vadmire.config'

interface BaseLayoutItemProps {
  mode: LayoutMode
}

defineProps<BaseLayoutItemProps>()
defineEmits(['updateLayoutMode'])

const { layoutMode } = storeToRefs(useVAdmireConfigStore())
</script>

<template>
  <div
    class="
      p-1 h-16 border rounded transition duration-500
      hover:border-primaryHover dark:hover:border-primaryHover
    "
    :class="{
      'border-primarySuppl dark:border-primarySuppl': mode === layoutMode,
      'border-vBorderLight dark:border-vBorderDark': mode !== layoutMode
    }"
  >
    <div
      v-if="mode === 'SIDER_MENU'"
      class="relative h-full cursor-pointer"
      @click="$emit('updateLayoutMode', mode)"
    >
      <div class="absolute w-2.5 h-full left-0 bg-primary rounded-sm opacity-80" />
      <div class="absolute w-5/6 right-0 h-2 bg-primary rounded-sm opacity-60" />
      <div class="absolute w-5/6 h-[calc(100%-8px)] top-2.5 right-0 bg-primary rounded-sm opacity-30" />
    </div>

    <div
      v-if="mode === 'TOP_MENU'"
      class="relative h-full cursor-pointer"
      @click="$emit('updateLayoutMode', mode)"
    >
      <div class="absolute w-full h-2 bg-primary rounded-sm opacity-60" />
      <div class="absolute w-full h-[calc(100%-8px)] top-2.5 right-0 bg-primary rounded-sm opacity-30" />
    </div>

    <div
      v-if="mode === 'SIDER_MIX_MENU'"
      class="relative h-full cursor-pointer"
      @click="$emit('updateLayoutMode', mode)"
    >
      <div class="absolute w-2.5 h-[calc(100%-8px)] top-2.5 left-0 bg-primary rounded-sm opacity-80" />
      <div class="absolute w-full h-2 bg-primary rounded-sm opacity-60" />
      <div class="absolute w-[calc(100%-12px)] h-[calc(100%-8px)] top-2.5 left-3 bg-primary rounded-sm opacity-30" />
    </div>
  </div>
</template>
