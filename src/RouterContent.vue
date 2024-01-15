<script setup lang="ts">
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

new DeployReload({
  fetchUrl: 'http://localhost:8080/config.json',
  fetchKey: 'buildTime',
  checkTimeout: 60 * 5,
  execute: true,
  reloadCallback() {
    if (isOpenDialog.value) {
      isOpenDialog.value = false;
      dialog.warning({
        title: '提示',
        content: '检测到系统已更新最新版本，请重新加载页面',
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
</script>

<template>
  <RouterView />
</template>
