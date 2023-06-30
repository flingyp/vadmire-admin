import { useSetLocalKey } from '@flypeng/tool/browser'
import Driver, { Step } from 'driver.js'
import { DRIVER_CONFIG_KEY } from '~/vadmire.config'

// More details reference https://github.com/kamranahmedse/driver.js
const driver = new Driver({
  closeBtnText: '关闭',
  prevBtnText: '上一步',
  nextBtnText: '下一步',
  doneBtnText: '完成',
  allowClose: false,
})

export const useDriver = (step: Step[]) => {
  // whether to use driver
  // const isDriver = ref(Number(useGetLocalKey(DRIVER_CONFIG_KEY)) !== 1)
  const isDriver = ref(true)

  const start = () => {
    driver.defineSteps(step)
    driver.start()

    isDriver.value = false
    useSetLocalKey(DRIVER_CONFIG_KEY, 1)
  }

  return {
    isDriver,

    start,
  }
}
