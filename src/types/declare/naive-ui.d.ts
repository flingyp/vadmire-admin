import type { MenuOption } from 'naive-ui';

declare module 'naive-ui' {
  type VAdmireMenuOption = MenuOption & {
    iconLabel?: string;
  };

  type VAdmireTableSize = 'small' | 'medium' | 'large';
}
