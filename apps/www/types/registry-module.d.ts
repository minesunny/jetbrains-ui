declare module '@/__registry__' {
  import type { ComponentType } from 'react';
  import type { Binds } from '@workspace/ui/components/docs/tweakpane';

  export type RegistryFile = {
    path: string;
    type: string;
    target: string;
    content: string;
  };

  export type RegistryComponent = ComponentType<Record<string, unknown>> & {
    demoProps?: Binds;
  };

  export type RegistryItem = {
    name: string;
    description: string;
    type: string;
    dependencies: string[] | undefined;
    devDependencies: string[] | undefined;
    registryDependencies: string[] | undefined;
    files: RegistryFile[];
    keywords: string[];
    component: RegistryComponent | null;
    command: string;
  };

  export const index: Record<string, RegistryItem>;
}
