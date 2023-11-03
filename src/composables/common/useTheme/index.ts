export const useTheme = () => {
  const vadmireConfigStore = useVAdmireConfigStore();
  const isDark = useDark();
  const toggle = useToggle(isDark);
  const toggleDark = (value: boolean) => {
    if (value) {
      // trigger dark mode
      vadmireConfigStore.themeMode = 'DARK';
      toggle(true);
    } else {
      // trigger light mode
      vadmireConfigStore.themeMode = 'LIGHT';
      toggle(false);
    }
  };

  return {
    isDark,
    toggleDark,
  };
};
