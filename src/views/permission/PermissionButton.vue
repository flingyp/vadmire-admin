<template>
  <div
    class="w-full h-40 flex flex-col items-center justify-center
    text-base space-y-4 rounded-sm border border-vBorderLight dark:border-vBorderDark"
  >
    <NButton
      v-permission="['sys:admin:*']"
      type="primary"
    >
      超级管理员按钮
    </NButton>
    <NButton
      v-permission="['sys:user:*']"
      type="primary"
    >
      普通管理员按钮
    </NButton>
  </div>
</template>
