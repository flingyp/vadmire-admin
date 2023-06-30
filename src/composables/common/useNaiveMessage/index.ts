import { useMessage } from 'naive-ui'

export const useNaiveMessage = () => {
  const message = useMessage()

  const success = (msg = '成功') => {
    message.success(msg)
  }

  const error = (msg = '失败') => {
    message.error(msg)
  }

  const warning = (msg = '警告') => {
    message.warning(msg)
  }

  const info = (msg = '提示') => {
    message.info(msg)
  }

  const loading = (msg = '加载中...') => {
    message.loading(msg)
  }

  return {
    success,
    error,
    warning,
    info,
    loading,
  }
}
