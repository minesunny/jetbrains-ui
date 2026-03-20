'use client';

import React from 'react';
import * as GeneralIcons from '@/registry/icons/general/general';
import * as ToolWindowIcons from '@/registry/icons/general/tool-windows';
import * as WindowsIcons from '@/registry/icons/general/windows';
import * as InlineIcons from '@/registry/icons/general/inline';
import * as AccessModifiersIcons from '@/registry/icons/general/access-modifiers';
import * as ModifiersIcons from '@/registry/icons/general/modifiers';
import * as ObjectBrowserIcons from '@/registry/icons/general/object-browser';
import * as SettingSyncIcons from '@/registry/icons/general/setting-sync';
import * as ActionsIcons from '@/registry/icons/general/actions';
import * as ProgressBarIcons from '@/registry/icons/general/progress-bar';
import * as StatusIcons from '@/registry/icons/general/status';
import * as BookmarksIcons from '@/registry/icons/general/bookmarks';
import * as UsagesIcons from '@/registry/icons/general/usages';
import * as DevkitIcons from '@/registry/icons/general/devkit';
import * as DuplicatesIcons from '@/registry/icons/general/duplicates';
import * as NewUiIcons from '@/registry/icons/general/new-ui';
import * as RatingIcons from '@/registry/icons/general/rating';
import * as SpinnerIcons from '@/registry/icons/general/spinner';
import * as EditorIcons from '@/registry/icons/general/editor';
import * as AiAssistantIcons from '@/registry/icons/general/ai-assistant';
// Plugins
import * as AopIcons from '@/registry/icons/plugins/aop';
import * as BazelIcons from '@/registry/icons/plugins/bazel';
import * as BdtIcons from '@/registry/icons/plugins/bdt';
import * as CidrIcons from '@/registry/icons/plugins/cidr';
import * as CodeWithMeIcons from '@/registry/icons/plugins/code-with-me';
import * as DartIcons from '@/registry/icons/plugins/dart';
import * as DatabricksIcons from '@/registry/icons/plugins/databricks';
import * as DevContainersIcons from '@/registry/icons/plugins/dev-containers';
import * as DockerIcons from '@/registry/icons/plugins/docker';
import * as FullLineCompletionIcons from '@/registry/icons/plugins/full-line-completion';
import * as GitHubIcons from '@/registry/icons/plugins/github';
import * as GitLabIcons from '@/registry/icons/plugins/gitlab';
import * as GraphQlIcons from '@/registry/icons/plugins/graphql';
import * as JavaEeIcons from '@/registry/icons/plugins/java-ee';
import * as JpaIcons from '@/registry/icons/plugins/jpa';
import * as KotlinIcons from '@/registry/icons/plugins/kotlin';
import * as KubernetesIcons from '@/registry/icons/plugins/kubernetes';
import * as LinuxIcons from '@/registry/icons/plugins/linux';
import * as LombokIcons from '@/registry/icons/plugins/lombok';
import * as MesonIcons from '@/registry/icons/plugins/meson';
import * as OutsightIcons from '@/registry/icons/plugins/outsight';
import * as PackageCheckerIcons from '@/registry/icons/plugins/package-checker';
import * as PlatformioIcons from '@/registry/icons/plugins/platformio';
import * as RestIcons from '@/registry/icons/plugins/rest';
import * as RubyIcons from '@/registry/icons/plugins/ruby';
import * as ScalaIcons from '@/registry/icons/plugins/scala';
import * as SpringIcons from '@/registry/icons/plugins/spring';
import * as StylusIcons from '@/registry/icons/plugins/stylus';
import * as TasksIcons from '@/registry/icons/plugins/tasks';
import * as TomlIcons from '@/registry/icons/plugins/toml';
import * as UmlIcons from '@/registry/icons/plugins/uml';
import * as VelocityIcons from '@/registry/icons/plugins/velocity';
// Top-level categories
import * as BreakpointsIcons from '@/registry/icons/breakpoints';
import * as BuildIcons from '@/registry/icons/build';
import * as DatabaseIcons from '@/registry/icons/database';
import * as DebuggerIcons from '@/registry/icons/debugger';
import * as EditorIconsIcons from '@/registry/icons/editor-icons';
import * as FileTypesIcons from '@/registry/icons/file-types';
import * as NodesIcons from '@/registry/icons/nodes';
import * as RunIcons from '@/registry/icons/run';
import * as RunConfigurationsIcons from '@/registry/icons/run-configurations';
import * as TerminalIcons from '@/registry/icons/terminal';
import * as VcsIcons from '@/registry/icons/vcs';
import type { IconSize } from '@/registry/icons/general/types';
import { cn } from '@workspace/ui/lib/utils';
import { useIconMode } from '@/components/docs/icons/use-icon-mode';

const sizes: IconSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];
const sizeLabels: Record<IconSize, string> = {
  xs: '12px',
  sm: '14px',
  md: '16px',
  lg: '20px',
  xl: '24px',
};

const iconSets: Record<string, Record<string, React.FC<any>>> = {
  general: GeneralIcons as any,
  'tool-windows': ToolWindowIcons as any,
  windows: WindowsIcons as any,
  inline: InlineIcons as any,
  'access-modifiers': AccessModifiersIcons as any,
  modifiers: ModifiersIcons as any,
  'object-browser': ObjectBrowserIcons as any,
  'setting-sync': SettingSyncIcons as any,
  actions: ActionsIcons as any,
  'progress-bar': ProgressBarIcons as any,
  status: StatusIcons as any,
  bookmarks: BookmarksIcons as any,
  usages: UsagesIcons as any,
  devkit: DevkitIcons as any,
  duplicates: DuplicatesIcons as any,
  'new-ui': NewUiIcons as any,
  rating: RatingIcons as any,
  spinner: SpinnerIcons as any,
  editor: EditorIcons as any,
  'ai-assistant': AiAssistantIcons as any,
  // Plugins
  aop: AopIcons as any,
  bazel: BazelIcons as any,
  bdt: BdtIcons as any,
  cidr: CidrIcons as any,
  'code-with-me': CodeWithMeIcons as any,
  dart: DartIcons as any,
  databricks: DatabricksIcons as any,
  'dev-containers': DevContainersIcons as any,
  docker: DockerIcons as any,
  'full-line-completion': FullLineCompletionIcons as any,
  github: GitHubIcons as any,
  gitlab: GitLabIcons as any,
  graphql: GraphQlIcons as any,
  'java-ee': JavaEeIcons as any,
  jpa: JpaIcons as any,
  kotlin: KotlinIcons as any,
  kubernetes: KubernetesIcons as any,
  linux: LinuxIcons as any,
  lombok: LombokIcons as any,
  meson: MesonIcons as any,
  outsight: OutsightIcons as any,
  'package-checker': PackageCheckerIcons as any,
  platformio: PlatformioIcons as any,
  rest: RestIcons as any,
  ruby: RubyIcons as any,
  scala: ScalaIcons as any,
  spring: SpringIcons as any,
  stylus: StylusIcons as any,
  tasks: TasksIcons as any,
  toml: TomlIcons as any,
  uml: UmlIcons as any,
  velocity: VelocityIcons as any,
  // Top-level categories
  breakpoints: BreakpointsIcons as any,
  build: BuildIcons as any,
  database: DatabaseIcons as any,
  debugger: DebuggerIcons as any,
  'editor-icons': EditorIconsIcons as any,
  'file-types': FileTypesIcons as any,
  nodes: NodesIcons as any,
  run: RunIcons as any,
  'run-configurations': RunConfigurationsIcons as any,
  terminal: TerminalIcons as any,
  vcs: VcsIcons as any,
};

interface IconDetailPreviewProps {
  name: string;
  category?: string;
}

export function IconDetailPreview({
  name,
  category = 'general',
}: IconDetailPreviewProps) {
  const [mode, setMode] = useIconMode();
  const icons = iconSets[category] || iconSets.general;
  const IconComponent = icons[name];

  if (!IconComponent) {
    return (
      <p className="text-sm text-fd-muted-foreground">
        Icon &quot;{name}&quot; not found.
      </p>
    );
  }

  return (
    <div className="not-prose my-4 rounded-lg border overflow-hidden">
      <div
        className={cn(
          'flex items-end justify-center gap-8 px-8 py-10',
          mode === 'dark' ? 'bg-zinc-900' : 'bg-white',
        )}
      >
        {sizes.map((s) => (
          <div key={s} className="flex flex-col items-center gap-2">
            <IconComponent size={s} mode={mode} />
            <span
              className={cn(
                'text-[10px]',
                mode === 'dark' ? 'text-zinc-400' : 'text-zinc-500',
              )}
            >
              {s} ({sizeLabels[s]})
            </span>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-3 border-t px-4 py-3 bg-fd-muted/30">
        <span className="text-xs text-fd-muted-foreground">Mode:</span>
        <div className="flex items-center gap-0.5 border rounded-md p-0.5">
          {(['light', 'dark'] as const).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={cn(
                'px-2 py-0.5 text-[10px] rounded font-medium transition-colors capitalize',
                mode === m
                  ? 'bg-fd-primary text-fd-primary-foreground'
                  : 'hover:bg-fd-accent text-fd-muted-foreground',
              )}
            >
              {m}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
