<script setup lang="ts">
import { Icon } from '@iconify/vue'
import RenderIconify from '~/components/common/RenderIconify.vue'

const dynamicIconList = ref<string[]>([
  'flat-color-icons:about',
  'flat-color-icons:accept-database',
  'flat-color-icons:add-column',
  'flat-color-icons:add-database',
  'flat-color-icons:add-image',
  'flat-color-icons:add-row',
  'flat-color-icons:address-book',
  'flat-color-icons:advance',
  'flat-color-icons:advertising',
  'flat-color-icons:alarm-clock',
  'flat-color-icons:alphabetical-sorting-az',
  'flat-color-icons:android-os',
  'flat-color-icons:automatic',
  'flat-color-icons:automotive',
  'flat-color-icons:bad-decision',
  'flat-color-icons:businessman',
  'flat-color-icons:businesswoman',
  'flat-color-icons:butting-in',
  'flat-color-icons:camcorder-pro',
  'flat-color-icons:camera',
])
</script>

<template>
  <div class="space-y-2">
    <div class="border border-vBorderLight dark:border-vBorderDark p-2 rounded-sm">
      <p class="mb-4">
        第一种方式：基于 unplugin-icons 使用静态图标
      </p>
      <div class="grid grid-cols-4 md:grid-cols-5 justify-center text-xl justify-items-center items-center gap-4">
        <icon-openmoji:apple />
        <icon-openmoji:1st-place-medal />
        <icon-openmoji:2nd-place-medal />
        <icon-openmoji:3rd-place-medal />
        <icon-openmoji:a-button-blood-type />
        <icon-openmoji:ab-button-blood-type />
        <icon-openmoji:abacus />
        <icon-openmoji:alarm-clock />
        <icon-openmoji:angry-face />
        <icon-openmoji:annoyed-face-with-tongue />
      </div>
    </div>

    <div class="border border-vBorderLight dark:border-vBorderDark p-2 rounded-sm">
      <p class="mb-4">
        第二种方式：基于 @iconify/vue 使用动态图标
      </p>
      <div class="grid grid-cols-4 md:grid-cols-5 justify-center text-xl justify-items-center items-center gap-4">
        <Icon
          v-for="item in dynamicIconList"
          :key="item"
          :icon="item"
          class="text-2xl"
        />
      </div>
      <p class="mt-8 text-xs text-gray-400">
        注：VAdmire Admin 提供了 useRenderIcon, 使用Vue提供的渲染函数 h() 来渲染图标
      </p>
    </div>

    <div class="border border-vBorderLight dark:border-vBorderDark p-2 rounded-sm">
      <p class="mb-4">
        第三种方式：基于自定义组件 RenderIconify 使用动态图标
      </p>
      <div class="grid grid-cols-4 md:grid-cols-5 justify-center text-xl justify-items-center items-center gap-4">
        <RenderIconify
          v-for="item in dynamicIconList"
          :key="item"
          :icon="item"
          class="text-2xl"
        />
      </div>
      <p class="mt-8 text-xs text-gray-400">
        注：VAdmire Admin 提供了 RenderIconify 组件来动态渲染图标
      </p>
    </div>
  </div>
</template>
