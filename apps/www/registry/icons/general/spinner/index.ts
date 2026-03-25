import type { FC } from 'react';
import { createSpriteIcon } from '@/registry/components/icons';
import type { IconProps } from '../types';

export type LoaderProps = IconProps;

export const Loader: FC<LoaderProps> = createSpriteIcon({
  name: 'general/spinner/loader',
  viewBox: '0 0 16 16',
  displayName: 'Loader',
});

export { iconNames } from '../types';
export type { IconName, IconMode, IconProps, IconSize } from '../types';
