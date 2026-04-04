import type React from 'react';
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type IconMode = 'light' | 'dark';


export type SvgProps = React.ComponentProps<'svg'> & {
  size?: IconSize;
  mode?: IconMode;
};

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
