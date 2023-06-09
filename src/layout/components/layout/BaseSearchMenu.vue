<script setup lang="ts">
import { useDebounce } from '@flypeng/tool/browser'
import Fuse from 'fuse.js'
import { VAdmireMenuOption } from 'naive-ui'
import RenderIconify from '~/components/common/RenderIconify.vue'
import { transformMenu } from '~/utils'
import BaseSearchItem from './BaseSearchItem.vue'

const { t } = useI18n()
const { defaultLocales } = storeToRefs(useVAdmireConfigStore())
const { vadmireChildrenMenuByFlat } = storeToRefs(useRouteMenuStore())

const placeholder = computed(() => t('header.searchPlaceholder'))

const isShowSearchMenu = ref(false)
const searchKeyWord = ref('')
watch(searchKeyWord, (val) => {
  if (val.length > 0) isShowSearchMenu.value = true
  else isShowSearchMenu.value = false
})
const showSearchMenu = () => {
  if (searchKeyWord.value === '') return
  isShowSearchMenu.value = true
}
const closeSearchMenu = (type: 'CLICK' | 'BLUR') => {
  if (type === 'CLICK') {
    isShowSearchMenu.value = false
    searchKeyWord.value = ''
  } else if (type === 'BLUR') {
    isShowSearchMenu.value = false
  }
}

const inputKeywordRef = ref<HTMLInputElement>()
onClickOutside(inputKeywordRef, () => {
  if (!isShowSearchMenu.value) return
  isShowSearchMenu.value = false
})

const searchMenuList = ref<VAdmireMenuOption[]>([])
const transformVadmireChildrenMenuByFlat = computed(() => vadmireChildrenMenuByFlat.value.map((item) => {
  const newMenu = transformMenu(item, t)
  return newMenu
}))

const options = {
  keys: ['label'],
  threshold: 0.3,
}
let fuse: Fuse<VAdmireMenuOption>
watch(defaultLocales, () => {
  nextTick(() => {
    fuse = new Fuse(transformVadmireChildrenMenuByFlat.value, options)
  })
}, { immediate: true })

const inputKeyword = useDebounce(() => {
  // 去除字符串里的空格
  searchKeyWord.value = searchKeyWord.value.replace(/\s*/g, '')
  const searchResult = fuse.search(searchKeyWord.value)
  // @ts-ignore
  searchMenuList.value = searchResult.map((data) => data.item)
}, 200)

</script>
<template>
  <div class="flex items-center">
    <NInput
      ref="inputKeywordRef"
      v-model:value="searchKeyWord"
      :placeholder="placeholder"
      @input="inputKeyword"
      @focus="showSearchMenu"
      @blur="closeSearchMenu('BLUR')"
    >
      <template #prefix>
        <RenderIconify icon="carbon:search" />
      </template>
    </NInput>

    <Transition name="fade-scale">
      <div
        v-show="isShowSearchMenu && searchMenuList.length"
        class="
          absolute w-64 z-50 p-2 top-[6%] rounded space-y-1
          border border-vBorderLight dark:border-vBorderDark bg-vPageBgColor dark:bg-vPageBgDarkColor
      "
      >
        <template
          v-for="item in searchMenuList"
          :key="item.key"
        >
          <BaseSearchItem
            :menu="item"
            @close="closeSearchMenu('CLICK')"
          />
        </template>
      </div>
    </Transition>
  </div>
</template>
