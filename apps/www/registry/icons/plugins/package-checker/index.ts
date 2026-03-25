import type { FC } from 'react';
import { createSpriteIcon } from '@/registry/components/icons';
import type { IconProps } from '../types';

export type HighAllProps = IconProps;

export const HighAll: FC<HighAllProps> = createSpriteIcon({
  name: 'plugins/package-checker/high-all',
  viewBox: '0 0 24 24',
  displayName: 'HighAll',
});

export type HighAllTreeProps = IconProps;

export const HighAllTree: FC<HighAllTreeProps> = createSpriteIcon({
  name: 'plugins/package-checker/high-all-tree',
  viewBox: '0 0 16 16',
  displayName: 'HighAllTree',
});

export type HighAllTreeOutlineProps = IconProps;

export const HighAllTreeOutline: FC<HighAllTreeOutlineProps> = createSpriteIcon(
  {
    name: 'plugins/package-checker/high-all-tree-outline',
    viewBox: '0 0 16 16',
    displayName: 'HighAllTreeOutline',
  },
);

export type LowAllProps = IconProps;

export const LowAll: FC<LowAllProps> = createSpriteIcon({
  name: 'plugins/package-checker/low-all',
  viewBox: '0 0 24 24',
  displayName: 'LowAll',
});

export type LowAllTreeProps = IconProps;

export const LowAllTree: FC<LowAllTreeProps> = createSpriteIcon({
  name: 'plugins/package-checker/low-all-tree',
  viewBox: '0 0 16 16',
  displayName: 'LowAllTree',
});

export type LowAllTreeOutlineProps = IconProps;

export const LowAllTreeOutline: FC<LowAllTreeOutlineProps> = createSpriteIcon({
  name: 'plugins/package-checker/low-all-tree-outline',
  viewBox: '0 0 16 16',
  displayName: 'LowAllTreeOutline',
});

export type MediumAllProps = IconProps;

export const MediumAll: FC<MediumAllProps> = createSpriteIcon({
  name: 'plugins/package-checker/medium-all',
  viewBox: '0 0 24 24',
  displayName: 'MediumAll',
});

export type MediumAllTreeProps = IconProps;

export const MediumAllTree: FC<MediumAllTreeProps> = createSpriteIcon({
  name: 'plugins/package-checker/medium-all-tree',
  viewBox: '0 0 16 16',
  displayName: 'MediumAllTree',
});

export type MediumAllTreeOutlineProps = IconProps;

export const MediumAllTreeOutline: FC<MediumAllTreeOutlineProps> =
  createSpriteIcon({
    name: 'plugins/package-checker/medium-all-tree-outline',
    viewBox: '0 0 16 16',
    displayName: 'MediumAllTreeOutline',
  });

export type SafeAllProps = IconProps;

export const SafeAll: FC<SafeAllProps> = createSpriteIcon({
  name: 'plugins/package-checker/safe-all',
  viewBox: '0 0 24 24',
  displayName: 'SafeAll',
});

export type SafeAllTreeProps = IconProps;

export const SafeAllTree: FC<SafeAllTreeProps> = createSpriteIcon({
  name: 'plugins/package-checker/safe-all-tree',
  viewBox: '0 0 16 16',
  displayName: 'SafeAllTree',
});

export type SafeAllTreeOutlineProps = IconProps;

export const SafeAllTreeOutline: FC<SafeAllTreeOutlineProps> = createSpriteIcon(
  {
    name: 'plugins/package-checker/safe-all-tree-outline',
    viewBox: '0 0 16 16',
    displayName: 'SafeAllTreeOutline',
  },
);

export type UnchechedAllProps = IconProps;

export const UnchechedAll: FC<UnchechedAllProps> = createSpriteIcon({
  name: 'plugins/package-checker/uncheched-all',
  viewBox: '0 0 24 24',
  displayName: 'UnchechedAll',
});

export type UnchechedAllTreeProps = IconProps;

export const UnchechedAllTree: FC<UnchechedAllTreeProps> = createSpriteIcon({
  name: 'plugins/package-checker/uncheched-all-tree',
  viewBox: '0 0 16 16',
  displayName: 'UnchechedAllTree',
});

export type UnchechedAllTreeOutlineProps = IconProps;

export const UnchechedAllTreeOutline: FC<UnchechedAllTreeOutlineProps> =
  createSpriteIcon({
    name: 'plugins/package-checker/uncheched-all-tree-outline',
    viewBox: '0 0 16 16',
    displayName: 'UnchechedAllTreeOutline',
  });

export { iconNames } from '../types';
export type { IconName, IconMode, IconProps, IconSize } from '../types';
