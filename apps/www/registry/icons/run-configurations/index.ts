import type { FC } from 'react';
import { createSpriteIcon } from '@/registry/components/icons';
import type { IconProps } from './types';

export type ApplicationProps = IconProps;

export const Application: FC<ApplicationProps> = createSpriteIcon({
  name: 'run-configurations/application',
  viewBox: '0 0 16 16',
  displayName: 'Application',
});

export type ApplicationRemoteProps = IconProps;

export const ApplicationRemote: FC<ApplicationRemoteProps> = createSpriteIcon({
  name: 'run-configurations/application-remote',
  viewBox: '0 0 16 16',
  displayName: 'ApplicationRemote',
});

export type CompoundProps = IconProps;

export const Compound: FC<CompoundProps> = createSpriteIcon({
  name: 'run-configurations/compound',
  viewBox: '0 0 16 16',
  displayName: 'Compound',
});

export type IgnoredTestProps = IconProps;

export const IgnoredTest: FC<IgnoredTestProps> = createSpriteIcon({
  name: 'run-configurations/ignored-test',
  viewBox: '0 0 16 16',
  displayName: 'IgnoredTest',
});

export type InvalidConfigurationLayerProps = IconProps;

export const InvalidConfigurationLayer: FC<InvalidConfigurationLayerProps> =
  createSpriteIcon({
    name: 'run-configurations/invalid-configuration-layer',
    viewBox: '0 0 16 16',
    displayName: 'InvalidConfigurationLayer',
  });

export type JavaScratchProps = IconProps;

export const JavaScratch: FC<JavaScratchProps> = createSpriteIcon({
  name: 'run-configurations/java-scratch',
  viewBox: '0 0 16 16',
  displayName: 'JavaScratch',
});

export type JavaScriptDebugConfigurationProps = IconProps;

export const JavaScriptDebugConfiguration: FC<JavaScriptDebugConfigurationProps> =
  createSpriteIcon({
    name: 'run-configurations/java-script-debug-configuration',
    viewBox: '0 0 16 16',
    displayName: 'JavaScriptDebugConfiguration',
  });

export type JavaScriptRemoteProps = IconProps;

export const JavaScriptRemote: FC<JavaScriptRemoteProps> = createSpriteIcon({
  name: 'run-configurations/java-script-remote',
  viewBox: '0 0 16 16',
  displayName: 'JavaScriptRemote',
});

export type JunitProps = IconProps;

export const Junit: FC<JunitProps> = createSpriteIcon({
  name: 'run-configurations/junit',
  viewBox: '0 0 16 16',
  displayName: 'Junit',
});

export type JunitTestMarkProps = IconProps;

export const JunitTestMark: FC<JunitTestMarkProps> = createSpriteIcon({
  name: 'run-configurations/junit-test-mark',
  viewBox: '0 0 16 16',
  displayName: 'JunitTestMark',
});

export type PhpLocalProps = IconProps;

export const PhpLocal: FC<PhpLocalProps> = createSpriteIcon({
  name: 'run-configurations/php-local',
  viewBox: '0 0 16 16',
  displayName: 'PhpLocal',
});

export type PhpRemoteProps = IconProps;

export const PhpRemote: FC<PhpRemoteProps> = createSpriteIcon({
  name: 'run-configurations/php-remote',
  viewBox: '0 0 16 16',
  displayName: 'PhpRemote',
});

export type PhpWebProps = IconProps;

export const PhpWeb: FC<PhpWebProps> = createSpriteIcon({
  name: 'run-configurations/php-web',
  viewBox: '0 0 16 16',
  displayName: 'PhpWeb',
});

export type RunHttpRequestProps = IconProps;

export const RunHttpRequest: FC<RunHttpRequestProps> = createSpriteIcon({
  name: 'run-configurations/run-http-request',
  viewBox: '0 0 16 16',
  displayName: 'RunHttpRequest',
});

export type WebAppProps = IconProps;

export const WebApp: FC<WebAppProps> = createSpriteIcon({
  name: 'run-configurations/web-app',
  viewBox: '0 0 16 16',
  displayName: 'WebApp',
});

export { iconNames } from './types';
export type { IconName, IconMode, IconProps, IconSize } from './types';
