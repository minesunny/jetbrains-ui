import type { FC } from 'react';
import { createSpriteIcon } from '@/registry/components/icons';
import type { IconProps } from '../types';

export type OutSightProps = IconProps;

export const OutSight: FC<OutSightProps> = createSpriteIcon({
  name: 'plugins/outsight/out-sight',
  viewBox: '0 0 16 16',
  displayName: 'OutSight',
});

export type OutSightColorProps = IconProps;

export const OutSightColor: FC<OutSightColorProps> = createSpriteIcon({
  name: 'plugins/outsight/out-sight-color',
  viewBox: '0 0 16 16',
  displayName: 'OutSightColor',
});

export { iconNames } from '../types';
export type { IconName, IconMode, IconProps, IconSize } from '../types';
