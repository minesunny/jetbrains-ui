export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type IconMode = 'light' | 'dark';

export interface IconProps {
  size?: IconSize;
  mode?: IconMode;
  className?: string;
  /** Accessible label for the icon */
  'aria-label'?: string;
  /** Title element for the icon tooltip */
  title?: string;
  [key: string]: any;
}

export interface SvgProps {
  size: number;
  className?: string;
  title?: string;
  role?: string;
  'aria-label'?: string;
  'aria-hidden'?: boolean;
}

export const sizeMap: Record<IconSize, number> = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20,
  xl: 24,
};

export const iconNames = [
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
  'inspections-okempty',
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

export type IconName = (typeof iconNames)[number];
