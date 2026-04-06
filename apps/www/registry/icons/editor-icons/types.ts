import type React from 'react';

export type SvgSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type SvgMode = 'light' | 'dark';

export type SvgProps = Omit<React.ComponentProps<'svg'>, 'size'> & {
  size?: SvgSize | number;
  mode?: SvgMode;
};

export const sizeMap: Record<SvgSize | number, number> = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20,
  xl: 24,
};

export const svgNames = [
  'actual-zoom',
  'back-trace',
  'bookmark',
  'chessboard',
  'collapse-node',
  'color-picker',
  'colors',
  'data-schema',
  'dropdown-gutter',
  'editor-only',
  'editor-preview',
  'editor-preview-vertical',
  'expand-node',
  'ext-annotation',
  'fit-content',
  'flame',
  'fold',
  'fold-bottom',
  'grid',
  'implemented-method',
  'implementing-functional-interface',
  'implementing-method',
  'inaly-qarkus',
  'inlay-globe',
  'inlay-micronaut',
  'inlay-rename-in-comments',
  'inlay-rename-in-comments-active',
  'inlay-rename-in-no-code-files',
  'inlay-rename-in-no-code-files-active',
  'inlay-secured-shield',
  'inlay-settings',
  'inlay-spring',
  'inlay-web-inspector',
  'inspections-eye',
  'inspections-mixed',
  'inspections-ok',
  'inspections-ok-empty',
  'inspections-pause',
  'inspections-power-save-mode',
  'inspections-traffic-off',
  'inspections-typos',
  'intention-bulb',
  'intention-bulb-grey',
  'javadoc-edit',
  'javadoc-read',
  'merge-callees',
  'mnemonic',
  'overriden-method',
  'overriding-method',
  'preview-only',
  'quickfix-bulb',
  'quickfix-off-bulb',
  'read-access',
  'rec',
  'recursive-method',
  'rerun',
  'run',
  'run-error',
  'run-failed',
  'run-success',
  'sharp',
  'sibling-inherited-method',
  'suggested-refactoring-disabled',
  'unfold',
  'write-access',
  'zoom-in',
  'zoom-out',
] as const;

export type SvgName = (typeof svgNames)[number];
