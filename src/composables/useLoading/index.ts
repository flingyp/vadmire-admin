export const useLoading = () => {
  const isLoading = ref(false)

  const setLoading = async (value: boolean) => {
    isLoading.value = value
  }

  // eslint-disable-next-line no-unused-vars
  const withLoading = async <T>(callback: (...args: unknown[]) => Promise<T>) => {
    if (isLoading.value) return

    isLoading.value = true

    const response = await callback()

    isLoading.value = false

    return response
  }

  return {
    isLoading: readonly(isLoading),

    setLoading,
    withLoading,
  }
}
