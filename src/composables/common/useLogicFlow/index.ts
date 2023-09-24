import LogicFlow, { Definition } from '@logicflow/core'
import { Theme } from '@logicflow/core/types/constant/DefaultTheme'

const lightTheme: Theme = {
  edgeText: {
    fill: '#000',
  },
}

const darkTheme: Theme = {
  edgeText: {
    fill: '#000',
  },
}

/**
 * LogicFlow plugin composable
 * @param container
 * @param config
 * @returns
 */
export const useLogicFlow = (container: Ref<HTMLElement | undefined>, config: Omit<Definition, 'container'>) => {
  const instance = ref<LogicFlow>()

  const init = () => {
    if (container.value) {
      instance.value = new LogicFlow({ container: container.value, ...config })
    } else {
      throw new Error('LogicFlow container is required')
    }
  }

  /**
   * Watching system theme update to rerender logicFlow canvas
   * @param callback: execute custom render function
   */
  const watchTheme = (callback: () => void) => {
    const { themeMode } = storeToRefs(useVAdmireConfigStore())
    watch(() => themeMode.value, (newVal) => {
      if (newVal === 'LIGHT') {
        instance.value?.setTheme(lightTheme)
        callback()
      } else {
        instance.value?.setTheme(darkTheme)
        callback()
      }
    }, { immediate: true })
  }

  return {
    container,
    instance,

    init,
    watchTheme,
  }
}
