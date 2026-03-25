import type { FC } from 'react';
import { createSpriteIcon } from '@/registry/components/icons';
import type { IconProps } from '../types';

export type MesonProps = IconProps;

export const Meson: FC<MesonProps> = createSpriteIcon({
  name: 'plugins/meson/meson',
  viewBox: '0 0 16 16',
  displayName: 'Meson',
});

export type MesonPluginLogoProps = IconProps;

export const MesonPluginLogo: FC<MesonPluginLogoProps> = createSpriteIcon({
  name: 'plugins/meson/meson-plugin-logo',
  viewBox: '0 0 64 64',
  displayName: 'MesonPluginLogo',
});

export type MesonRcProps = IconProps;

export const MesonRc: FC<MesonRcProps> = createSpriteIcon({
  name: 'plugins/meson/meson-rc',
  viewBox: '0 0 16 16',
  displayName: 'MesonRc',
});

export type MesonReloadProps = IconProps;

export const MesonReload: FC<MesonReloadProps> = createSpriteIcon({
  name: 'plugins/meson/meson-reload',
  viewBox: '0 0 16 16',
  displayName: 'MesonReload',
});

export { iconNames } from '../types';
export type { IconName, IconMode, IconProps, IconSize } from '../types';
