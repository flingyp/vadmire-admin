export const useLoading = () => {
  const isLoading = ref(false)

  const setLoading = async (value: boolean) => {
    isLoading.value = value
  }

  const fetchLoading = async <T>(callback: (...args: unknown[]) => T) => {
    await setLoading(true)

    const response = await callback() as T

    await setLoading(false)

    return response
  }

  return {
    isLoading,

    setLoading,
    fetchLoading,
  }
}
