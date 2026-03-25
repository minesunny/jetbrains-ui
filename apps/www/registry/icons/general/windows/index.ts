import type { FC } from 'react';
import { createSpriteIcon } from '@/registry/components/icons';
import type { IconProps } from '../types';

export type CloseProps = IconProps;

export const Close: FC<CloseProps> = createSpriteIcon({
  name: 'general/windows/close',
  viewBox: '0 0 16 16',
  displayName: 'Close',
});

export type CloseHoverProps = IconProps;

export const CloseHover: FC<CloseHoverProps> = createSpriteIcon({
  name: 'general/windows/close-hover',
  viewBox: '0 0 16 16',
  displayName: 'CloseHover',
});

export type CloseInactiveProps = IconProps;

export const CloseInactive: FC<CloseInactiveProps> = createSpriteIcon({
  name: 'general/windows/close-inactive',
  viewBox: '0 0 16 16',
  displayName: 'CloseInactive',
});

export type CloseSmallProps = IconProps;

export const CloseSmall: FC<CloseSmallProps> = createSpriteIcon({
  name: 'general/windows/close-small',
  viewBox: '0 0 16 16',
  displayName: 'CloseSmall',
});

export type CollapseProps = IconProps;

export const Collapse: FC<CollapseProps> = createSpriteIcon({
  name: 'general/windows/collapse',
  viewBox: '0 0 16 16',
  displayName: 'Collapse',
});

export type HelpProps = IconProps;

export const Help: FC<HelpProps> = createSpriteIcon({
  name: 'general/windows/help',
  viewBox: '0 0 16 16',
  displayName: 'Help',
});

export type HelpInactiveProps = IconProps;

export const HelpInactive: FC<HelpInactiveProps> = createSpriteIcon({
  name: 'general/windows/help-inactive',
  viewBox: '0 0 16 16',
  displayName: 'HelpInactive',
});

export type MaximizeProps = IconProps;

export const Maximize: FC<MaximizeProps> = createSpriteIcon({
  name: 'general/windows/maximize',
  viewBox: '0 0 16 16',
  displayName: 'Maximize',
});

export type MaximizeInactiveProps = IconProps;

export const MaximizeInactive: FC<MaximizeInactiveProps> = createSpriteIcon({
  name: 'general/windows/maximize-inactive',
  viewBox: '0 0 16 16',
  displayName: 'MaximizeInactive',
});

export type MaximizeSmallProps = IconProps;

export const MaximizeSmall: FC<MaximizeSmallProps> = createSpriteIcon({
  name: 'general/windows/maximize-small',
  viewBox: '0 0 16 16',
  displayName: 'MaximizeSmall',
});

export type MinimizeProps = IconProps;

export const Minimize: FC<MinimizeProps> = createSpriteIcon({
  name: 'general/windows/minimize',
  viewBox: '0 0 16 16',
  displayName: 'Minimize',
});

export type MinimizeInactiveProps = IconProps;

export const MinimizeInactive: FC<MinimizeInactiveProps> = createSpriteIcon({
  name: 'general/windows/minimize-inactive',
  viewBox: '0 0 16 16',
  displayName: 'MinimizeInactive',
});

export type MinimizeSmallProps = IconProps;

export const MinimizeSmall: FC<MinimizeSmallProps> = createSpriteIcon({
  name: 'general/windows/minimize-small',
  viewBox: '0 0 16 16',
  displayName: 'MinimizeSmall',
});

export type RestoreProps = IconProps;

export const Restore: FC<RestoreProps> = createSpriteIcon({
  name: 'general/windows/restore',
  viewBox: '0 0 16 16',
  displayName: 'Restore',
});

export type RestoreInactiveProps = IconProps;

export const RestoreInactive: FC<RestoreInactiveProps> = createSpriteIcon({
  name: 'general/windows/restore-inactive',
  viewBox: '0 0 16 16',
  displayName: 'RestoreInactive',
});

export type RestoreSmallProps = IconProps;

export const RestoreSmall: FC<RestoreSmallProps> = createSpriteIcon({
  name: 'general/windows/restore-small',
  viewBox: '0 0 16 16',
  displayName: 'RestoreSmall',
});

export { iconNames } from '../types';
export type { IconName, IconMode, IconProps, IconSize } from '../types';
