<script setup lang="ts">
import Authorized from '~/components/common/Authorized.vue'

</script>

<template>
  <div
    class="w-full h-40 flex flex-col items-center justify-center text-base
    space-y-4 rounded-sm border border-vBorderLight dark:border-vBorderDark"
  >
    <div class="text-sm">
      按钮级别权限提供三种方式: 指定权限、组件权限和钩子函数
    </div>

    <div>
      <NButton
        v-permission="['sys:admin:*']"
        type="primary"
      >
        指令权限-超级管理员按钮
      </NButton>
      <NButton
        v-permission="['sys:user:*']"
        type="primary"
      >
        指令权限-普通管理员按钮
      </NButton>
    </div>

    <div>
      <Authorized :permission="['sys:admin:*']">
        <NButton type="primary">
          组件权限-超级管理员按钮
        </NButton>
      </Authorized>
      <Authorized :permission="['sys:user:*']">
        <NButton type="primary">
          组件权限-普通管理员按钮
        </NButton>
      </Authorized>
    </div>
  </div>
</template>
