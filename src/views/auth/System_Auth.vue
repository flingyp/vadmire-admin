<script setup lang="ts">
import System_Login from './components/System_Login.vue'
import System_Register from './components/System_Register.vue'

const isAuthLoin = ref(false)
const rotateYComputed = computed(() => {
  if (isAuthLoin.value) {
    return {
      transform: 'rotateY(0turn)',
    }
  }
  return {
    transform: 'rotateY(0.5turn)',
  }
})

// click switch login or register
const switchSign = (value: boolean) => { isAuthLoin.value = value }

provide('switchSign', switchSign)

</script>

<template>
  <div
    ref="systemAuthRoot"
    class="auth-container w-screen h-screen bg-auth-pattern overflow-hidden"
  >
    <div
      :style="[rotateYComputed]"
      class="inner-container rounded-md w-full h-full flex items-center justify-center"
    >
      <section LOGIN_IN>
        <System_Login />
      </section>
      <section SIGN_UP>
        <System_Register />
      </section>
    </div>
  </div>
</template>

<style scoped lang="scss">
.auth-container {
  position: relative;
  perspective: 800px;

  & > .inner-container {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
    transition: 1s ease-in-out;

    section {
      backface-visibility: hidden;
      position: absolute;
    }

    & > section[LOGIN_IN] {
      transform: rotateY(0turn);
    }
    & > section[SIGN_UP] {
      transform: rotateY(0.5turn);
    }
  }
}
</style>
