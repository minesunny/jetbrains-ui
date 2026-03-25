import type { FC } from 'react';
import { createSpriteIcon } from '@/registry/components/icons';
import type { IconProps } from '../types';

export type FullLineCompletionProps = IconProps;

export const FullLineCompletion: FC<FullLineCompletionProps> = createSpriteIcon(
  {
    name: 'plugins/full-line-completion/full-line-completion',
    viewBox: '0 0 16 16',
    displayName: 'FullLineCompletion',
  },
);

export type FullLineCompletionOutlineProps = IconProps;

export const FullLineCompletionOutline: FC<FullLineCompletionOutlineProps> =
  createSpriteIcon({
    name: 'plugins/full-line-completion/full-line-completion-outline',
    viewBox: '0 0 16 16',
    displayName: 'FullLineCompletionOutline',
  });

export { iconNames } from '../types';
export type { IconName, IconMode, IconProps, IconSize } from '../types';
