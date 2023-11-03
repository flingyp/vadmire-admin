<script setup lang="ts">
import SystemLogin from './components/SystemLogin.vue';
import SystemRegister from './components/SystemRegister.vue';
import SystemTip from './components/Tip.vue';

const { toggleDark } = useTheme();
const { themeMode } = storeToRefs(useVAdmireConfigStore());

const isAuthLoin = ref(true);
const rotateYComputed = computed(() => {
  if (isAuthLoin.value) {
    return {
      transform: 'rotateY(0turn)',
    };
  }
  return {
    transform: 'rotateY(0.5turn)',
  };
});

// click switch login or register
const switchSign = (value: boolean) => {
  isAuthLoin.value = value;
};

provide('switchSign', switchSign);
</script>

<template>
  <div ref="systemAuthRoot" class="auth-container w-screen h-screen bg-vAuthBgImage overflow-hidden">
    <div :style="[rotateYComputed]" class="inner-container rounded-md w-full h-full flex items-center justify-center">
      <section LOGIN_IN>
        <SystemLogin />
      </section>
      <section SIGN_UP>
        <SystemRegister />
      </section>
    </div>

    <SystemTip />
  </div>

  <div class="absolute text-2xl cursor-pointer top-10 right-10">
    <icon-line-md:sunny-outline-to-moon-alt-loop-transition v-if="themeMode === 'LIGHT'" @click="toggleDark(true)" />
    <icon-line-md:sunny-outline-loop v-else @click="toggleDark(false)" />
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
    transition: 1s ease-in-out;

    section {
      position: absolute;
      backface-visibility: hidden;
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
