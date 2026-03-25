import type { FC } from 'react';
import { createSpriteIcon } from '@/registry/components/icons';
import type { IconProps } from './types';

export type CommandProps = IconProps;

export const Command: FC<CommandProps> = createSpriteIcon({
  name: 'terminal/command',
  viewBox: '0 0 16 16',
  displayName: 'Command',
});

export type FileFormatProps = IconProps;

export const FileFormat: FC<FileFormatProps> = createSpriteIcon({
  name: 'terminal/file-format',
  viewBox: '0 0 16 16',
  displayName: 'FileFormat',
});

export type OptionProps = IconProps;

export const Option: FC<OptionProps> = createSpriteIcon({
  name: 'terminal/option',
  viewBox: '0 0 16 16',
  displayName: 'Option',
});

export type OtherProps = IconProps;

export const Other: FC<OtherProps> = createSpriteIcon({
  name: 'terminal/other',
  viewBox: '0 0 16 16',
  displayName: 'Other',
});

export { iconNames } from './types';
export type { IconName, IconMode, IconProps, IconSize } from './types';
