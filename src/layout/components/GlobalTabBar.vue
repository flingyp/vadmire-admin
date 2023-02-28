<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Icon } from '@iconify/vue'
import 'swiper/css'

const routeMenuStore = useRouteMenuStore()

// useSwiper don't to use and it have problem
// refence the https://github.com/nolimits4web/swiper/issues/5505 can realize function
const swiper = ref<any>(null)

</script>

<template>
  <div class="flex items-center justify-between p-2 border-b">
    <div class="flex-1 flex items-center mr-2">
      <icon-material-symbols:keyboard-double-arrow-left-rounded
        class="text-base cursor-pointer"
        @click="swiper.$el?.swiper.slidePrev()"
      />

      <Swiper
        ref="swiper"
        slides-per-view="auto"
        class="w-[10vw] flex-1 h-full flex items-center space-x-2 mx-2"
      >
        <SwiperSlide
          v-for="menu in routeMenuStore.vadmireTabMenu"
          :key="menu.key"
          class="!w-auto mr-2 border px-2 py-1 rounded-sm"
        >
          <div class="flex items-center">
            <Icon
              :icon="menu.iconLabel"
              class="text-base mr-1"
            />
            <span>{{ menu.label }}</span>
          </div>
        </SwiperSlide>
      </Swiper>

      <icon-material-symbols:keyboard-double-arrow-right-rounded
        class="text-base cursor-pointer"
        @click="swiper.$el.swiper.slideNext()"
      />
    </div>
    <div class="text-base flex justify-end items-center h-full">
      <icon-uil:align-justify />
    </div>
  </div>
</template>
