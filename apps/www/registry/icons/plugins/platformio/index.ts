import type { FC } from 'react';
import { createSpriteIcon } from '@/registry/components/icons';
import type { IconProps } from '../types';

export type CleanProps = IconProps;

export const Clean: FC<CleanProps> = createSpriteIcon({
  name: 'plugins/platformio/clean',
  viewBox: '0 0 16 16',
  displayName: 'Clean',
});

export type ComponentVendorProps = IconProps;

export const ComponentVendor: FC<ComponentVendorProps> = createSpriteIcon({
  name: 'plugins/platformio/component-vendor',
  viewBox: '0 0 16 16',
  displayName: 'ComponentVendor',
});

export type ElectronicBoardProps = IconProps;

export const ElectronicBoard: FC<ElectronicBoardProps> = createSpriteIcon({
  name: 'plugins/platformio/electronic-board',
  viewBox: '0 0 16 16',
  displayName: 'ElectronicBoard',
});

export type ModPlatformIoProps = IconProps;

export const ModPlatformIo: FC<ModPlatformIoProps> = createSpriteIcon({
  name: 'plugins/platformio/mod-platform-io',
  viewBox: '0 0 16 16',
  displayName: 'ModPlatformIo',
});

export type PlatformIoProps = IconProps;

export const PlatformIo: FC<PlatformIoProps> = createSpriteIcon({
  name: 'plugins/platformio/platform-io',
  viewBox: '0 0 16 16',
  displayName: 'PlatformIo',
});

export type SoftwareFrameworkProps = IconProps;

export const SoftwareFramework: FC<SoftwareFrameworkProps> = createSpriteIcon({
  name: 'plugins/platformio/software-framework',
  viewBox: '0 0 16 16',
  displayName: 'SoftwareFramework',
});

export { iconNames } from '../types';
export type { IconName, IconMode, IconProps, IconSize } from '../types';
