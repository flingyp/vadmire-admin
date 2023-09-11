export const useLoading = (defaultValue = false) => {
  const isLoading = ref(defaultValue)

  const setLoading = (value: boolean) => {
    isLoading.value = value
  }

  const withLoading = async <T>(callback: () => Promise<T>) => {
    if (isLoading.value) return
    try {
      setLoading(true)
      const response = await callback()
      return response
    } finally {
      setLoading(false)
    }
  }

  return {
    isLoading: readonly(isLoading),
    setLoading,
    withLoading,
  }
}
