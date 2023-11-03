<script setup lang="ts">
import { useDebounce } from '@flypeng/tool/browser';
import Fuse from 'fuse.js';
import { VAdmireMenuOption } from 'naive-ui';
import RenderIconify from '~/components/common/RenderIconify.vue';
import { transformMenu } from '~/utils';
import BaseSearchItem from './BaseSearchItem.vue';

const { t } = useI18n();
const { defaultLocales } = storeToRefs(useVAdmireConfigStore());
const { vadmireMenu } = storeToRefs(useRouteMenuStore());

const placeholder = computed(() => t('header.searchPlaceholder'));

const isShowSearchMenu = ref(false);
const searchKeyWord = ref('');
watch(searchKeyWord, (val) => {
  if (val.length > 0) isShowSearchMenu.value = true;
  else isShowSearchMenu.value = false;
});
const showSearchMenu = () => {
  if (searchKeyWord.value === '') return;
  isShowSearchMenu.value = true;
};
const closeSearchMenu = (type: 'CLICK' | 'BLUR') => {
  isShowSearchMenu.value = false;
  if (type === 'CLICK') searchKeyWord.value = '';
};

const baseSearchMenuRef = ref<HTMLInputElement>();
onClickOutside(baseSearchMenuRef, () => {
  if (!isShowSearchMenu.value) return;
  isShowSearchMenu.value = false;
});

const searchMenuList = ref<VAdmireMenuOption[]>([]);
const transformVadmireMenu = computed(() =>
  vadmireMenu.value.map((item) => {
    const newMenu = transformMenu(item, t);
    return newMenu;
  }),
);

const options: Fuse.IFuseOptions<VAdmireMenuOption> = {
  keys: ['label', 'children.label'],
  threshold: 0.3,
  includeScore: true,
};
let fuse: Fuse<VAdmireMenuOption>;
watch(
  defaultLocales,
  () => {
    nextTick(() => {
      fuse = new Fuse(transformVadmireMenu.value, options);
    });
  },
  { immediate: true },
);

const inputKeyword = useDebounce(() => {
  // remove all Spaces in the string
  searchKeyWord.value = searchKeyWord.value.replace(/\s*/g, '');
  const searchResult = fuse.search(searchKeyWord.value);
  searchMenuList.value = searchResult.map((data) => data.item);
}, 200);
</script>

<template>
  <div ref="baseSearchMenuRef" class="flex items-center">
    <NInput v-model:value="searchKeyWord" :placeholder="placeholder" @input="inputKeyword" @focus="showSearchMenu">
      <template #prefix>
        <RenderIconify icon="carbon:search" />
      </template>
    </NInput>

    <Transition
      :duration="{ enter: 500, leave: 300 }"
      enter-active-class="animate__animated animate__lightSpeedInRight"
      leave-active-class="animate__animated animate__lightSpeedOutRight"
    >
      <div
        v-show="isShowSearchMenu && searchMenuList.length"
        class="absolute w-64 z-50 p-2 top-[6%] rounded space-y-1 border border-vBorderLight dark:border-vBorderDark bg-vPageBgColor dark:bg-vPageBgDarkColor"
      >
        <template v-for="item in searchMenuList" :key="item.key">
          <BaseSearchItem :menu="item" @close="closeSearchMenu('CLICK')" />
        </template>
      </div>
    </Transition>
  </div>
</template>
