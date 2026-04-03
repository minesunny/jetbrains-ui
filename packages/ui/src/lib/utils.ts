import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

const typographyPresetClasses = [
  'text-ui-h1',
  'text-ui-h2',
  'text-ui-default',
  'text-ui-default-semibold',
  'text-ui-paragraph',
  'text-ui-medium',
  'text-ui-medium-semibold',
  'text-editor-default',
  'text-editor-default-bold',
  'text-editor-small',
  'text-editor-small-bold',
] as const;

const spacingPresetClasses = {
  p: ['p-ui-surface', 'p-ui-section', 'p-ui-panel'],
  px: [
    'px-ui-control',
    'px-ui-item',
    'px-ui-tab',
    'px-ui-compact',
    'px-ui-tight',
    'px-ui-toolbar-item',
  ],
  py: [
    'py-ui-item',
    'py-ui-label',
    'py-ui-control-row',
    'py-ui-compact',
    'py-ui-tight',
    'py-ui-toolbar-item',
  ],
  pl: [
    'pl-ui-control',
    'pl-ui-item',
    'pl-ui-item-indicator',
    'pl-ui-section',
    'pl-ui-control-focus',
    'pl-ui-alert',
  ],
  pr: [
    'pr-ui-item',
    'pr-ui-sub-trigger',
    'pr-ui-section',
    'pr-ui-hairline',
    'pr-ui-alert',
  ],
  pt: ['pt-ui-alert'],
  pb: ['pb-ui-alert'],
  gap: [
    'gap-ui-control',
    'gap-ui-actions',
    'gap-ui-compact',
    'gap-ui-tight',
    'gap-ui-hairline',
  ],
  mt: ['mt-ui-control-row'],
  mx: ['mx-ui-surface', '-mx-ui-surface'],
  my: ['my-ui-hairline', 'my-ui-surface'],
  h: ['h-ui-hairline', 'h-ui-scrollbar'],
  w: [
    'w-ui-hairline',
    'w-ui-scrollbar',
    'w-ui-input',
    'w-ui-combo',
    'w-ui-alert',
    'w-ui-alert-wide',
  ],
  'min-w': [
    'min-w-ui-button',
    'min-w-ui-combo',
    'min-w-ui-context-menu',
    'min-w-ui-context-submenu',
    'min-w-ui-dropdown',
    'min-w-ui-tree',
    'min-w-ui-alert',
    'min-w-ui-toolbar-item',
  ],
  'max-w': ['max-w-ui-alert'],
  'min-h': ['min-h-ui-toolbar-item'],
  size: ['size-ui-item-icon'],
  left: ['left-ui-alert-icon', 'left-ui-alert-footer', 'left-ui-tree-overlay'],
  right: ['right-ui-alert-footer', 'right-ui-tree-overlay'],
  top: ['top-ui-alert-icon'],
  bottom: ['bottom-ui-alert-footer'],
} as const;

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'typography-preset': typographyPresetClasses,
      p: spacingPresetClasses.p,
      px: spacingPresetClasses.px,
      py: spacingPresetClasses.py,
      pl: spacingPresetClasses.pl,
      pr: spacingPresetClasses.pr,
      pt: spacingPresetClasses.pt,
      pb: spacingPresetClasses.pb,
      gap: spacingPresetClasses.gap,
      mt: spacingPresetClasses.mt,
      mx: spacingPresetClasses.mx,
      my: spacingPresetClasses.my,
      h: spacingPresetClasses.h,
      w: spacingPresetClasses.w,
      'min-w': spacingPresetClasses['min-w'],
      'max-w': spacingPresetClasses['max-w'],
      'min-h': spacingPresetClasses['min-h'],
      size: spacingPresetClasses.size,
      left: spacingPresetClasses.left,
      right: spacingPresetClasses.right,
      top: spacingPresetClasses.top,
      bottom: spacingPresetClasses.bottom,
    } as Record<string, unknown>,
    conflictingClassGroups: {
      'typography-preset': [
        'font-family',
        'font-size',
        'font-weight',
        'leading',
      ],
      'font-family': ['typography-preset'],
      'font-size': ['typography-preset'],
      'font-weight': ['typography-preset'],
      leading: ['typography-preset'],
    } as Record<string, unknown>,
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
