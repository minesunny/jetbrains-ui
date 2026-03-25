import type { FC } from 'react';
import { createSpriteIcon } from '@/registry/components/icons';
import type { IconProps } from '../types';

export type GitLabLogoProps = IconProps;

export const GitLabLogo: FC<GitLabLogoProps> = createSpriteIcon({
  name: 'plugins/gitlab/git-lab-logo',
  viewBox: '0 0 16 16',
  displayName: 'GitLabLogo',
});

export type GitLabWarningProps = IconProps;

export const GitLabWarning: FC<GitLabWarningProps> = createSpriteIcon({
  name: 'plugins/gitlab/git-lab-warning',
  viewBox: '0 0 16 16',
  displayName: 'GitLabWarning',
});

export { iconNames } from '../types';
export type { IconName, IconMode, IconProps, IconSize } from '../types';
