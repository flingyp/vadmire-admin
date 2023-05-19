<script setup lang="ts">
const {
  fixedTabBar, isVisibleFooter, headerHeight, siderWidth, footerHeight, tabBarHeight, pageTransition,
} = storeToRefs(useVAdmireConfigStore())

// page switch transition options
const pageSwitchTransitionOption = [{
  label: '消退',
  value: 'fade',
},
{
  label: '滑动消退',
  value: 'fade-slide',
},
{
  label: '向下滑动消退',
  value: 'fade-bottom',
},
{
  label: '向上滑动消退',
  value: 'fade-top',
},
{
  label: '放大消退',
  value: 'fade-scale',
},
{
  label: '缩放消退',
  value: 'zoom-fade',
},
{
  label: '缩放弹出',
  value: 'zoom-out',
}]

// fixed tab bar
const updateFixedTabBar = (value: boolean) => {
  fixedTabBar.value = value
}

// is visibility footer
const updateVisibilityFooter = (value: boolean) => {
  isVisibleFooter.value = value
}
</script>

<template>
  <div class="w-full grid grid-cols-1 gap-y-2">
    <div class="w-full flex justify-between items-center">
      <span class="w-32 text-start mr-1 truncate">固定标签栏</span>
      <NSwitch
        v-model:value="fixedTabBar"
        @update:value="updateFixedTabBar"
      />
    </div>
    <div class="w-full flex justify-between items-center">
      <span class="w-32 text-start mr-1 truncate">显示底部栏</span>
      <NSwitch
        v-model:value="isVisibleFooter"
        @update:value="updateVisibilityFooter"
      />
    </div>
    <div class="w-full flex justify-between items-center">
      <span class="w-32 text-start mr-1 truncate">顶部栏高度</span>
      <NInputNumber
        v-model:value="headerHeight"
        class="flex-1"
        placeholder="Min 44, Max 84"
        :min="44"
        :max="74"
      />
    </div>
    <div class="w-full flex justify-between items-center">
      <span class="w-32 text-start mr-1 truncate">侧边栏宽度</span>
      <NInputNumber
        v-model:value="siderWidth"
        class="flex-1"
        placeholder="Min 220, Max 272"
        :min="220"
        :max="272"
      />
    </div>
    <div class="w-full flex justify-between items-center">
      <span class="w-32 text-start mr-1 truncate">底部栏高度</span>
      <NInputNumber
        v-model:value="footerHeight"
        class="flex-1"
        placeholder="Min 44, Max 84"
        :min="44"
        :max="84"
      />
    </div>
    <div class="w-full flex justify-between items-center">
      <span class="w-32 text-start mr-1 truncate">标签栏高度</span>
      <NInputNumber
        v-model:value="tabBarHeight"
        class="flex-1"
        placeholder="Min 40, Max 60"
        :min="40"
        :max="60"
      />
    </div>
    <div class="w-full flex justify-between items-center">
      <span class="w-32 text-start mr-1 truncate">过渡切换</span>
      <NSelect
        v-model:value="pageTransition"
        class="flex-1"
        :options="pageSwitchTransitionOption"
      />
    </div>
  </div>
</template>
