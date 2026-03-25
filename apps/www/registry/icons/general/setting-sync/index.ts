import type { FC } from 'react';
import { createSpriteIcon } from '@/registry/components/icons';
import type { IconProps } from '../types';

export type ConflictProps = IconProps;

export const Conflict: FC<ConflictProps> = createSpriteIcon({
  name: 'general/setting-sync/conflict',
  viewBox: '0 0 16 16',
  displayName: 'Conflict',
});

export type LocalChangesProps = IconProps;

export const LocalChanges: FC<LocalChangesProps> = createSpriteIcon({
  name: 'general/setting-sync/local-changes',
  viewBox: '0 0 16 16',
  displayName: 'LocalChanges',
});

export type RemoteChangesProps = IconProps;

export const RemoteChanges: FC<RemoteChangesProps> = createSpriteIcon({
  name: 'general/setting-sync/remote-changes',
  viewBox: '0 0 16 16',
  displayName: 'RemoteChanges',
});

export type StatusDisabledProps = IconProps;

export const StatusDisabled: FC<StatusDisabledProps> = createSpriteIcon({
  name: 'general/setting-sync/status-disabled',
  viewBox: '0 0 16 16',
  displayName: 'StatusDisabled',
});

export type StatusEnabledProps = IconProps;

export const StatusEnabled: FC<StatusEnabledProps> = createSpriteIcon({
  name: 'general/setting-sync/status-enabled',
  viewBox: '0 0 16 16',
  displayName: 'StatusEnabled',
});

export { iconNames } from '../types';
export type { IconName, IconMode, IconProps, IconSize } from '../types';
