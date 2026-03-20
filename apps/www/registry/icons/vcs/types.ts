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
  'abort',
  'add-emoji',
  'apply-not-conflicts',
  'apply-not-conflicts-left',
  'apply-not-conflicts-right',
  'arrow-left-right',
  'branch',
  'changelist',
  'changes',
  'checkmark',
  'cherry-pick',
  'comment',
  'comment-read',
  'comment-regular',
  'comment-resolved',
  'comment-unread',
  'comment-unresolved',
  'commit',
  'compare3-left-middle',
  'compare3-left-right',
  'compare3-middle-right',
  'compare4-left-bottom',
  'compare4-left-middle',
  'compare4-left-right',
  'compare4-middle-bottom',
  'compare4-middle-right',
  'compare4-right-bottom',
  'current-branch',
  'current-branch-favorite',
  'diff',
  'disable-editing',
  'fetch',
  'file-unread',
  'incoming-update',
  'intelli-sort',
  'magic-resolve-toolbar',
  'outgoing-push',
  'patch',
  'push',
  'resolve-continue',
  'revert',
  'skip-commit',
  'stash',
  'unshelve',
  'update',
  'vcs',
] as const;

export type IconName = (typeof iconNames)[number];
