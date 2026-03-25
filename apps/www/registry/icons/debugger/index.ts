import type { FC } from 'react';
import { createSpriteIcon } from '@/registry/components/icons';
import type { IconProps } from './types';

export type AddToWatchProps = IconProps;

export const AddToWatch: FC<AddToWatchProps> = createSpriteIcon({
  name: 'debugger/add-to-watch',
  viewBox: '0 0 16 16',
  displayName: 'AddToWatch',
});

export type ClassLevelWatchProps = IconProps;

export const ClassLevelWatch: FC<ClassLevelWatchProps> = createSpriteIcon({
  name: 'debugger/class-level-watch',
  viewBox: '0 0 16 16',
  displayName: 'ClassLevelWatch',
});

export type DbArrayProps = IconProps;

export const DbArray: FC<DbArrayProps> = createSpriteIcon({
  name: 'debugger/db-array',
  viewBox: '0 0 16 16',
  displayName: 'DbArray',
});

export type DbPrimitiveProps = IconProps;

export const DbPrimitive: FC<DbPrimitiveProps> = createSpriteIcon({
  name: 'debugger/db-primitive',
  viewBox: '0 0 16 16',
  displayName: 'DbPrimitive',
});

export type EvaluationResultProps = IconProps;

export const EvaluationResult: FC<EvaluationResultProps> = createSpriteIcon({
  name: 'debugger/evaluation-result',
  viewBox: '0 0 16 16',
  displayName: 'EvaluationResult',
});

export type FrameProps = IconProps;

export const Frame: FC<FrameProps> = createSpriteIcon({
  name: 'debugger/frame',
  viewBox: '0 0 16 16',
  displayName: 'Frame',
});

export type PromptInputProps = IconProps;

export const PromptInput: FC<PromptInputProps> = createSpriteIcon({
  name: 'debugger/prompt-input',
  viewBox: '0 0 16 16',
  displayName: 'PromptInput',
});

export type PromptInputHistoryProps = IconProps;

export const PromptInputHistory: FC<PromptInputHistoryProps> = createSpriteIcon(
  {
    name: 'debugger/prompt-input-history',
    viewBox: '0 0 16 16',
    displayName: 'PromptInputHistory',
  },
);

export type SelfReferenceProps = IconProps;

export const SelfReference: FC<SelfReferenceProps> = createSpriteIcon({
  name: 'debugger/self-reference',
  viewBox: '0 0 16 16',
  displayName: 'SelfReference',
});

export type ThreadAtBreakpointProps = IconProps;

export const ThreadAtBreakpoint: FC<ThreadAtBreakpointProps> = createSpriteIcon(
  {
    name: 'debugger/thread-at-breakpoint',
    viewBox: '0 0 16 16',
    displayName: 'ThreadAtBreakpoint',
  },
);

export type ThreadCurrentProps = IconProps;

export const ThreadCurrent: FC<ThreadCurrentProps> = createSpriteIcon({
  name: 'debugger/thread-current',
  viewBox: '0 0 16 16',
  displayName: 'ThreadCurrent',
});

export type ThreadFrozenProps = IconProps;

export const ThreadFrozen: FC<ThreadFrozenProps> = createSpriteIcon({
  name: 'debugger/thread-frozen',
  viewBox: '0 0 16 16',
  displayName: 'ThreadFrozen',
});

export type ThreadGroupCurrentProps = IconProps;

export const ThreadGroupCurrent: FC<ThreadGroupCurrentProps> = createSpriteIcon(
  {
    name: 'debugger/thread-group-current',
    viewBox: '0 0 16 16',
    displayName: 'ThreadGroupCurrent',
  },
);

export type ThreadRunningProps = IconProps;

export const ThreadRunning: FC<ThreadRunningProps> = createSpriteIcon({
  name: 'debugger/thread-running',
  viewBox: '0 0 16 16',
  displayName: 'ThreadRunning',
});

export type ThreadsProps = IconProps;

export const Threads: FC<ThreadsProps> = createSpriteIcon({
  name: 'debugger/threads',
  viewBox: '0 0 16 16',
  displayName: 'Threads',
});

export type ValueProps = IconProps;

export const Value: FC<ValueProps> = createSpriteIcon({
  name: 'debugger/value',
  viewBox: '0 0 16 16',
  displayName: 'Value',
});

export type VariablesTabProps = IconProps;

export const VariablesTab: FC<VariablesTabProps> = createSpriteIcon({
  name: 'debugger/variables-tab',
  viewBox: '0 0 16 16',
  displayName: 'VariablesTab',
});

export type WatchLastReturnValueProps = IconProps;

export const WatchLastReturnValue: FC<WatchLastReturnValueProps> =
  createSpriteIcon({
    name: 'debugger/watch-last-return-value',
    viewBox: '0 0 16 16',
    displayName: 'WatchLastReturnValue',
  });

export { iconNames } from './types';
export type { IconName, IconMode, IconProps, IconSize } from './types';
