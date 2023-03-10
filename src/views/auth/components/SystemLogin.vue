<script setup lang="ts">
import { useMessage } from 'naive-ui'
import { useSetLocalKey } from '@flypeng/tool/browser'
import Logo from '~/assets/svg/admire-logo.svg'
import { useVAdmireConfigStore } from '~/store'
import { AUTH_TOKEN } from '~/vadmire.config'
import { SignInModelData, getSignInAuthToken } from '~/requests'
import SytemPlatformAuth from './SytemPlatformAuth.vue'

const message = useMessage()
const router = useRouter()
const vadmireConfigStore = useVAdmireConfigStore()

// bundle sign in model data

const signInModelData = ref<SignInModelData>({ username: '', password: '' })
const isSignInLoading = ref(false)
// click sign in button
const getSignInAuth = async () => {
  isSignInLoading.value = true

  const { statusCode, statusText, data } = await getSignInAuthToken(signInModelData.value)

  if (statusCode !== 200) {
    message.error(statusText)
    return
  }

  message.success(statusText)
  useSetLocalKey(AUTH_TOKEN, data.accessToken)
  isSignInLoading.value = false

  setTimeout(() => {
    router.push({ name: 'SystemAboutIndex' })
  }, 1000)
}

// eslint-disable-next-line no-unused-vars
const switchSign = inject('switchSign') as (value: boolean) => void
</script>

<template>
  <div class="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-4">
      <div>
        <img
          :src="Logo"
          class="mx-auto h-10 w-auto"
          alt="System Logo"
        >
        <h2 class="text-center text-2xl font-bold">
          Sign in
        </h2>
        <p class="mt-2 text-center text-sm text-primary">
          Welcome to {{ vadmireConfigStore.name }}
        </p>
      </div>

      <div class="shadow px-8 py-6 rounded-md">
        <NForm
          ref="signUpRef"
          size="medium"
          label-width="auto"
          :model="signInModelData"
        >
          <NFormItem label="Username">
            <NInput
              v-model:value="signInModelData.username"
              placeholder="Please input your username"
            />
          </NFormItem>

          <NFormItem label="Password">
            <NInput
              v-model:value="signInModelData.password"
              placeholder="Please input your password"
            />
          </NFormItem>

          <div class="text-right cursor-pointer text-primary hover:text-primaryHover mb-2">
            <span class="cursor-pointer">Forgot your password</span>
          </div>

          <div class="space-y-3">
            <NButton
              block
              type="primary"
              :loading="isSignInLoading"
              @click="getSignInAuth"
            >
              <template #icon>
                <icon-mdi:shield-lock-outline />
              </template>
              <span>Sign in</span>
            </NButton>

            <NButton
              block
              secondary
              type="primary"
              @click="switchSign(false)"
            >
              <template #icon>
                <icon-mdi:sign-in />
              </template>
              <span>Sign up</span>
            </NButton>

            <!-- ???????????????????????????????????? -->
            <SytemPlatformAuth />
          </div>
        </NForm>
      </div>
    </div>
  </div>
</template>
