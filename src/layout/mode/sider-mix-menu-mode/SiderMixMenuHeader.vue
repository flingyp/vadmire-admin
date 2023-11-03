<script setup lang="ts">
import BaseLogoTitle from '~/layout/components/layout/BaseLogoTitle.vue';
import BaseFullScreen from '~/layout/components/layout/BaseFullScreen.vue';
import BaseGithubIcon from '~/layout/components/layout/BaseGithubIcon.vue';
import BaseSettingIcon from '~/layout/components/layout/BaseSettingIcon.vue';
import BaseSwitchLocale from '~/layout/components/layout/BaseSwitchLocale.vue';
import GlobalBreadCrumbMenu from '~/layout/components/GlobalBreadCrumbMenu.vue';
import BasePersonalCenter from '~/layout/components/layout/BasePersonalCenter.vue';
import BaseCollapsedSiderbar from '~/layout/components/layout/BaseCollapsedSiderbar.vue';
import BaseSearchMenu from '~/layout/components/layout/BaseSearchMenu.vue';
</script>

<template>
  <div class="flex justify-between">
    <div class="flex items-center">
      <BaseLogoTitle />
      <GlobalBreadCrumbMenu />
    </div>
    <div class="flex">
      <BaseSearchMenu />
      <BaseGithubIcon />
      <BaseFullScreen />
      <BaseSwitchLocale />
      <BaseCollapsedSiderbar />
      <BaseSettingIcon />
      <BasePersonalCenter />
    </div>
  </div>
</template>
