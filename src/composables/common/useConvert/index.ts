/**
 * Use with useRequest to decouple the service and transform the data into a front-end custom type data structure
 * @param callback
 * @example
 *    const { data } = useRequest({ url: '/demo', method: 'GET' })
 *    const resResult = useConvert<number>(() => 1)
 * @returns
 */
export const useConvert = <T>(callback: () => T): T => callback();
