import type { FC } from 'react';
import { createSpriteIcon } from '@/registry/components/icons';
import type { IconProps } from '../types';

export type GithubProps = IconProps;

export const Github: FC<GithubProps> = createSpriteIcon({
  name: 'plugins/github/github',
  viewBox: '0 0 16 16',
  displayName: 'Github',
});

export type GithubWarningProps = IconProps;

export const GithubWarning: FC<GithubWarningProps> = createSpriteIcon({
  name: 'plugins/github/github-warning',
  viewBox: '0 0 16 16',
  displayName: 'GithubWarning',
});

export { iconNames } from '../types';
export type { IconName, IconMode, IconProps, IconSize } from '../types';
