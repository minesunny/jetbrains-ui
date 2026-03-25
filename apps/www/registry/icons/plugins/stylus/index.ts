import type { FC } from 'react';
import { createSpriteIcon } from '@/registry/components/icons';
import type { IconProps } from '../types';

export type StylusProps = IconProps;

export const Stylus: FC<StylusProps> = createSpriteIcon({
  name: 'plugins/stylus/stylus',
  viewBox: '0 0 16 16',
  displayName: 'Stylus',
});

export { iconNames } from '../types';
export type { IconName, IconMode, IconProps, IconSize } from '../types';
