import type { FC } from 'react';
import { createSpriteIcon } from '@/registry/components/icons';
import type { IconProps } from '../types';

export type FinalMarkProps = IconProps;

export const FinalMark: FC<FinalMarkProps> = createSpriteIcon({
  name: 'general/modifiers/final-mark',
  viewBox: '0 0 16 16',
  displayName: 'FinalMark',
});

export type JunitTestMarkProps = IconProps;

export const JunitTestMark: FC<JunitTestMarkProps> = createSpriteIcon({
  name: 'general/modifiers/junit-test-mark',
  viewBox: '0 0 16 16',
  displayName: 'JunitTestMark',
});

export type LockedProps = IconProps;

export const Locked: FC<LockedProps> = createSpriteIcon({
  name: 'general/modifiers/locked',
  viewBox: '0 0 16 16',
  displayName: 'Locked',
});

export type ProcessMarkProps = IconProps;

export const ProcessMark: FC<ProcessMarkProps> = createSpriteIcon({
  name: 'general/modifiers/process-mark',
  viewBox: '0 0 16 16',
  displayName: 'ProcessMark',
});

export type RunnableMarkProps = IconProps;

export const RunnableMark: FC<RunnableMarkProps> = createSpriteIcon({
  name: 'general/modifiers/runnable-mark',
  viewBox: '0 0 16 16',
  displayName: 'RunnableMark',
});

export type SharedProps = IconProps;

export const Shared: FC<SharedProps> = createSpriteIcon({
  name: 'general/modifiers/shared',
  viewBox: '0 0 16 16',
  displayName: 'Shared',
});

export type StaticMarkProps = IconProps;

export const StaticMark: FC<StaticMarkProps> = createSpriteIcon({
  name: 'general/modifiers/static-mark',
  viewBox: '0 0 16 16',
  displayName: 'StaticMark',
});

export type SymlinkProps = IconProps;

export const Symlink: FC<SymlinkProps> = createSpriteIcon({
  name: 'general/modifiers/symlink',
  viewBox: '0 0 16 16',
  displayName: 'Symlink',
});

export type TabAlertProps = IconProps;

export const TabAlert: FC<TabAlertProps> = createSpriteIcon({
  name: 'general/modifiers/tab-alert',
  viewBox: '0 0 16 16',
  displayName: 'TabAlert',
});

export { iconNames } from '../types';
export type { IconName, IconMode, IconProps, IconSize } from '../types';
