'use client';

import {
  AggregateIconsGallery,
  type IconPackLoader,
} from '@/components/docs/icons/aggregate-icons-gallery';

const pluginPacks: IconPackLoader[] = [
  {
    id: 'aop',
    label: 'AOP',
    importPath: '@/components/jetbrains-ui/icons/plugins/aop',
    load: () => import('@/registry/icons/plugins/aop'),
  },
  {
    id: 'bazel',
    label: 'Bazel',
    importPath: '@/components/jetbrains-ui/icons/plugins/bazel',
    load: () => import('@/registry/icons/plugins/bazel'),
  },
  {
    id: 'bdt',
    label: 'BDT',
    importPath: '@/components/jetbrains-ui/icons/plugins/bdt',
    load: () => import('@/registry/icons/plugins/bdt'),
  },
  {
    id: 'cidr',
    label: 'CIDR',
    importPath: '@/components/jetbrains-ui/icons/plugins/cidr',
    load: () => import('@/registry/icons/plugins/cidr'),
  },
  {
    id: 'code-with-me',
    label: 'Code With Me',
    importPath: '@/components/jetbrains-ui/icons/plugins/code-with-me',
    load: () => import('@/registry/icons/plugins/code-with-me'),
  },
  {
    id: 'dart',
    label: 'Dart',
    importPath: '@/components/jetbrains-ui/icons/plugins/dart',
    load: () => import('@/registry/icons/plugins/dart'),
  },
  {
    id: 'databricks',
    label: 'Databricks',
    importPath: '@/components/jetbrains-ui/icons/plugins/databricks',
    load: () => import('@/registry/icons/plugins/databricks'),
  },
  {
    id: 'dev-containers',
    label: 'Dev Containers',
    importPath: '@/components/jetbrains-ui/icons/plugins/dev-containers',
    load: () => import('@/registry/icons/plugins/dev-containers'),
  },
  {
    id: 'docker',
    label: 'Docker',
    importPath: '@/components/jetbrains-ui/icons/plugins/docker',
    load: () => import('@/registry/icons/plugins/docker'),
  },
  {
    id: 'full-line-completion',
    label: 'Full Line Completion',
    importPath: '@/components/jetbrains-ui/icons/plugins/full-line-completion',
    load: () => import('@/registry/icons/plugins/full-line-completion'),
  },
  {
    id: 'github',
    label: 'GitHub',
    importPath: '@/components/jetbrains-ui/icons/plugins/github',
    load: () => import('@/registry/icons/plugins/github'),
  },
  {
    id: 'gitlab',
    label: 'GitLab',
    importPath: '@/components/jetbrains-ui/icons/plugins/gitlab',
    load: () => import('@/registry/icons/plugins/gitlab'),
  },
  {
    id: 'graphql',
    label: 'GraphQL',
    importPath: '@/components/jetbrains-ui/icons/plugins/graphql',
    load: () => import('@/registry/icons/plugins/graphql'),
  },
  {
    id: 'java-ee',
    label: 'Java EE',
    importPath: '@/components/jetbrains-ui/icons/plugins/java-ee',
    load: () => import('@/registry/icons/plugins/java-ee'),
  },
  {
    id: 'jpa',
    label: 'JPA',
    importPath: '@/components/jetbrains-ui/icons/plugins/jpa',
    load: () => import('@/registry/icons/plugins/jpa'),
  },
  {
    id: 'kotlin',
    label: 'Kotlin',
    importPath: '@/components/jetbrains-ui/icons/plugins/kotlin',
    load: () => import('@/registry/icons/plugins/kotlin'),
  },
  {
    id: 'kubernetes',
    label: 'Kubernetes',
    importPath: '@/components/jetbrains-ui/icons/plugins/kubernetes',
    load: () => import('@/registry/icons/plugins/kubernetes'),
  },
  {
    id: 'linux',
    label: 'Linux',
    importPath: '@/components/jetbrains-ui/icons/plugins/linux',
    load: () => import('@/registry/icons/plugins/linux'),
  },
  {
    id: 'lombok',
    label: 'Lombok',
    importPath: '@/components/jetbrains-ui/icons/plugins/lombok',
    load: () => import('@/registry/icons/plugins/lombok'),
  },
  {
    id: 'meson',
    label: 'Meson',
    importPath: '@/components/jetbrains-ui/icons/plugins/meson',
    load: () => import('@/registry/icons/plugins/meson'),
  },
  {
    id: 'outsight',
    label: 'Outsight',
    importPath: '@/components/jetbrains-ui/icons/plugins/outsight',
    load: () => import('@/registry/icons/plugins/outsight'),
  },
  {
    id: 'package-checker',
    label: 'Package Checker',
    importPath: '@/components/jetbrains-ui/icons/plugins/package-checker',
    load: () => import('@/registry/icons/plugins/package-checker'),
  },
  {
    id: 'platformio',
    label: 'PlatformIO',
    importPath: '@/components/jetbrains-ui/icons/plugins/platformio',
    load: () => import('@/registry/icons/plugins/platformio'),
  },
  {
    id: 'rest',
    label: 'REST',
    importPath: '@/components/jetbrains-ui/icons/plugins/rest',
    load: () => import('@/registry/icons/plugins/rest'),
  },
  {
    id: 'ruby',
    label: 'Ruby',
    importPath: '@/components/jetbrains-ui/icons/plugins/ruby',
    load: () => import('@/registry/icons/plugins/ruby'),
  },
  {
    id: 'scala',
    label: 'Scala',
    importPath: '@/components/jetbrains-ui/icons/plugins/scala',
    load: () => import('@/registry/icons/plugins/scala'),
  },
  {
    id: 'spring',
    label: 'Spring',
    importPath: '@/components/jetbrains-ui/icons/plugins/spring',
    load: () => import('@/registry/icons/plugins/spring'),
  },
  {
    id: 'stylus',
    label: 'Stylus',
    importPath: '@/components/jetbrains-ui/icons/plugins/stylus',
    load: () => import('@/registry/icons/plugins/stylus'),
  },
  {
    id: 'tasks',
    label: 'Tasks',
    importPath: '@/components/jetbrains-ui/icons/plugins/tasks',
    load: () => import('@/registry/icons/plugins/tasks'),
  },
  {
    id: 'toml',
    label: 'TOML',
    importPath: '@/components/jetbrains-ui/icons/plugins/toml',
    load: () => import('@/registry/icons/plugins/toml'),
  },
  {
    id: 'uml',
    label: 'UML',
    importPath: '@/components/jetbrains-ui/icons/plugins/uml',
    load: () => import('@/registry/icons/plugins/uml'),
  },
  {
    id: 'velocity',
    label: 'Velocity',
    importPath: '@/components/jetbrains-ui/icons/plugins/velocity',
    load: () => import('@/registry/icons/plugins/velocity'),
  },
];

export function PluginsAllIconsGallery() {
  return <AggregateIconsGallery packs={pluginPacks} />;
}
