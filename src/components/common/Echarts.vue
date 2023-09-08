<script setup lang="ts">
import type { ECOption } from '~/utils'
import { echarts } from '~/utils'

interface EchartsProps {
  options: ECOption
}

defineOptions({ name: 'Echarts' })
const props = defineProps<EchartsProps>()

const { isDark } = useTheme()
const chartRef = ref<HTMLElement>()
const chartInstance = shallowRef<echarts.ECharts>()

const themeMode = computed(() => (isDark.value ? 'dark' : 'light'))

// init chart
const initChart = () => {
  if (chartRef.value) {
    chartInstance.value = echarts.init(chartRef.value, themeMode.value)

    const chartOptions = props.options
    // modify chart background color to be transparent
    // default background color in the dark mode is not match system background color
    chartOptions.backgroundColor = 'transparent'

    chartInstance.value.setOption(chartOptions)
  }
}

// reset chart size
const resizeChart = () => {
  chartInstance.value?.resize()
}

watch(themeMode, () => {
  chartInstance.value?.dispose()
  initChart()
})

onMounted(() => {
  initChart()
  window.addEventListener('resize', resizeChart)
})

onUnmounted(() => {
  window.removeEventListener('resize', resizeChart)
})
</script>

<template>
  <div ref="chartRef" />
</template>
