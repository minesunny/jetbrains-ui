import type { FC } from 'react';
import { createSpriteIcon } from '@/registry/components/icons';
import type { IconProps } from '../types';

export type StartTimerProps = IconProps;

export const StartTimer: FC<StartTimerProps> = createSpriteIcon({
  name: 'plugins/tasks/start-timer',
  viewBox: '0 0 16 16',
  displayName: 'StartTimer',
});

export type StopTimerProps = IconProps;

export const StopTimer: FC<StopTimerProps> = createSpriteIcon({
  name: 'plugins/tasks/stop-timer',
  viewBox: '0 0 16 16',
  displayName: 'StopTimer',
});

export { iconNames } from '../types';
export type { IconName, IconMode, IconProps, IconSize } from '../types';
