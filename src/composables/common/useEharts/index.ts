import { ECOption } from '~/utils';

/**
 * Used to initialize chart options composable
 * @param defaultOption
 * @returns
 */
export const useEcharts = (defaultOption: ECOption) => {
  const option: ECOption = defaultOption;
  return {
    option,
  };
};
