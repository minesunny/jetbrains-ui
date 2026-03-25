import type { FC } from 'react';
import { createSpriteIcon } from '@/registry/components/icons';
import type { IconProps } from './types';

export type AttachToProcessProps = IconProps;

export const AttachToProcess: FC<AttachToProcessProps> = createSpriteIcon({
  name: 'run/attach-to-process',
  viewBox: '0 0 16 16',
  displayName: 'AttachToProcess',
});

export type DebugProps = IconProps;

export const Debug: FC<DebugProps> = createSpriteIcon({
  name: 'run/debug',
  viewBox: '0 0 16 16',
  displayName: 'Debug',
});

export type DumpThreadsProps = IconProps;

export const DumpThreads: FC<DumpThreadsProps> = createSpriteIcon({
  name: 'run/dump-threads',
  viewBox: '0 0 16 16',
  displayName: 'DumpThreads',
});

export type EvaluateExpressionProps = IconProps;

export const EvaluateExpression: FC<EvaluateExpressionProps> = createSpriteIcon(
  {
    name: 'run/evaluate-expression',
    viewBox: '0 0 16 16',
    displayName: 'EvaluateExpression',
  },
);

export type FailedInProgressProps = IconProps;

export const FailedInProgress: FC<FailedInProgressProps> = createSpriteIcon({
  name: 'run/failed-in-progress',
  viewBox: '0 0 16 16',
  displayName: 'FailedInProgress',
});

export type ForceRunToCursorProps = IconProps;

export const ForceRunToCursor: FC<ForceRunToCursorProps> = createSpriteIcon({
  name: 'run/force-run-to-cursor',
  viewBox: '0 0 16 16',
  displayName: 'ForceRunToCursor',
});

export type ForceStepIntoProps = IconProps;

export const ForceStepInto: FC<ForceStepIntoProps> = createSpriteIcon({
  name: 'run/force-step-into',
  viewBox: '0 0 16 16',
  displayName: 'ForceStepInto',
});

export type ForceStepOverProps = IconProps;

export const ForceStepOver: FC<ForceStepOverProps> = createSpriteIcon({
  name: 'run/force-step-over',
  viewBox: '0 0 16 16',
  displayName: 'ForceStepOver',
});

export type KillProcessProps = IconProps;

export const KillProcess: FC<KillProcessProps> = createSpriteIcon({
  name: 'run/kill-process',
  viewBox: '0 0 16 16',
  displayName: 'KillProcess',
});

export type MuteBreakpointsProps = IconProps;

export const MuteBreakpoints: FC<MuteBreakpointsProps> = createSpriteIcon({
  name: 'run/mute-breakpoints',
  viewBox: '0 0 16 16',
  displayName: 'MuteBreakpoints',
});

export type PauseProps = IconProps;

export const Pause: FC<PauseProps> = createSpriteIcon({
  name: 'run/pause',
  viewBox: '0 0 16 16',
  displayName: 'Pause',
});

export type ProfileProps = IconProps;

export const Profile: FC<ProfileProps> = createSpriteIcon({
  name: 'run/profile',
  viewBox: '0 0 16 16',
  displayName: 'Profile',
});

export type RerunProps = IconProps;

export const Rerun: FC<RerunProps> = createSpriteIcon({
  name: 'run/rerun',
  viewBox: '0 0 16 16',
  displayName: 'Rerun',
});

export type RerunAutomaticallyProps = IconProps;

export const RerunAutomatically: FC<RerunAutomaticallyProps> = createSpriteIcon(
  {
    name: 'run/rerun-automatically',
    viewBox: '0 0 16 16',
    displayName: 'RerunAutomatically',
  },
);

export type RestartProps = IconProps;

export const Restart: FC<RestartProps> = createSpriteIcon({
  name: 'run/restart',
  viewBox: '0 0 16 16',
  displayName: 'Restart',
});

export type RestartDebugProps = IconProps;

export const RestartDebug: FC<RestartDebugProps> = createSpriteIcon({
  name: 'run/restart-debug',
  viewBox: '0 0 16 16',
  displayName: 'RestartDebug',
});

export type RestartFailedTestsProps = IconProps;

export const RestartFailedTests: FC<RestartFailedTestsProps> = createSpriteIcon(
  {
    name: 'run/restart-failed-tests',
    viewBox: '0 0 16 16',
    displayName: 'RestartFailedTests',
  },
);

export type RestartFrameProps = IconProps;

export const RestartFrame: FC<RestartFrameProps> = createSpriteIcon({
  name: 'run/restart-frame',
  viewBox: '0 0 16 16',
  displayName: 'RestartFrame',
});

export type ResumeProps = IconProps;

export const Resume: FC<ResumeProps> = createSpriteIcon({
  name: 'run/resume',
  viewBox: '0 0 16 16',
  displayName: 'Resume',
});

export type RunProps = IconProps;

export const Run: FC<RunProps> = createSpriteIcon({
  name: 'run/run',
  viewBox: '0 0 16 16',
  displayName: 'Run',
});

export type RunToCursorProps = IconProps;

export const RunToCursor: FC<RunToCursorProps> = createSpriteIcon({
  name: 'run/run-to-cursor',
  viewBox: '0 0 16 16',
  displayName: 'RunToCursor',
});

export type RunWithCoverageProps = IconProps;

export const RunWithCoverage: FC<RunWithCoverageProps> = createSpriteIcon({
  name: 'run/run-with-coverage',
  viewBox: '0 0 16 16',
  displayName: 'RunWithCoverage',
});

export type ShowCurrentFrameProps = IconProps;

export const ShowCurrentFrame: FC<ShowCurrentFrameProps> = createSpriteIcon({
  name: 'run/show-current-frame',
  viewBox: '0 0 16 16',
  displayName: 'ShowCurrentFrame',
});

export type ShowIgnoredProps = IconProps;

export const ShowIgnored: FC<ShowIgnoredProps> = createSpriteIcon({
  name: 'run/show-ignored',
  viewBox: '0 0 16 16',
  displayName: 'ShowIgnored',
});

export type ShowPassedProps = IconProps;

export const ShowPassed: FC<ShowPassedProps> = createSpriteIcon({
  name: 'run/show-passed',
  viewBox: '0 0 16 16',
  displayName: 'ShowPassed',
});

export type SmartStepIntoProps = IconProps;

export const SmartStepInto: FC<SmartStepIntoProps> = createSpriteIcon({
  name: 'run/smart-step-into',
  viewBox: '0 0 16 16',
  displayName: 'SmartStepInto',
});

export type StepIntoProps = IconProps;

export const StepInto: FC<StepIntoProps> = createSpriteIcon({
  name: 'run/step-into',
  viewBox: '0 0 16 16',
  displayName: 'StepInto',
});

export type StepOutProps = IconProps;

export const StepOut: FC<StepOutProps> = createSpriteIcon({
  name: 'run/step-out',
  viewBox: '0 0 16 16',
  displayName: 'StepOut',
});

export type StepOutCodeBlockProps = IconProps;

export const StepOutCodeBlock: FC<StepOutCodeBlockProps> = createSpriteIcon({
  name: 'run/step-out-code-block',
  viewBox: '0 0 16 16',
  displayName: 'StepOutCodeBlock',
});

export type StepOverProps = IconProps;

export const StepOver: FC<StepOverProps> = createSpriteIcon({
  name: 'run/step-over',
  viewBox: '0 0 16 16',
  displayName: 'StepOver',
});

export type StopProps = IconProps;

export const Stop: FC<StopProps> = createSpriteIcon({
  name: 'run/stop',
  viewBox: '0 0 16 16',
  displayName: 'Stop',
});

export type TestCustomProps = IconProps;

export const TestCustom: FC<TestCustomProps> = createSpriteIcon({
  name: 'run/test-custom',
  viewBox: '0 0 16 16',
  displayName: 'TestCustom',
});

export type TestErrorProps = IconProps;

export const TestError: FC<TestErrorProps> = createSpriteIcon({
  name: 'run/test-error',
  viewBox: '0 0 16 16',
  displayName: 'TestError',
});

export type TestFailedProps = IconProps;

export const TestFailed: FC<TestFailedProps> = createSpriteIcon({
  name: 'run/test-failed',
  viewBox: '0 0 16 16',
  displayName: 'TestFailed',
});

export type TestIgnoredProps = IconProps;

export const TestIgnored: FC<TestIgnoredProps> = createSpriteIcon({
  name: 'run/test-ignored',
  viewBox: '0 0 16 16',
  displayName: 'TestIgnored',
});

export type TestNotRunYetProps = IconProps;

export const TestNotRunYet: FC<TestNotRunYetProps> = createSpriteIcon({
  name: 'run/test-not-run-yet',
  viewBox: '0 0 16 16',
  displayName: 'TestNotRunYet',
});

export type TestPassedProps = IconProps;

export const TestPassed: FC<TestPassedProps> = createSpriteIcon({
  name: 'run/test-passed',
  viewBox: '0 0 16 16',
  displayName: 'TestPassed',
});

export type TestPassedIgnoredProps = IconProps;

export const TestPassedIgnored: FC<TestPassedIgnoredProps> = createSpriteIcon({
  name: 'run/test-passed-ignored',
  viewBox: '0 0 16 16',
  displayName: 'TestPassedIgnored',
});

export type TestPausedProps = IconProps;

export const TestPaused: FC<TestPausedProps> = createSpriteIcon({
  name: 'run/test-paused',
  viewBox: '0 0 16 16',
  displayName: 'TestPaused',
});

export type TestRunnerWatchProps = IconProps;

export const TestRunnerWatch: FC<TestRunnerWatchProps> = createSpriteIcon({
  name: 'run/test-runner-watch',
  viewBox: '0 0 16 16',
  displayName: 'TestRunnerWatch',
});

export type TestSkippedProps = IconProps;

export const TestSkipped: FC<TestSkippedProps> = createSpriteIcon({
  name: 'run/test-skipped',
  viewBox: '0 0 16 16',
  displayName: 'TestSkipped',
});

export type TestTerminatedProps = IconProps;

export const TestTerminated: FC<TestTerminatedProps> = createSpriteIcon({
  name: 'run/test-terminated',
  viewBox: '0 0 16 16',
  displayName: 'TestTerminated',
});

export type TestUnknownProps = IconProps;

export const TestUnknown: FC<TestUnknownProps> = createSpriteIcon({
  name: 'run/test-unknown',
  viewBox: '0 0 16 16',
  displayName: 'TestUnknown',
});

export type TraceStreamProps = IconProps;

export const TraceStream: FC<TraceStreamProps> = createSpriteIcon({
  name: 'run/trace-stream',
  viewBox: '0 0 16 16',
  displayName: 'TraceStream',
});

export type ViewBreakpointsProps = IconProps;

export const ViewBreakpoints: FC<ViewBreakpointsProps> = createSpriteIcon({
  name: 'run/view-breakpoints',
  viewBox: '0 0 16 16',
  displayName: 'ViewBreakpoints',
});

export type WatchProps = IconProps;

export const Watch: FC<WatchProps> = createSpriteIcon({
  name: 'run/watch',
  viewBox: '0 0 16 16',
  displayName: 'Watch',
});

export { iconNames } from './types';
export type { IconName, IconMode, IconProps, IconSize } from './types';
