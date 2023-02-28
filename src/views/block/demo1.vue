<script setup lang="ts">
import { Navigation } from 'swiper'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/bundle'

const thumbsSwiper = ref(null)

const onSwiper = (swiper: any) => {
  console.log(swiper)
}
const onSlideChange = () => {
  console.log('slide change')
}

const navigationNext = () => {
  console.log('navigationNext')
}
const navigationPrev = (e) => {
  console.log('e->', e)
  console.log('navigationPrev->', navigationPrev)
}
</script>

<template>
  <section class="w-screen h-screen flex items-center justify-center">
    <div class="px-4 py-2 border w-[300px]">
      <swiper
        navigation
        :slides-per-view="3"
        :space-between="50"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide>
        <swiper-slide>Slide 7</swiper-slide>
      </swiper>
    </div>
  </section>

  <section class="w-screen h-screen flex items-center justify-center mt-2">
    <div class="px-4 py-2 border w-[300px]">
      <swiper
        :modules="[Navigation]"
        navigation
        @navigation-prev="navigationPrev"
        @navigation-next="navigationNext"
      >
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide>
        <swiper-slide>Slide 7</swiper-slide>
      </swiper>
    </div>
  </section>
</template>
