import { defineStore } from 'pinia'
import { useRemoveLocalKey } from '@flypeng/tool/browser'
import { VAdmireConfig, defindVAdmireConfig, AUTH_TOKEN } from '~/vadmire.config'

const defaultVAdmireConfig = defindVAdmireConfig()

export const useVAdmireConfigStore = defineStore('vadmireConfigStore', {
  state: (): VAdmireConfig => defaultVAdmireConfig,
  actions: {
    // controls whether the sidebar is collapsed
    handleIsCollapsedSider() {
      this.isCollapsedSider = !this.isCollapsedSider
    },
    // exit system logic
    async handleExitSystem() {
      useRemoveLocalKey(AUTH_TOKEN)
    },
  },
})
