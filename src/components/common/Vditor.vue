<script setup lang="ts">
import Vditor from 'vditor'
import 'vditor/dist/index.css'

export type ContentTheme = 'ant-design' | 'light' | 'dark' |'wechat'
export type CodeTheme =
'abap' | 'algol' | 'algol_nu' |'arduino' | 'autumn' |
'borland' | 'bw' | 'colorful' | 'dracula' | 'emacs' |
'friendly' | 'fruity' | 'github' | 'igor' | 'lovelace' |
'manni' | 'monokai' | 'monokailight' | 'murphy' | 'native' |
'paraiso-dark' | 'paraiso-light' | 'pastie' | 'perldoc' | 'pygments' |
'rainbow_dash' | 'rrt' | 'solarized-dark' | 'solarized-dark256' | 'solarized-light' |
'swapoff' | 'tango' | 'trac' | 'vim' | 'vs' | 'xcode' | 'ant-design'

interface VditorProps {
  contentTheme?: ContentTheme
  codeTheme?: CodeTheme
  content: string
}

defineOptions({
  name: 'Vditor',
})

const props = withDefaults(defineProps<VditorProps>(), {
  contentTheme: 'ant-design',
  codeTheme: 'github',
  content: '',
})

const emit = defineEmits(['update:content'])

const { isDark } = useTheme()
const vditorInstance = ref<Vditor | null>(null)

const vditorTheme = computed(() => {
  if (isDark.value) return 'dark'
  return 'classic'
})

watch(isDark, () => {
  vditorInstance.value?.setTheme(vditorTheme.value, props.contentTheme, props.codeTheme)
})

onMounted(() => {
  vditorInstance.value = new Vditor('vditor', {
    theme: vditorTheme.value,
    mode: 'ir',
    resize: {
      enable: false,
    },
    outline: {
      enable: true,
      position: 'left',
    },
    input: (value: string) => {
      emit('update:content', value)
    },
    after: () => {
      vditorInstance.value?.setValue(props.content)
    },
  })
})
</script>

<template>
  <div id="vditor" />
</template>
