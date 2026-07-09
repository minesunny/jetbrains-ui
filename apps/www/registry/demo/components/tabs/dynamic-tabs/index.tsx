'use client';

import { useState, useCallback, memo } from 'react';

import {
  DynamicTabsList,
  type DynamicTabsProps,
} from '@/registry/components/tabs/dynamic-tabs';

const initialTabs: DynamicTabsProps[] = [
  {
    id: 'main',
    label: 'main.ts',
    icon: 'general/general/settings',
    pinned: true,
  },
  { id: 'app', label: 'app.tsx', icon: 'general/general/settings' },
  { id: 'utils', label: 'utils.ts', icon: 'general/general/settings' },
  { id: 'styles', label: 'styles.css', icon: 'general/general/settings' },
  { id: 'test', label: 'test.ts', icon: 'general/general/settings' },
];

const tabContent: Record<string, string> = {
  main: 'import { createApp } from "./app";\n\nconst app = createApp();\napp.mount("#root");',
  app: 'export function createApp() {\n  return {\n    mount(selector: string) {\n      document.querySelector(selector)!.textContent = "Hello";\n    },\n  };\n}',
  utils: 'export function add(a: number, b: number) {\n  return a + b;\n}',
  styles: ':root {\n  --primary: #1677ff;\n  --bg: #ffffff;\n}',
  test: 'import { add } from "./utils";\n\ntest("adds numbers", () => {\n  expect(add(1, 2)).toBe(3);\n});',
};

const TabContent = memo(function TabContent({ tabId }: { tabId: string }) {
  return (
    <pre className="whitespace-pre-wrap text-xs text-gray-1 dark:text-gray-12">
      {tabContent[tabId] ?? `Content for ${tabId}`}
    </pre>
  );
});

export default function DynamicTabsDemo() {
  const [tabs, setTabs] = useState(initialTabs);
  const [activeId, setActiveId] = useState('main');

  const handleClose = useCallback(
    (itemOrItems: DynamicTabsProps | DynamicTabsProps[]) => {
      const ids = Array.isArray(itemOrItems)
        ? itemOrItems.map((t) => t.id)
        : [itemOrItems.id];
      setTabs((prev) => prev.filter((t) => !ids.includes(t.id)));
    },
    [],
  );

  const handleTogglePin = useCallback(
    (item: DynamicTabsProps, pinned: boolean) => {
      setTabs((prev) =>
        prev.map((t) => (t.id === item.id ? { ...t, pinned } : t)),
      );
    },
    [],
  );

  return (
    <div className="w-full max-w-[520px]">
      <DynamicTabsList
        items={tabs}
        activeTab={activeId}
        onActive={(_prev, next) => setActiveId(next.id)}
        onClose={handleClose}
        onTogglePin={handleTogglePin}
      />
      <div className="mt-2 rounded-[4px] border border-gray-8 dark:border-gray-6 bg-white dark:bg-gray-3 p-3 min-h-[120px]">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            style={{ display: tab.id === activeId ? undefined : 'none' }}
          >
            <TabContent tabId={tab.id} />
          </div>
        ))}
      </div>
    </div>
  );
}
