import { useGetLocalKey, useSetLocalKey } from '@flypeng/tool/browser'
import Driver, { Step } from 'driver.js'
import { DRIVER_CONFIG_KEY } from '~/vadmire.config'

const driver = new Driver()

export const useDriver = (step: Step[]) => {
  // whether to use driver
  const isDriver = ref(!useGetLocalKey(DRIVER_CONFIG_KEY))

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
