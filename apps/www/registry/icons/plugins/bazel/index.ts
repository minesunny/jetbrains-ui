import type { FC } from 'react';
import { createSpriteIcon } from '@/registry/components/icons';
import type { IconProps } from '../types';

export type BazelProps = IconProps;

export const Bazel: FC<BazelProps> = createSpriteIcon({
  name: 'plugins/bazel/bazel',
  viewBox: '0 0 16 16',
  displayName: 'Bazel',
});

export type BazelConfigProps = IconProps;

export const BazelConfig: FC<BazelConfigProps> = createSpriteIcon({
  name: 'plugins/bazel/bazel-config',
  viewBox: '0 0 16 16',
  displayName: 'BazelConfig',
});

export type BazelErrorProps = IconProps;

export const BazelError: FC<BazelErrorProps> = createSpriteIcon({
  name: 'plugins/bazel/bazel-error',
  viewBox: '0 0 16 16',
  displayName: 'BazelError',
});

export type BazelReloadProps = IconProps;

export const BazelReload: FC<BazelReloadProps> = createSpriteIcon({
  name: 'plugins/bazel/bazel-reload',
  viewBox: '0 0 16 16',
  displayName: 'BazelReload',
});

export type BazelTargetProps = IconProps;

export const BazelTarget: FC<BazelTargetProps> = createSpriteIcon({
  name: 'plugins/bazel/bazel-target',
  viewBox: '0 0 16 16',
  displayName: 'BazelTarget',
});

export type BazelWarningProps = IconProps;

export const BazelWarning: FC<BazelWarningProps> = createSpriteIcon({
  name: 'plugins/bazel/bazel-warning',
  viewBox: '0 0 16 16',
  displayName: 'BazelWarning',
});

export type BuildAndReloadProps = IconProps;

export const BuildAndReload: FC<BuildAndReloadProps> = createSpriteIcon({
  name: 'plugins/bazel/build-and-reload',
  viewBox: '0 0 16 16',
  displayName: 'BuildAndReload',
});

export { iconNames } from '../types';
export type { IconName, IconMode, IconProps, IconSize } from '../types';
