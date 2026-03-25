import type { FC } from 'react';
import { createSpriteIcon } from '@/registry/components/icons';
import type { IconProps } from '../types';

export type AccessLocalProps = IconProps;

export const AccessLocal: FC<AccessLocalProps> = createSpriteIcon({
  name: 'general/access-modifiers/access-local',
  viewBox: '0 0 16 16',
  displayName: 'AccessLocal',
});

export type AccessPrivateProps = IconProps;

export const AccessPrivate: FC<AccessPrivateProps> = createSpriteIcon({
  name: 'general/access-modifiers/access-private',
  viewBox: '0 0 16 16',
  displayName: 'AccessPrivate',
});

export type AccessProtectedProps = IconProps;

export const AccessProtected: FC<AccessProtectedProps> = createSpriteIcon({
  name: 'general/access-modifiers/access-protected',
  viewBox: '0 0 16 16',
  displayName: 'AccessProtected',
});

export type AccessPublicProps = IconProps;

export const AccessPublic: FC<AccessPublicProps> = createSpriteIcon({
  name: 'general/access-modifiers/access-public',
  viewBox: '0 0 16 16',
  displayName: 'AccessPublic',
});

export { iconNames } from '../types';
export type { IconName, IconMode, IconProps, IconSize } from '../types';
