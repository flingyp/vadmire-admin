<script setup lang="ts">
import { AutoCompleteOption, useMessage } from 'naive-ui'

const message = useMessage()
const info = () => {
  message.info("I don't know why nobody told you how to unfold your love", {
    keepAliveOnHover: true,
  })
}
const error = () => {
  message.error('Once upon a time you dressed so fine')
}
const warning = () => {
  message.warning('How many roads must a man walk down')
}
const success = () => {
  message.success("'Cause you walked hand in hand With another man in my place")
}
const loading = () => {
  message.loading('If I were you, I will realize that I love you more than any other guy')
}

const checkedValue = ref<string | null>(null)
const handleChange = (e: Event) => {
  checkedValue.value = (e.target as HTMLInputElement).value
}
const autoCompleteValue = ref('')
const autoCompleteOptions = computed<AutoCompleteOption[]>(() => ['@gmail.com', '@163.com', '@qq.com'].map((suffix) => {
  const prefix = autoCompleteValue.value.split('@')[0]
  return {
    label: prefix + suffix,
    value: prefix + suffix,
  }
}))
</script>

<template>
  <div class="space-y-4">
    <div class="border border-vBorderLight dark:border-vBorderDark p-4 rounded space-y-4">
      <p class="text-primary text-base mb-4">
        通用组件
      </p>

      <NSpace justify="space-around">
        <NButton>Default</NButton>
        <NButton type="tertiary">
          Tertiary
        </NButton>
        <NButton type="primary">
          Primary
        </NButton>
        <NButton type="info">
          Info
        </NButton>
        <NButton type="success">
          Success
        </NButton>
        <NButton type="warning">
          Warning
        </NButton>
        <NButton type="error">
          Error
        </NButton>
        <NButton disabled>
          不许点
        </NButton>
        <NButton ghost>
          Default
        </NButton>
        <NButton
          type="primary"
          ghost
        >
          Primary
        </NButton>
        <NButton
          type="info"
          ghost
        >
          Info
        </NButton>
        <NButton
          type="success"
          ghost
        >
          Success
        </NButton>
        <NButton
          type="warning"
          ghost
        >
          Warning
        </NButton>
        <NButton
          type="error"
          ghost
        >
          Error
        </NButton>
        <NButton color="#8a2be2">
          <template #icon>
            <icon-logos:naiveui />
          </template>
          #8a2be2
        </NButton>
        <NButton circle>
          <template #icon>
            <icon-logos:naiveui />
          </template>
        </NButton>
        <NButton round>
          圆角
        </NButton>
      </NSpace>

      <NSpace justify="space-around">
        <NTag> 爱在西元前 </NTag>
        <NTag type="success">
          不该
        </NTag>
        <NTag type="warning">
          超人不会飞
        </NTag>
        <NTag type="error">
          手写的从前
        </NTag>
        <NTag type="info">
          哪里都是你
        </NTag>
        <NTag :bordered="false">
          爱在西元前
        </NTag>
        <NTag
          :bordered="false"
          type="success"
        >
          不该
        </NTag>
        <NTag
          :bordered="false"
          type="warning"
        >
          超人不会飞
        </NTag>
        <NTag
          :bordered="false"
          type="error"
        >
          手写的从前
        </NTag>
        <NTag
          :bordered="false"
          type="info"
        >
          哪里都是你
        </NTag>
        <NTag
          closable
        >
          爱在西元前
        </NTag>
        <NTag
          type="success"
          closable
        >
          不该
        </NTag>
        <NTag
          type="warning"
          closable
        >
          超人不会飞
        </NTag>
        <NTag
          type="error"
          closable
        >
          手写的从前
        </NTag>
        <NTag
          type="info"
          closable
        >
          哪里都是你
        </NTag>
      </NSpace>
    </div>

    <div class="border border-vBorderLight dark:border-vBorderDark p-4 rounded space-y-4">
      <p class="text-primary text-base mb-4">
        数据录入组件
      </p>
      <div class="space-y-2">
        <NCheckbox>
          复选框 One
        </NCheckbox>
        <NCheckbox>
          复选框 Two
        </NCheckbox>
        <NRadio
          :checked="checkedValue === 'Definitely Maybe'"
          value="Definitely Maybe"
          name="basic-demo"
          @change="handleChange"
        >
          Definitely Maybe
        </NRadio>
        <NRadio
          :checked="checkedValue === 'Be Here Now'"
          value="Be Here Now"
          name="basic-demo"
          @change="handleChange"
        >
          Be Here Now
        </NRadio>

        <NInput
          type="text"
          placeholder="基本的 Input"
        />
        <NAutoComplete
          v-model:value="autoCompleteValue"
          :input-props="{autocomplete: 'disabled'}"
          :options="autoCompleteOptions"
          placeholder="邮箱"
        />
        <NDatePicker type="date" />
        <NDatePicker
          type="datetime"
          clearable
        />
        <NDatePicker
          type="datetimerange"
          clearable
        />
      </div>
    </div>

    <div class="border border-vBorderLight dark:border-vBorderDark p-4 rounded space-y-4">
      <p class="text-primary text-base mb-4">
        反馈组件
      </p>
      <div class="space-y-2">
        <NButton @click="info">
          信息（Hover不消失）
        </NButton>
        <NButton
          type="error"
          @click="error"
        >
          错误
        </NButton>
        <NButton
          type="info"
          @click="warning"
        >
          警告
        </NButton>
        <NButton
          type="success"
          @click="success"
        >
          成功
        </NButton>
        <NButton
          type="tertiary"
          @click="loading"
        >
          加载中
        </NButton>
        <NAlert
          title="Default 类型"
          type="default"
        >
          Gee it's good to be back home
        </NAlert>
        <NAlert
          title="Info 类型"
          type="info"
        >
          Gee it's good to be back home
        </NAlert>
        <NAlert
          title="Success 类型"
          type="success"
        >
          Leave it till tomorrow to unpack my case
        </NAlert>
        <NAlert
          title="Warning 类型"
          type="warning"
        >
          Honey disconnect the phone
        </NAlert>
        <NAlert
          title="Error 类型"
          type="error"
        >
          I'm back in the U.S.S.R.
        </NAlert>
        <NProgress
          type="circle"
          :percentage="20"
        />
        <NProgress
          type="circle"
          status="info"
          :percentage="42"
        />
        <NProgress
          type="circle"
          status="success"
          :percentage="98"
        />
        <NProgress
          type="circle"
          status="warning"
          :percentage="10"
        />
        <NProgress
          type="circle"
          status="error"
          :percentage="42"
        />
      </div>
    </div>
  </div>
</template>
