import { useNotification } from 'naive-ui';
import type { NotificationOptions } from 'naive-ui';

export const useNaiveNotification = () => {
  const notification = useNotification();

  const success = (options: Omit<NotificationOptions, 'type'>) => {
    notification.success(options);
  };

  const error = (options: Omit<NotificationOptions, 'type'>) => {
    notification.error(options);
  };

  const warning = (options: Omit<NotificationOptions, 'type'>) => {
    notification.warning(options);
  };

  const info = (options: Omit<NotificationOptions, 'type'>) => {
    notification.info(options);
  };

  return {
    success,
    error,
    warning,
    info,
  };
};
