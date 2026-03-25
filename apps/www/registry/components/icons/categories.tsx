'use client';

import * as React from 'react';

import { SVG, type SVGProps } from './icon';

export interface CategoryIconProps extends Omit<SVGProps, 'name'> {
  name: string;
}

function createCategoryIcon(category: string, displayName: string) {
  const CategoryIcon: React.FC<CategoryIconProps> = ({ name, ...props }) => {
    return <SVG name={`${category}/${name}`} {...props} />;
  };

  CategoryIcon.displayName = displayName;

  return CategoryIcon;
}

export interface BreakpointsProps extends CategoryIconProps {}

export const Breakpoints = createCategoryIcon('breakpoints', 'Breakpoints');

export interface BuildProps extends CategoryIconProps {}

export const Build = createCategoryIcon('build', 'Build');

export interface DatabaseProps extends CategoryIconProps {}

export const Database = createCategoryIcon('database', 'Database');

export interface DebuggerProps extends CategoryIconProps {}

export const Debugger = createCategoryIcon('debugger', 'Debugger');

export interface EditorIconsProps extends CategoryIconProps {}

export const EditorIcons = createCategoryIcon('editor-icons', 'EditorIcons');

export interface FileTypesProps extends CategoryIconProps {}

export const FileTypes = createCategoryIcon('file-types', 'FileTypes');

export interface GeneralProps extends CategoryIconProps {}

export const General = createCategoryIcon('general', 'General');

export interface NodesProps extends CategoryIconProps {}

export const Nodes = createCategoryIcon('nodes', 'Nodes');

export interface PluginsProps extends CategoryIconProps {}

export const Plugins = createCategoryIcon('plugins', 'Plugins');

export interface RunProps extends CategoryIconProps {}

export const Run = createCategoryIcon('run', 'Run');

export interface RunConfigurationsProps extends CategoryIconProps {}

export const RunConfigurations = createCategoryIcon(
  'run-configurations',
  'RunConfigurations',
);

export interface TerminalProps extends CategoryIconProps {}

export const Terminal = createCategoryIcon('terminal', 'Terminal');

export interface VcsProps extends CategoryIconProps {}

export const Vcs = createCategoryIcon('vcs', 'Vcs');
