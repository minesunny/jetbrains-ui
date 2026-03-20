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
  'abstract-exception',
  'add-any',
  'alias',
  'annotation',
  'annotation-folder',
  'class',
  'class-abstract',
  'class-anonymous',
  'class-initializer',
  'config',
  'constant',
  'controller',
  'copy-of-folder',
  'data-column',
  'data-tables',
  'desktop',
  'edit-folder',
  'enum',
  'error-introduction',
  'exception',
  'exclude-root',
  'excluded-generated',
  'favorites',
  'field',
  'folder',
  'function',
  'generated',
  'generated-source',
  'generated-test-root',
  'gvariable',
  'home-folder',
  'idea-project',
  'include',
  'interface',
  'jdk',
  'lambda',
  'library',
  'library-folder',
  'local-scope',
  'method',
  'method-abstract',
  'method-reference',
  'model-class',
  'module',
  'module-group',
  'module-java',
  'module8x8',
  'new-folder',
  'package',
  'parameter',
  'plugin',
  'pp-web',
  'property',
  'record',
  'resource-bundle',
  'resources-root',
  'server',
  'servlet',
  'shared-scope',
  'source-root',
  'star',
  'star-empty',
  'static',
  'template',
  'test',
  'test-group',
  'test-ignored',
  'test-resources-root',
  'test-root',
  'test-source-folder',
  'text-area',
  'type',
  'unloaded-module',
  'up-folder',
  'variable',
  'warning-introduction',
  'web-resources',
] as const;

export type IconName = (typeof iconNames)[number];
