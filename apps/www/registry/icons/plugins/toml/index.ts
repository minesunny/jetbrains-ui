import type { FC } from 'react';
import { createSpriteIcon } from '@/registry/components/icons';
import type { IconProps } from '../types';

export type TomlProps = IconProps;

export const Toml: FC<TomlProps> = createSpriteIcon({
  name: 'plugins/toml/toml',
  viewBox: '0 0 16 16',
  displayName: 'Toml',
});

export { iconNames } from '../types';
export type { IconName, IconMode, IconProps, IconSize } from '../types';
