'use client';

import {
  AggregateIconsGallery,
  type IconPackLoader,
} from '@/components/docs/icons/aggregate-icons-gallery';

const generalPacks: IconPackLoader[] = [
  {
    id: 'tool-windows',
    label: 'Tool Windows',
    importPath: '@/components/jetbrains-ui/icons/general/tool-windows',
    load: () => import('@/registry/icons/general/tool-windows'),
  },
  {
    id: 'actions',
    label: 'Actions',
    importPath: '@/components/jetbrains-ui/icons/general/actions',
    load: () => import('@/registry/icons/general/actions'),
  },
  {
    id: 'editor',
    label: 'Editor',
    importPath: '@/components/jetbrains-ui/icons/general/editor',
    load: () => import('@/registry/icons/general/editor'),
  },
  {
    id: 'ai-assistant',
    label: 'AI Assistant',
    importPath: '@/components/jetbrains-ui/icons/general/ai-assistant',
    load: () => import('@/registry/icons/general/ai-assistant'),
  },
  {
    id: 'windows',
    label: 'Windows',
    importPath: '@/components/jetbrains-ui/icons/general/windows',
    load: () => import('@/registry/icons/general/windows'),
  },
  {
    id: 'inline',
    label: 'Inline',
    importPath: '@/components/jetbrains-ui/icons/general/inline',
    load: () => import('@/registry/icons/general/inline'),
  },
  {
    id: 'status',
    label: 'Status',
    importPath: '@/components/jetbrains-ui/icons/general/status',
    load: () => import('@/registry/icons/general/status'),
  },
  {
    id: 'modifiers',
    label: 'Modifiers',
    importPath: '@/components/jetbrains-ui/icons/general/modifiers',
    load: () => import('@/registry/icons/general/modifiers'),
  },
  {
    id: 'access-modifiers',
    label: 'Access Modifiers',
    importPath: '@/components/jetbrains-ui/icons/general/access-modifiers',
    load: () => import('@/registry/icons/general/access-modifiers'),
  },
  {
    id: 'object-browser',
    label: 'Object Browser',
    importPath: '@/components/jetbrains-ui/icons/general/object-browser',
    load: () => import('@/registry/icons/general/object-browser'),
  },
  {
    id: 'setting-sync',
    label: 'Setting Sync',
    importPath: '@/components/jetbrains-ui/icons/general/setting-sync',
    load: () => import('@/registry/icons/general/setting-sync'),
  },
  {
    id: 'progress-bar',
    label: 'Progress Bar',
    importPath: '@/components/jetbrains-ui/icons/general/progress-bar',
    load: () => import('@/registry/icons/general/progress-bar'),
  },
  {
    id: 'bookmarks',
    label: 'Bookmarks',
    importPath: '@/components/jetbrains-ui/icons/general/bookmarks',
    load: () => import('@/registry/icons/general/bookmarks'),
  },
  {
    id: 'usages',
    label: 'Usages',
    importPath: '@/components/jetbrains-ui/icons/general/usages',
    load: () => import('@/registry/icons/general/usages'),
  },
  {
    id: 'devkit',
    label: 'DevKit',
    importPath: '@/components/jetbrains-ui/icons/general/devkit',
    load: () => import('@/registry/icons/general/devkit'),
  },
  {
    id: 'duplicates',
    label: 'Duplicates',
    importPath: '@/components/jetbrains-ui/icons/general/duplicates',
    load: () => import('@/registry/icons/general/duplicates'),
  },
  {
    id: 'new-ui',
    label: 'New UI',
    importPath: '@/components/jetbrains-ui/icons/general/new-ui',
    load: () => import('@/registry/icons/general/new-ui'),
  },
  {
    id: 'rating',
    label: 'Rating',
    importPath: '@/components/jetbrains-ui/icons/general/rating',
    load: () => import('@/registry/icons/general/rating'),
  },
  {
    id: 'spinner',
    label: 'Spinner',
    importPath: '@/components/jetbrains-ui/icons/general/spinner',
    load: () => import('@/registry/icons/general/spinner'),
  },
];

export function GeneralAllIconsGallery() {
  return <AggregateIconsGallery packs={generalPacks} />;
}
