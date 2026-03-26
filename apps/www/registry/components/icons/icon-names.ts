// 自动生成的图标映射
export const ICON_MAP = {
  rhtml: {
    light: 'icon-rhtml-light',
    dark: 'icon-rhtml-dark',
  },
  feedback: {
    light: 'icon-feedback-light',
    dark: 'icon-feedback-dark',
  },
  'bean-validator-tool-window': {
    light: 'icon-bean-validator-tool-window-light',
    dark: 'icon-bean-validator-tool-window-dark',
  },
  // ... 更多图标
} as const;

export type IconName = keyof typeof ICON_MAP;

export const ICON_NAMES: IconName[] = Object.keys(ICON_MAP) as IconName[];
