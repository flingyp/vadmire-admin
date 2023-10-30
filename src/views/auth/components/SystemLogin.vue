<script setup lang="ts">
import SystemPlatformAuth from './SystemPlatformAuth.vue'
import { useVAdmireConfigStore } from '~/store'
import { AUTH_TOKEN, SYSTEM_HOME_ROUTE_NAME } from '~/vadmire.config'
import { SignInModelData, getSignInAuthToken } from '~/requests'
import Logo from '~/assets/svg/admire-logo.svg'
import { routeGenerateMenuProcess } from '~/router/global-route-guard'

const router = useRouter()
const routeMenuStore = useRouteMenuStore()
const vadmireConfigStore = useVAdmireConfigStore()

const { success, error } = useNaiveMessage()
const { isLoading: isSignInLoading, setLoading } = useLoading()

// bundle sign in model data
const signInModelData = ref<SignInModelData>({ username: '', password: '' })

// click sign in button
const getSignInAuth = async () => {
  setLoading(true)

  const { statusCode, statusText, data } = await getSignInAuthToken(signInModelData.value)

  if (statusCode !== 200) {
    error(statusText)
    setLoading(false)
    return
  }
  success(statusText)

  setTimeout(async () => {
    sessionStorage.setItem(AUTH_TOKEN, data.accessToken)

    // get user info and async routes to mount vue-router
    await routeGenerateMenuProcess(router, routeMenuStore)
    routeMenuStore.isMountedRoute = true

    router.push({ name: SYSTEM_HOME_ROUTE_NAME })

    setLoading(false)
  }, 1000)
}
const keyboardLoginEvent = async (event: KeyboardEvent) => {
  if (event.key === 'Enter') await getSignInAuth()
}
onMounted(() => {
  window.addEventListener('keydown', keyboardLoginEvent)
})
onUnmounted(() => {
  window.removeEventListener('keydown', keyboardLoginEvent)
})

// eslint-disable-next-line no-unused-vars
const switchSign = inject('switchSign') as (value: boolean) => void
</script>

<template>
  <div class="flex items-center justify-center shadow rounded py-12 px-4 sm:px-6 lg:px-12">
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

      <div class="px-8 py-6 rounded-md">
        <NForm
          ref="signInRef"
          size="medium"
          label-width="auto"
          :model="signInModelData"
        >
          <NFormItem label="Username">
            <NInput
              v-model:value="signInModelData.username"
              placeholder="Default account: admin | user"
            />
          </NFormItem>

          <NFormItem label="Password">
            <NInput
              v-model:value="signInModelData.password"
              placeholder="Default account admin | user"
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
              @click.enter="getSignInAuth"
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

            <!-- 第三方平台的认证登录入口 -->
            <SystemPlatformAuth />
          </div>
        </NForm>
      </div>
    </div>
  </div>
</template>
