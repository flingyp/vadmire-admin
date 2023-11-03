<script setup lang="ts">
import { useSetLocalKey } from '@flypeng/tool/browser';
import { LOCAL_SYSTEM_KEY } from '~/vadmire.config';

import BaseThemeMode from './setting/BaseThemeMode.vue';
import BaseSystemName from './setting/BaseSystemName.vue';
import BaseLayoutMode from './setting/BaseLayoutMode.vue';
import BaseThemeColor from './setting/BaseThemeColor.vue';
import BaseCopyButton from './setting/BaseCopyButton.vue';
import BaseSystemConfig from './setting/BaseSystemConfig.vue';
import BaseSettingContainer from './setting/BaseSettingContainer.vue';

const vadmireConfigStore = useVAdmireConfigStore();
const { isScaleDrawer } = storeToRefs(vadmireConfigStore);

// watch vadmireConfigStore.$state config change
watchEffect(() => {
  const vadmireConfig = vadmireConfigStore.$state;
  useSetLocalKey(LOCAL_SYSTEM_KEY, vadmireConfig);
});
</script>

<template>
  <NDrawer v-model:show="isScaleDrawer" :width="380" native-scrollbar placement="right">
    <NDrawerContent :title="$t('setting.systemSetting')" closable>
      <BaseSettingContainer :title="$t('setting.systemName')">
        <BaseSystemName />
      </BaseSettingContainer>

      <BaseSettingContainer :title="$t('setting.darkMode')">
        <BaseThemeMode />
      </BaseSettingContainer>

      <BaseSettingContainer :title="$t('setting.layoutMode')">
        <BaseLayoutMode />
      </BaseSettingContainer>

      <BaseSettingContainer :title="$t('setting.systemPrimaryColor')">
        <BaseThemeColor />
      </BaseSettingContainer>

      <BaseSettingContainer :title="$t('setting.systemConfig')">
        <BaseSystemConfig />
      </BaseSettingContainer>

      <BaseSettingContainer :title="$t('setting.copySystemConfig')">
        <BaseCopyButton />
      </BaseSettingContainer>
    </NDrawerContent>
  </NDrawer>
</template>
