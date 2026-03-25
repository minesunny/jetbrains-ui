import type { FC } from 'react';
import { createSpriteIcon } from '@/registry/components/icons';
import type { IconProps } from '../types';

export type AddColumnLeftProps = IconProps;

export const AddColumnLeft: FC<AddColumnLeftProps> = createSpriteIcon({
  name: 'general/editor/add-column-left',
  viewBox: '0 0 16 16',
  displayName: 'AddColumnLeft',
});

export type AddColumnRightProps = IconProps;

export const AddColumnRight: FC<AddColumnRightProps> = createSpriteIcon({
  name: 'general/editor/add-column-right',
  viewBox: '0 0 16 16',
  displayName: 'AddColumnRight',
});

export type AddRowAboveProps = IconProps;

export const AddRowAbove: FC<AddRowAboveProps> = createSpriteIcon({
  name: 'general/editor/add-row-above',
  viewBox: '0 0 16 16',
  displayName: 'AddRowAbove',
});

export type AddRowBelowProps = IconProps;

export const AddRowBelow: FC<AddRowBelowProps> = createSpriteIcon({
  name: 'general/editor/add-row-below',
  viewBox: '0 0 16 16',
  displayName: 'AddRowBelow',
});

export type BoldProps = IconProps;

export const Bold: FC<BoldProps> = createSpriteIcon({
  name: 'general/editor/bold',
  viewBox: '0 0 16 16',
  displayName: 'Bold',
});

export type BulletListProps = IconProps;

export const BulletList: FC<BulletListProps> = createSpriteIcon({
  name: 'general/editor/bullet-list',
  viewBox: '0 0 16 16',
  displayName: 'BulletList',
});

export type CenterAlignProps = IconProps;

export const CenterAlign: FC<CenterAlignProps> = createSpriteIcon({
  name: 'general/editor/center-align',
  viewBox: '0 0 16 16',
  displayName: 'CenterAlign',
});

export type CheckmarkListProps = IconProps;

export const CheckmarkList: FC<CheckmarkListProps> = createSpriteIcon({
  name: 'general/editor/checkmark-list',
  viewBox: '0 0 16 16',
  displayName: 'CheckmarkList',
});

export type CodeSpanProps = IconProps;

export const CodeSpan: FC<CodeSpanProps> = createSpriteIcon({
  name: 'general/editor/code-span',
  viewBox: '0 0 16 16',
  displayName: 'CodeSpan',
});

export type HeaderLevelDownProps = IconProps;

export const HeaderLevelDown: FC<HeaderLevelDownProps> = createSpriteIcon({
  name: 'general/editor/header-level-down',
  viewBox: '0 0 16 16',
  displayName: 'HeaderLevelDown',
});

export type HeaderLevelUpProps = IconProps;

export const HeaderLevelUp: FC<HeaderLevelUpProps> = createSpriteIcon({
  name: 'general/editor/header-level-up',
  viewBox: '0 0 16 16',
  displayName: 'HeaderLevelUp',
});

export type ItalicProps = IconProps;

export const Italic: FC<ItalicProps> = createSpriteIcon({
  name: 'general/editor/italic',
  viewBox: '0 0 16 16',
  displayName: 'Italic',
});

export type LeftAlignProps = IconProps;

export const LeftAlign: FC<LeftAlignProps> = createSpriteIcon({
  name: 'general/editor/left-align',
  viewBox: '0 0 16 16',
  displayName: 'LeftAlign',
});

export type LinkProps = IconProps;

export const Link: FC<LinkProps> = createSpriteIcon({
  name: 'general/editor/link',
  viewBox: '0 0 16 16',
  displayName: 'Link',
});

export type NumberedListProps = IconProps;

export const NumberedList: FC<NumberedListProps> = createSpriteIcon({
  name: 'general/editor/numbered-list',
  viewBox: '0 0 16 16',
  displayName: 'NumberedList',
});

export type RightAlignProps = IconProps;

export const RightAlign: FC<RightAlignProps> = createSpriteIcon({
  name: 'general/editor/right-align',
  viewBox: '0 0 16 16',
  displayName: 'RightAlign',
});

export type StrikeThroughProps = IconProps;

export const StrikeThrough: FC<StrikeThroughProps> = createSpriteIcon({
  name: 'general/editor/strike-through',
  viewBox: '0 0 16 16',
  displayName: 'StrikeThrough',
});

export type TableProps = IconProps;

export const Table: FC<TableProps> = createSpriteIcon({
  name: 'general/editor/table',
  viewBox: '0 0 16 16',
  displayName: 'Table',
});

export { iconNames } from '../types';
export type { IconName, IconMode, IconProps, IconSize } from '../types';
