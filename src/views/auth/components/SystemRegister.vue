<script setup lang="ts">
import SytemPlatformAuth from './SytemPlatformAuth.vue'
import SystemLogo from '~/assets/img/admire-logo.png'
import { useVAdmireConfigStore } from '~/store'

const vadmireConfigStore = useVAdmireConfigStore()

interface SignUpModelData {
  username: string
  password: string
}
const signUpModel = ref<SignUpModelData>()

// eslint-disable-next-line no-unused-vars
const switchSign = inject('switchSign') as (value: boolean) => void
</script>

<template>
  <div class="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-4">
      <div>
        <img
          :src="SystemLogo"
          class="mx-auto h-20 w-auto"
          alt="System Logo"
        >
        <h2 class="text-center text-2xl font-bold">
          Sign up
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          <a
            href="#"
            class="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Welcome to {{ vadmireConfigStore.name }}
          </a>
        </p>
      </div>

      <div class="shadow px-8 py-6 rounded-md">
        <NForm
          ref="signUpRef"
          size="medium"
          label-width="auto"
          :model="signUpModel"
        >
          <NFormItem label="Username">
            <NInput placeholder="Please input your username" />
          </NFormItem>

          <NFormItem label="Password">
            <NInput placeholder="Please input your password" />
          </NFormItem>

          <div class="text-right cursor-pointer text-indigo-500 hover:text-indigo-700 mb-2">
            <span class="cursor-pointer">Forgot your password</span>
          </div>

          <div class="space-y-3">
            <NButton
              block
              type="primary"
            >
              <template #icon>
                <icon-mdi:shield-lock-outline />
              </template>
              <span>Sign up</span>
            </NButton>

            <NButton
              block
              secondary
              type="primary"
              @click="switchSign(true)"
            >
              <template #icon>
                <icon-mdi:sign-in />
              </template>
              <span>Sign in</span>
            </NButton>
          </div>
        </NForm>

        <!-- 第三方平台的认证登录入口 -->
        <SytemPlatformAuth />
      </div>
    </div>
  </div>
</template>
