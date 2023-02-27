import { defineStore } from 'pinia'
import { VAdmireConfig, defindVAdmireConfig } from '~/vadmire.config'

const defaultVAdmireConfig = defindVAdmireConfig()

export const useVAdmireConfigStore = defineStore('vadmireConfigStore', {
  state: (): VAdmireConfig => defaultVAdmireConfig,
  actions: {
    // controls whether the sidebar is collapsed
    handleIsCollapsedSider() {
      this.isCollapsedSider = !this.isCollapsedSider
    },
  },
})
