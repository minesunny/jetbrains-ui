import type { FC } from 'react';
import { createSpriteIcon } from '@/registry/components/icons';
import type { IconProps } from '../types';

export type AddSdkProps = IconProps;

export const AddSdk: FC<AddSdkProps> = createSpriteIcon({
  name: 'general/devkit/add-sdk',
  viewBox: '0 0 16 16',
  displayName: 'AddSdk',
});

export type PluginV2Props = IconProps;

export const PluginV2: FC<PluginV2Props> = createSpriteIcon({
  name: 'general/devkit/plugin-v2',
  viewBox: '0 0 16 16',
  displayName: 'PluginV2',
});

export type SdkClosedProps = IconProps;

export const SdkClosed: FC<SdkClosedProps> = createSpriteIcon({
  name: 'general/devkit/sdk-closed',
  viewBox: '0 0 16 16',
  displayName: 'SdkClosed',
});

export { iconNames } from '../types';
export type { IconName, IconMode, IconProps, IconSize } from '../types';
