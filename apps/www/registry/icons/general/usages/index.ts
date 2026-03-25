import type { FC } from 'react';
import { createSpriteIcon } from '@/registry/components/icons';
import type { IconProps } from '../types';

export type FilterdupsProps = IconProps;

export const Filterdups: FC<FilterdupsProps> = createSpriteIcon({
  name: 'general/usages/filterdups',
  viewBox: '0 0 16 16',
  displayName: 'Filterdups',
});

export type ShowImportStatementsProps = IconProps;

export const ShowImportStatements: FC<ShowImportStatementsProps> =
  createSpriteIcon({
    name: 'general/usages/show-import-statements',
    viewBox: '0 0 16 16',
    displayName: 'ShowImportStatements',
  });

export type ShowReadAccessProps = IconProps;

export const ShowReadAccess: FC<ShowReadAccessProps> = createSpriteIcon({
  name: 'general/usages/show-read-access',
  viewBox: '0 0 16 16',
  displayName: 'ShowReadAccess',
});

export type ShowWriteAccessProps = IconProps;

export const ShowWriteAccess: FC<ShowWriteAccessProps> = createSpriteIcon({
  name: 'general/usages/show-write-access',
  viewBox: '0 0 16 16',
  displayName: 'ShowWriteAccess',
});

export { iconNames } from '../types';
export type { IconName, IconMode, IconProps, IconSize } from '../types';
