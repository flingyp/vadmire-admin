<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Icon } from '@iconify/vue'
import 'swiper/css'

const route = useRoute()
const router = useRouter()
const routeMenuStore = useRouteMenuStore()

// useSwiper don't to use and it have problem
// refence the https://github.com/nolimits4web/swiper/issues/5505 can realize function
const swiper = ref<any>(null)

// click tab menu
const clickTabMenu = (key: string) => {
  if (key === route.name) return
  router.push({ name: key })
}

// click to delete tab menu
const deleteTabMenu = (key: string) => {
  // don't remove tab menu if tab menus have only one
  if (routeMenuStore.tabMenuKeys.length === 1) return
  // remove tab menu is current active menu and should do that navigator other route
  if (key === route.name) {
    const deleteIndex = routeMenuStore.tabMenuKeys.indexOf(key)
    const navigatorIndex = deleteIndex === 0 ? 1 : deleteIndex - 1
    const navigatorMenu = routeMenuStore.vadmireTabMenu[navigatorIndex]
    router.push({ name: navigatorMenu.key as string })
  }
  routeMenuStore.removeTabMenuKey(key)
}
</script>

<template>
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
      class="!w-auto mr-2"
    >
      <div
        class="flex items-center px-2 py-1 rounded-sm border border-none cursor-pointer group"
        :class="[route.name === menu.key ? 'bg-primary border-primary text-white': '']"
        @click="clickTabMenu(menu.key as string)"
      >
        <Icon
          :icon="menu.iconLabel"
          class="text-base mr-1"
        />
        <span class="mr-1">{{ menu.label }}</span>
        <icon-mdi:window-close
          v-show="routeMenuStore.tabMenuKeys.length > 1"
          class="w-0 group-hover:w-4 duration-500 transition-[width]"
          @click.stop="deleteTabMenu(menu.key as string)"
        />
      </div>
    </SwiperSlide>
  </Swiper>

  <icon-material-symbols:keyboard-double-arrow-right-rounded
    class="text-base cursor-pointer"
    @click="swiper.$el.swiper.slideNext()"
  />
</template>
