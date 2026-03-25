import type { FC } from 'react';
import { createSpriteIcon } from '@/registry/components/icons';
import type { IconProps } from './types';

export type BuildProps = IconProps;

export const Build: FC<BuildProps> = createSpriteIcon({
  name: 'build/build',
  viewBox: '0 0 16 16',
  displayName: 'Build',
});

export type DependencyAnalyzerProps = IconProps;

export const DependencyAnalyzer: FC<DependencyAnalyzerProps> = createSpriteIcon(
  {
    name: 'build/dependency-analyzer',
    viewBox: '0 0 16 16',
    displayName: 'DependencyAnalyzer',
  },
);

export type GradleProps = IconProps;

export const Gradle: FC<GradleProps> = createSpriteIcon({
  name: 'build/gradle',
  viewBox: '0 0 16 16',
  displayName: 'Gradle',
});

export type GradleLoadChangesProps = IconProps;

export const GradleLoadChanges: FC<GradleLoadChangesProps> = createSpriteIcon({
  name: 'build/gradle-load-changes',
  viewBox: '0 0 16 16',
  displayName: 'GradleLoadChanges',
});

export type GradleNavigateProps = IconProps;

export const GradleNavigate: FC<GradleNavigateProps> = createSpriteIcon({
  name: 'build/gradle-navigate',
  viewBox: '0 0 16 16',
  displayName: 'GradleNavigate',
});

export type GradleSubprojectProps = IconProps;

export const GradleSubproject: FC<GradleSubprojectProps> = createSpriteIcon({
  name: 'build/gradle-subproject',
  viewBox: '0 0 16 16',
  displayName: 'GradleSubproject',
});

export type MavenBindProps = IconProps;

export const MavenBind: FC<MavenBindProps> = createSpriteIcon({
  name: 'build/maven-bind',
  viewBox: '0 0 16 16',
  displayName: 'MavenBind',
});

export type MavenBindChecksumProps = IconProps;

export const MavenBindChecksum: FC<MavenBindChecksumProps> = createSpriteIcon({
  name: 'build/maven-bind-checksum',
  viewBox: '0 0 16 16',
  displayName: 'MavenBindChecksum',
});

export type MavenChecksumProps = IconProps;

export const MavenChecksum: FC<MavenChecksumProps> = createSpriteIcon({
  name: 'build/maven-checksum',
  viewBox: '0 0 16 16',
  displayName: 'MavenChecksum',
});

export type MavenChildrenProjectsProps = IconProps;

export const MavenChildrenProjects: FC<MavenChildrenProjectsProps> =
  createSpriteIcon({
    name: 'build/maven-children-projects',
    viewBox: '0 0 14 14',
    displayName: 'MavenChildrenProjects',
  });

export type MavenFlexProps = IconProps;

export const MavenFlex: FC<MavenFlexProps> = createSpriteIcon({
  name: 'build/maven-flex',
  viewBox: '0 0 16 16',
  displayName: 'MavenFlex',
});

export type MavenLoadChangesProps = IconProps;

export const MavenLoadChanges: FC<MavenLoadChangesProps> = createSpriteIcon({
  name: 'build/maven-load-changes',
  viewBox: '0 0 16 16',
  displayName: 'MavenLoadChanges',
});

export type MavenModuleProps = IconProps;

export const MavenModule: FC<MavenModuleProps> = createSpriteIcon({
  name: 'build/maven-module',
  viewBox: '0 0 16 16',
  displayName: 'MavenModule',
});

export type MavenParentProjectsProps = IconProps;

export const MavenParentProjects: FC<MavenParentProjectsProps> =
  createSpriteIcon({
    name: 'build/maven-parent-projects',
    viewBox: '0 0 14 14',
    displayName: 'MavenParentProjects',
  });

export type MavenPluginProps = IconProps;

export const MavenPlugin: FC<MavenPluginProps> = createSpriteIcon({
  name: 'build/maven-plugin',
  viewBox: '0 0 16 16',
  displayName: 'MavenPlugin',
});

export type MavenPluginGoalProps = IconProps;

export const MavenPluginGoal: FC<MavenPluginGoalProps> = createSpriteIcon({
  name: 'build/maven-plugin-goal',
  viewBox: '0 0 16 16',
  displayName: 'MavenPluginGoal',
});

export type MavenProfilesProps = IconProps;

export const MavenProfiles: FC<MavenProfilesProps> = createSpriteIcon({
  name: 'build/maven-profiles',
  viewBox: '0 0 16 16',
  displayName: 'MavenProfiles',
});

export type MavenProjectProps = IconProps;

export const MavenProject: FC<MavenProjectProps> = createSpriteIcon({
  name: 'build/maven-project',
  viewBox: '0 0 16 16',
  displayName: 'MavenProject',
});

export type TaskProps = IconProps;

export const Task: FC<TaskProps> = createSpriteIcon({
  name: 'build/task',
  viewBox: '0 0 16 16',
  displayName: 'Task',
});

export type TaskGroupProps = IconProps;

export const TaskGroup: FC<TaskGroupProps> = createSpriteIcon({
  name: 'build/task-group',
  viewBox: '0 0 16 16',
  displayName: 'TaskGroup',
});

export type ToggleOfflineModeProps = IconProps;

export const ToggleOfflineMode: FC<ToggleOfflineModeProps> = createSpriteIcon({
  name: 'build/toggle-offline-mode',
  viewBox: '0 0 16 16',
  displayName: 'ToggleOfflineMode',
});

export type ToggleSkipTestsModeProps = IconProps;

export const ToggleSkipTestsMode: FC<ToggleSkipTestsModeProps> =
  createSpriteIcon({
    name: 'build/toggle-skip-tests-mode',
    viewBox: '0 0 16 16',
    displayName: 'ToggleSkipTestsMode',
  });

export type UpdateFoldersProps = IconProps;

export const UpdateFolders: FC<UpdateFoldersProps> = createSpriteIcon({
  name: 'build/update-folders',
  viewBox: '0 0 16 16',
  displayName: 'UpdateFolders',
});

export { iconNames } from './types';
export type { IconName, IconMode, IconProps, IconSize } from './types';
