<script setup lang="ts">
import { t } from '@wangeditor/editor';
import { useDialog } from 'naive-ui';
import { DeployReload } from '~/utils';

const isOnline = useOnline();
const { success, error } = useNaiveNotification();

watch(
  () => isOnline.value,
  (newVal, oldVal) => {
    if (oldVal && !newVal) {
      error({ content: '网络已断开连接', closable: true });
    }
    if (!oldVal && newVal) {
      success({ content: '网络已重新连接', closable: true });
    }
  },
);

// listening system whether updated
const dialog = useDialog();
const isOpenDialog = ref(true);
const { isOpenDeployReload } = storeToRefs(useVAdmireConfigStore());

const deployReload = new DeployReload({
  // TIP: Config interface url to get 'fetchKey' value
  fetchUrl: '',
  fetchKey: 'buildTime',
  isListening: false,
  checkTimeout: 60 * 5,
  execute: true,
  reloadCallback() {
    if (isOpenDialog.value) {
      isOpenDialog.value = false;
      dialog.warning({
        title: '温馨提示',
        content: '检测到系统发生更新，请重新加载页面',
        positiveText: '更新',
        negativeText: '不更新',
        closable: false,
        closeOnEsc: false,
        maskClosable: false,
        onPositiveClick: () => {
          isOpenDialog.value = true;
          location.reload();
        },
        onNegativeClick: () => {
          isOpenDialog.value = true;
        },
      });
    }
  },
});

watch(
  () => isOpenDeployReload.value,
  (newVal) => {
    if (newVal) {
      deployReload.open();
    } else {
      deployReload.close();
    }
  },
  { immediate: true },
);
</script>

<template>
  <RouterView />
</template>
