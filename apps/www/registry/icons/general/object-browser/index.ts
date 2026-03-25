import type { FC } from 'react';
import { createSpriteIcon } from '@/registry/components/icons';
import type { IconProps } from '../types';

export type AbbreviatePackageNamesProps = IconProps;

export const AbbreviatePackageNames: FC<AbbreviatePackageNamesProps> =
  createSpriteIcon({
    name: 'general/object-browser/abbreviate-package-names',
    viewBox: '0 0 16 16',
    displayName: 'AbbreviatePackageNames',
  });

export type CompactEmptyPackagesProps = IconProps;

export const CompactEmptyPackages: FC<CompactEmptyPackagesProps> =
  createSpriteIcon({
    name: 'general/object-browser/compact-empty-packages',
    viewBox: '0 0 16 16',
    displayName: 'CompactEmptyPackages',
  });

export type FlattenModulesProps = IconProps;

export const FlattenModules: FC<FlattenModulesProps> = createSpriteIcon({
  name: 'general/object-browser/flatten-modules',
  viewBox: '0 0 16 16',
  displayName: 'FlattenModules',
});

export type FlattenPackagesProps = IconProps;

export const FlattenPackages: FC<FlattenPackagesProps> = createSpriteIcon({
  name: 'general/object-browser/flatten-packages',
  viewBox: '0 0 16 16',
  displayName: 'FlattenPackages',
});

export type ShowLibraryContentsProps = IconProps;

export const ShowLibraryContents: FC<ShowLibraryContentsProps> =
  createSpriteIcon({
    name: 'general/object-browser/show-library-contents',
    viewBox: '0 0 16 16',
    displayName: 'ShowLibraryContents',
  });

export type ShowMembersProps = IconProps;

export const ShowMembers: FC<ShowMembersProps> = createSpriteIcon({
  name: 'general/object-browser/show-members',
  viewBox: '0 0 16 16',
  displayName: 'ShowMembers',
});

export type SortAlphabeticallyProps = IconProps;

export const SortAlphabetically: FC<SortAlphabeticallyProps> = createSpriteIcon(
  {
    name: 'general/object-browser/sort-alphabetically',
    viewBox: '0 0 16 16',
    displayName: 'SortAlphabetically',
  },
);

export type SortByTypeProps = IconProps;

export const SortByType: FC<SortByTypeProps> = createSpriteIcon({
  name: 'general/object-browser/sort-by-type',
  viewBox: '0 0 16 16',
  displayName: 'SortByType',
});

export type SortByUsageProps = IconProps;

export const SortByUsage: FC<SortByUsageProps> = createSpriteIcon({
  name: 'general/object-browser/sort-by-usage',
  viewBox: '0 0 16 16',
  displayName: 'SortByUsage',
});

export type SortByVisibilityProps = IconProps;

export const SortByVisibility: FC<SortByVisibilityProps> = createSpriteIcon({
  name: 'general/object-browser/sort-by-visibility',
  viewBox: '0 0 16 16',
  displayName: 'SortByVisibility',
});

export { iconNames } from '../types';
export type { IconName, IconMode, IconProps, IconSize } from '../types';
