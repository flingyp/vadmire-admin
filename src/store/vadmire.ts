import { defineStore } from 'pinia'
import { VAdmireConfig, defindVAdmireConfig } from '~/vadmire.config'

const defaultVAdmireConfig = defindVAdmireConfig()

export const useVAdmireStore = defineStore('vadmireStore', {
  state: (): VAdmireConfig => defaultVAdmireConfig,
})
