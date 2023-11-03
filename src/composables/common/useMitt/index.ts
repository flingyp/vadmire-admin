import mitt from 'mitt';

const emitter = mitt();

export const useMitt = <T>() => {
  const on = (key: string, callback: Function) => {
    emitter.on(key, (value) => {
      callback(value);
    });
  };

  const emit = (key: string, value: T) => {
    emitter.emit(key, value);
  };

  const remove = (key: string) => {
    emitter.off(key);
  };

  const clear = () => {
    emitter.all.clear();
  };

  return {
    on,
    emit,
    remove,
    clear,
  };
};
