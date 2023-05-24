export const useLoading = () => {
  const isLoading = ref(false)

  const setLoading = async (value: boolean) => {
    isLoading.value = value
  }

  const withLoading = async (callback: Function) => {
    if (isLoading.value) return

    isLoading.value = true

    await callback()

    isLoading.value = false
  }

  return {
    isLoading: readonly(isLoading),

    setLoading,
    withLoading,
  }
}
