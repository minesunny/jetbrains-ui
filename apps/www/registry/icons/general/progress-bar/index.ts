import type { FC } from 'react';
import { createSpriteIcon } from '@/registry/components/icons';
import type { IconProps } from '../types';

export type PauseProps = IconProps;

export const Pause: FC<PauseProps> = createSpriteIcon({
  name: 'general/progress-bar/pause',
  viewBox: '0 0 16 16',
  displayName: 'Pause',
});

export type PauseHoveredProps = IconProps;

export const PauseHovered: FC<PauseHoveredProps> = createSpriteIcon({
  name: 'general/progress-bar/pause-hovered',
  viewBox: '0 0 16 16',
  displayName: 'PauseHovered',
});

export type ResumeProps = IconProps;

export const Resume: FC<ResumeProps> = createSpriteIcon({
  name: 'general/progress-bar/resume',
  viewBox: '0 0 16 16',
  displayName: 'Resume',
});

export type ResumeHoveredProps = IconProps;

export const ResumeHovered: FC<ResumeHoveredProps> = createSpriteIcon({
  name: 'general/progress-bar/resume-hovered',
  viewBox: '0 0 16 16',
  displayName: 'ResumeHovered',
});

export type StopProps = IconProps;

export const Stop: FC<StopProps> = createSpriteIcon({
  name: 'general/progress-bar/stop',
  viewBox: '0 0 16 16',
  displayName: 'Stop',
});

export type StopHoveredProps = IconProps;

export const StopHovered: FC<StopHoveredProps> = createSpriteIcon({
  name: 'general/progress-bar/stop-hovered',
  viewBox: '0 0 16 16',
  displayName: 'StopHovered',
});

export { iconNames } from '../types';
export type { IconName, IconMode, IconProps, IconSize } from '../types';
