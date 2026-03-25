import type { FC } from 'react';
import { createSpriteIcon } from '@/registry/components/icons';
import type { IconProps } from '../types';

export type BrowseProps = IconProps;

export const Browse: FC<BrowseProps> = createSpriteIcon({
  name: 'general/inline/browse',
  viewBox: '0 0 16 16',
  displayName: 'Browse',
});

export type CollapseProps = IconProps;

export const Collapse: FC<CollapseProps> = createSpriteIcon({
  name: 'general/inline/collapse',
  viewBox: '0 0 16 16',
  displayName: 'Collapse',
});

export type CopyProps = IconProps;

export const Copy: FC<CopyProps> = createSpriteIcon({
  name: 'general/inline/copy',
  viewBox: '0 0 16 16',
  displayName: 'Copy',
});

export type ExactWordsProps = IconProps;

export const ExactWords: FC<ExactWordsProps> = createSpriteIcon({
  name: 'general/inline/exact-words',
  viewBox: '0 0 16 16',
  displayName: 'ExactWords',
});

export type ExpandProps = IconProps;

export const Expand: FC<ExpandProps> = createSpriteIcon({
  name: 'general/inline/expand',
  viewBox: '0 0 16 16',
  displayName: 'Expand',
});

export type FilterHistoryProps = IconProps;

export const FilterHistory: FC<FilterHistoryProps> = createSpriteIcon({
  name: 'general/inline/filter-history',
  viewBox: '0 0 16 16',
  displayName: 'FilterHistory',
});

export type InlineAddProps = IconProps;

export const InlineAdd: FC<InlineAddProps> = createSpriteIcon({
  name: 'general/inline/inline-add',
  viewBox: '0 0 16 16',
  displayName: 'InlineAdd',
});

export type InlineEditProps = IconProps;

export const InlineEdit: FC<InlineEditProps> = createSpriteIcon({
  name: 'general/inline/inline-edit',
  viewBox: '0 0 16 16',
  displayName: 'InlineEdit',
});

export type InlineSettingsProps = IconProps;

export const InlineSettings: FC<InlineSettingsProps> = createSpriteIcon({
  name: 'general/inline/inline-settings',
  viewBox: '0 0 16 16',
  displayName: 'InlineSettings',
});

export type MatchCaseProps = IconProps;

export const MatchCase: FC<MatchCaseProps> = createSpriteIcon({
  name: 'general/inline/match-case',
  viewBox: '0 0 16 16',
  displayName: 'MatchCase',
});

export type NewLineProps = IconProps;

export const NewLine: FC<NewLineProps> = createSpriteIcon({
  name: 'general/inline/new-line',
  viewBox: '0 0 16 16',
  displayName: 'NewLine',
});

export type PreserveCaseProps = IconProps;

export const PreserveCase: FC<PreserveCaseProps> = createSpriteIcon({
  name: 'general/inline/preserve-case',
  viewBox: '0 0 16 16',
  displayName: 'PreserveCase',
});

export type RefreshProps = IconProps;

export const Refresh: FC<RefreshProps> = createSpriteIcon({
  name: 'general/inline/refresh',
  viewBox: '0 0 16 16',
  displayName: 'Refresh',
});

export type RegexProps = IconProps;

export const Regex: FC<RegexProps> = createSpriteIcon({
  name: 'general/inline/regex',
  viewBox: '0 0 16 16',
  displayName: 'Regex',
});

export type SearchHistoryProps = IconProps;

export const SearchHistory: FC<SearchHistoryProps> = createSpriteIcon({
  name: 'general/inline/search-history',
  viewBox: '0 0 16 16',
  displayName: 'SearchHistory',
});

export type SortHistoryProps = IconProps;

export const SortHistory: FC<SortHistoryProps> = createSpriteIcon({
  name: 'general/inline/sort-history',
  viewBox: '0 0 16 16',
  displayName: 'SortHistory',
});

export type StatisticsPanelProps = IconProps;

export const StatisticsPanel: FC<StatisticsPanelProps> = createSpriteIcon({
  name: 'general/inline/statistics-panel',
  viewBox: '0 0 16 16',
  displayName: 'StatisticsPanel',
});

export type VariablesProps = IconProps;

export const Variables: FC<VariablesProps> = createSpriteIcon({
  name: 'general/inline/variables',
  viewBox: '0 0 16 16',
  displayName: 'Variables',
});

export { iconNames } from '../types';
export type { IconName, IconMode, IconProps, IconSize } from '../types';
