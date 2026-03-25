import type { FC } from 'react';
import { createSpriteIcon } from '@/registry/components/icons';
import type { IconProps } from '../types';

export type AddNoteProps = IconProps;

export const AddNote: FC<AddNoteProps> = createSpriteIcon({
  name: 'plugins/uml/add-note',
  viewBox: '0 0 16 16',
  displayName: 'AddNote',
});

export type ConstructorProps = IconProps;

export const Constructor: FC<ConstructorProps> = createSpriteIcon({
  name: 'plugins/uml/constructor',
  viewBox: '0 0 16 16',
  displayName: 'Constructor',
});

export type DependenciesProps = IconProps;

export const Dependencies: FC<DependenciesProps> = createSpriteIcon({
  name: 'plugins/uml/dependencies',
  viewBox: '0 0 16 16',
  displayName: 'Dependencies',
});

export type EdgeModProps = IconProps;

export const EdgeMod: FC<EdgeModProps> = createSpriteIcon({
  name: 'plugins/uml/edge-mod',
  viewBox: '0 0 16 16',
  displayName: 'EdgeMod',
});

export type InnerClassProps = IconProps;

export const InnerClass: FC<InnerClassProps> = createSpriteIcon({
  name: 'plugins/uml/inner-class',
  viewBox: '0 0 16 16',
  displayName: 'InnerClass',
});

export { iconNames } from '../types';
export type { IconName, IconMode, IconProps, IconSize } from '../types';
