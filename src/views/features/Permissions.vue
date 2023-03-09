<script setup lang="ts"></script>

<template>
  <div class="space-y-2">
    <div class="border border-vBorderLight dark:border-vBorderDark rounded-sm p-2">
      <h1>VAdmire Admin 提供两种控制系统菜单路由的方式。</h1>
      <p class="mt-4 text-xs text-gray-400">
        注：可以再 vadmire.config.ts 文件中修改 handleRouteForm 变量的值来决定控制方式。
      </p>
    </div>

    <div class="border border-vBorderLight dark:border-vBorderDark rounded-sm p-2">
      <p class="text-base mb-2">
        第一种方式：WEB 路由控制
      </p>
      <div>WEB 路由形式，则由前端来定义异步路由表，根据权限来过滤路由（更加简便）</div>
    </div>

    <div class="border border-vBorderLight dark:border-vBorderDark rounded-sm p-2">
      <p class="text-base mb-2">
        第二种方式：SERVER 路由控制
      </p>
      <div>SERVER 路由形式，则由后端来定义异步路由表（更加灵活，完全可控制）</div>
    </div>

    <div class="border border-vBorderLight dark:border-vBorderDark rounded-sm p-2">
      <p class="text-base mb-2">
        v-permission 权限指令
      </p>
      <div>系统自定义了一个权限指令 v-permission 来控制是否显示和隐藏</div>
    </div>
  </div>
</template>
