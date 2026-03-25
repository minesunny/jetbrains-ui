import type { FC } from 'react';
import { createSpriteIcon } from '@/registry/components/icons';
import type { IconProps } from '../types';

export type VelocityProps = IconProps;

export const Velocity: FC<VelocityProps> = createSpriteIcon({
  name: 'plugins/velocity/velocity',
  viewBox: '0 0 16 16',
  displayName: 'Velocity',
});

export type VelocityPluginLogoProps = IconProps;

export const VelocityPluginLogo: FC<VelocityPluginLogoProps> = createSpriteIcon(
  {
    name: 'plugins/velocity/velocity-plugin-logo',
    viewBox: '0 0 40 40',
    displayName: 'VelocityPluginLogo',
  },
);

export type WestProps = IconProps;

export const West: FC<WestProps> = createSpriteIcon({
  name: 'plugins/velocity/west',
  viewBox: '0 0 16 16',
  displayName: 'West',
});

export { iconNames } from '../types';
export type { IconName, IconMode, IconProps, IconSize } from '../types';
