import type { FC } from 'react';
import { createSpriteIcon } from '@/registry/components/icons';
import type { IconProps } from '../types';

export type DartProps = IconProps;

export const Dart: FC<DartProps> = createSpriteIcon({
  name: 'plugins/dart/dart',
  viewBox: '0 0 16 16',
  displayName: 'Dart',
});

export type DartRemoteProps = IconProps;

export const DartRemote: FC<DartRemoteProps> = createSpriteIcon({
  name: 'plugins/dart/dart-remote',
  viewBox: '0 0 16 16',
  displayName: 'DartRemote',
});

export type DartTestProps = IconProps;

export const DartTest: FC<DartTestProps> = createSpriteIcon({
  name: 'plugins/dart/dart-test',
  viewBox: '0 0 16 16',
  displayName: 'DartTest',
});

export type DartWebProps = IconProps;

export const DartWeb: FC<DartWebProps> = createSpriteIcon({
  name: 'plugins/dart/dart-web',
  viewBox: '0 0 16 16',
  displayName: 'DartWeb',
});

export type ObservatoryProps = IconProps;

export const Observatory: FC<ObservatoryProps> = createSpriteIcon({
  name: 'plugins/dart/observatory',
  viewBox: '0 0 16 16',
  displayName: 'Observatory',
});

export type WarningPointProps = IconProps;

export const WarningPoint: FC<WarningPointProps> = createSpriteIcon({
  name: 'plugins/dart/warning-point',
  viewBox: '0 0 6 6',
  displayName: 'WarningPoint',
});

export { iconNames } from '../types';
export type { IconName, IconMode, IconProps, IconSize } from '../types';
