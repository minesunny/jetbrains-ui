import type { FC } from 'react';
import { createSpriteIcon } from '@/registry/components/icons';
import type { IconProps } from '../types';

export type DevContainersProps = IconProps;

export const DevContainers: FC<DevContainersProps> = createSpriteIcon({
  name: 'plugins/dev-containers/dev-containers',
  viewBox: '0 0 16 16',
  displayName: 'DevContainers',
});

export { iconNames } from '../types';
export type { IconName, IconMode, IconProps, IconSize } from '../types';
