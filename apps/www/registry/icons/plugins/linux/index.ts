import type { FC } from 'react';
import { createSpriteIcon } from '@/registry/components/icons';
import type { IconProps } from '../types';

export type LinuxProps = IconProps;

export const Linux: FC<LinuxProps> = createSpriteIcon({
  name: 'plugins/linux/linux',
  viewBox: '0 0 16 16',
  displayName: 'Linux',
});

export type LinuxLogoProps = IconProps;

export const LinuxLogo: FC<LinuxLogoProps> = createSpriteIcon({
  name: 'plugins/linux/linux-logo',
  viewBox: '0 0 16 16',
  displayName: 'LinuxLogo',
});

export { iconNames } from '../types';
export type { IconName, IconMode, IconProps, IconSize } from '../types';
