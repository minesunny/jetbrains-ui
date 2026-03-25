import type { FC } from 'react';
import { createSpriteIcon } from '@/registry/components/icons';
import type { IconProps } from '../types';

export type DarkThemeProps = IconProps;

export const DarkTheme: FC<DarkThemeProps> = createSpriteIcon({
  name: 'general/new-ui/dark-theme',
  viewBox: '0 0 16 16',
  displayName: 'DarkTheme',
});

export type DarkThemeSelectedProps = IconProps;

export const DarkThemeSelected: FC<DarkThemeSelectedProps> = createSpriteIcon({
  name: 'general/new-ui/dark-theme-selected',
  viewBox: '0 0 16 16',
  displayName: 'DarkThemeSelected',
});

export type LightThemeProps = IconProps;

export const LightTheme: FC<LightThemeProps> = createSpriteIcon({
  name: 'general/new-ui/light-theme',
  viewBox: '0 0 16 16',
  displayName: 'LightTheme',
});

export type LightThemeSelectedProps = IconProps;

export const LightThemeSelected: FC<LightThemeSelectedProps> = createSpriteIcon(
  {
    name: 'general/new-ui/light-theme-selected',
    viewBox: '0 0 16 16',
    displayName: 'LightThemeSelected',
  },
);

export type SystemThemeProps = IconProps;

export const SystemTheme: FC<SystemThemeProps> = createSpriteIcon({
  name: 'general/new-ui/system-theme',
  viewBox: '0 0 16 16',
  displayName: 'SystemTheme',
});

export type SystemThemeSelectedProps = IconProps;

export const SystemThemeSelected: FC<SystemThemeSelectedProps> =
  createSpriteIcon({
    name: 'general/new-ui/system-theme-selected',
    viewBox: '0 0 16 16',
    displayName: 'SystemThemeSelected',
  });

export { iconNames } from '../types';
export type { IconName, IconMode, IconProps, IconSize } from '../types';
