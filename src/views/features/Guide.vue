<script setup lang="ts">
const { isDriver, start } = useDriver(
  [
    {
      element: '#driver-step-1',
      popover: {
        title: '系统菜单',
        description: '菜单需要在 router/modules 中配置路由',
        position: 'right',
        offset: 80,
      },
    },
    {
      element: '#driver-step-2',
      popover: {
        title: '系统配置',
        description: '系统个性化配置',
        position: 'bottom-center',
        offset: 20,
      },
    },
  ],
)

onMounted(() => {
  // Start the introduction
  isDriver.value && start()
})
</script>

<template>
  <div class="w-full h-40 bg-primary rounded-sm flex items-center justify-center text-base text-white">
    引导页
  </div>
</template>
