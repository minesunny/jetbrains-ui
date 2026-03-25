import type { FC } from 'react';
import { createSpriteIcon } from '@/registry/components/icons';
import type { IconProps } from '../types';

export type SendToTheLeftProps = IconProps;

export const SendToTheLeft: FC<SendToTheLeftProps> = createSpriteIcon({
  name: 'general/duplicates/send-to-the-left',
  viewBox: '0 0 16 16',
  displayName: 'SendToTheLeft',
});

export type SendToTheLeftGrayedProps = IconProps;

export const SendToTheLeftGrayed: FC<SendToTheLeftGrayedProps> =
  createSpriteIcon({
    name: 'general/duplicates/send-to-the-left-grayed',
    viewBox: '0 0 16 16',
    displayName: 'SendToTheLeftGrayed',
  });

export type SendToTheRightProps = IconProps;

export const SendToTheRight: FC<SendToTheRightProps> = createSpriteIcon({
  name: 'general/duplicates/send-to-the-right',
  viewBox: '0 0 16 16',
  displayName: 'SendToTheRight',
});

export type SendToTheRightGrayedProps = IconProps;

export const SendToTheRightGrayed: FC<SendToTheRightGrayedProps> =
  createSpriteIcon({
    name: 'general/duplicates/send-to-the-right-grayed',
    viewBox: '0 0 16 16',
    displayName: 'SendToTheRightGrayed',
  });

export { iconNames } from '../types';
export type { IconName, IconMode, IconProps, IconSize } from '../types';
