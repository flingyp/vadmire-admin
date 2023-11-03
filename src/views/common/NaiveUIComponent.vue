<script setup lang="ts">
import { useMessage } from 'naive-ui';

const message = useMessage();

const dateValue = ref(new Date().getTime());
const dateRangeArr = ref<[number, number]>([1183135260000, new Date().getTime()]);

const inputValue = ref('');

const info = () => {
  message.info("I don't know why nobody told you how to unfold your love", {
    keepAliveOnHover: true,
  });
};
const error = () => {
  message.error('Once upon a time you dressed so fine');
};
const warning = () => {
  message.warning('How many roads must a man walk down');
};
const success = () => {
  message.success("'Cause you walked hand in hand With another man in my place");
};
const loading = () => {
  message.loading('If I were you, I will realize that I love you more than any other guy');
};
</script>

<template>
  <div class="grid grid-cols-2 gap-8">
    <NCard title="按钮 Button">
      <div class="space-x-4">
        <NButton>Default</NButton>
        <NButton type="tertiary"> Tertiary </NButton>
        <NButton type="primary"> Primary </NButton>
        <NButton type="info"> Info </NButton>
        <NButton type="success"> Success </NButton>
        <NButton type="warning"> Warning </NButton>
        <NButton type="error"> Error </NButton>
      </div>
    </NCard>
    <NCard title="标签 Tag">
      <div class="space-x-4">
        <NTag> 爱在西元前 </NTag>
        <NTag type="success"> 不该 </NTag>
        <NTag type="warning"> 超人不会飞 </NTag>
        <NTag type="error"> 手写的从前 </NTag>
        <NTag type="info"> 哪里都是你 </NTag>
      </div>
    </NCard>
    <NCard title="日期选择器 Date Picker">
      <div class="grid grid-cols-2 gap-4">
        <NDatePicker v-model:value="dateValue" type="date" />
        <NDatePicker v-model:value="dateRangeArr" type="daterange" clearable />
        <NDatePicker v-model:value="dateRangeArr" type="quarterrange" clearable />
        <NDatePicker type="datetimerange" clearable default-time="13:22:11" />
      </div>
    </NCard>
    <NCard title="文本输入 Input">
      <div class="space-y-4">
        <NInput v-model:value="inputValue" type="text" placeholder="基本的 Input" />
        <NInput v-model:value="inputValue" type="textarea" placeholder="基本的 Textarea" />
        <NInputGroup>
          <NInput :style="{ width: '33%' }" />
          <NInputNumber :style="{ width: '33%' }" />
          <NInput :style="{ width: '33%' }" />
        </NInputGroup>
      </div>
    </NCard>
    <NCard title="信息 Message">
      <div class="space-x-4">
        <NButton @click="info"> 信息(Hover不消失) </NButton>
        <NButton @click="error"> 错误 </NButton>
        <NButton @click="warning"> 警告 </NButton>
        <NButton @click="success"> 成功 </NButton>
        <NButton @click="loading"> 加载中 </NButton>
      </div>
    </NCard>
    <NCard title="弹出信息 Popover">
      <div class="space-x-4">
        <NPopover trigger="hover">
          <template #trigger>
            <n-button>悬浮</n-button>
          </template>
          <span>I wish they all could be California girls</span>
        </NPopover>
        <NPopover trigger="hover" :keep-alive-on-hover="false">
          <template #trigger>
            <n-button>悬浮（忽略主体）</n-button>
          </template>
          <span>I wish they all could be California girls</span>
        </NPopover>
        <NPopover trigger="click">
          <template #trigger>
            <n-button>点击</n-button>
          </template>
          <span>I wish they all could be California girls</span>
        </NPopover>
        <NPopover trigger="focus">
          <template #trigger>
            <n-button>聚焦</n-button>
          </template>
          <span>I wish they all could be California girls</span>
        </NPopover>
      </div>
    </NCard>
  </div>
</template>
