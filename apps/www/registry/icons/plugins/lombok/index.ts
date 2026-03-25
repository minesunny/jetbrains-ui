import type { FC } from 'react';
import { createSpriteIcon } from '@/registry/components/icons';
import type { IconProps } from '../types';

export type ConfigProps = IconProps;

export const Config: FC<ConfigProps> = createSpriteIcon({
  name: 'plugins/lombok/config',
  viewBox: '0 0 16 16',
  displayName: 'Config',
});

export type LombokProps = IconProps;

export const Lombok: FC<LombokProps> = createSpriteIcon({
  name: 'plugins/lombok/lombok',
  viewBox: '0 0 16 16',
  displayName: 'Lombok',
});

export type LombokClassProps = IconProps;

export const LombokClass: FC<LombokClassProps> = createSpriteIcon({
  name: 'plugins/lombok/lombok-class',
  viewBox: '0 0 16 16',
  displayName: 'LombokClass',
});

export type LombokFieldProps = IconProps;

export const LombokField: FC<LombokFieldProps> = createSpriteIcon({
  name: 'plugins/lombok/lombok-field',
  viewBox: '0 0 16 16',
  displayName: 'LombokField',
});

export type LombokMethodProps = IconProps;

export const LombokMethod: FC<LombokMethodProps> = createSpriteIcon({
  name: 'plugins/lombok/lombok-method',
  viewBox: '0 0 16 16',
  displayName: 'LombokMethod',
});

export { iconNames } from '../types';
export type { IconName, IconMode, IconProps, IconSize } from '../types';
