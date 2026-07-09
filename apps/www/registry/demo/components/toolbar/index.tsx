'use client';

import type { ReactNode } from 'react';

import { Toolbar, ToolbarItem } from '@/registry/components/toolbar';

function DemoIcon({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      {children}
    </svg>
  );
}

function CircleIcon() {
  return (
    <DemoIcon>
      <circle cx="8" cy="8" r="3" fill="currentColor" />
    </DemoIcon>
  );
}

function SquareIcon() {
  return (
    <DemoIcon>
      <rect x="4" y="4" width="8" height="8" rx="1.5" fill="currentColor" />
    </DemoIcon>
  );
}

function DiamondIcon() {
  return (
    <DemoIcon>
      <path d="M8 3 13 8 8 13 3 8Z" fill="currentColor" />
    </DemoIcon>
  );
}

function BarsIcon() {
  return (
    <DemoIcon>
      <rect x="4" y="4" width="8" height="1.5" rx="0.75" fill="currentColor" />
      <rect
        x="4"
        y="7.25"
        width="8"
        height="1.5"
        rx="0.75"
        fill="currentColor"
      />
      <rect
        x="4"
        y="10.5"
        width="8"
        height="1.5"
        rx="0.75"
        fill="currentColor"
      />
    </DemoIcon>
  );
}

function DemoRow({
  direction,
  label,
}: {
  direction: 'horizontal' | 'vertical' | 'floating';
  label: string;
}) {
  return (
    <div className="flex items-start justify-between gap-6 rounded-lg border border-[var(--jb-gray-11)] bg-[var(--jb-gray-14)] p-4 dark:border-[var(--jb-gray-4)] dark:bg-[var(--jb-gray-2)]">
      <span className="pt-1 text-[11px] leading-4 font-medium text-[var(--jb-gray-6)] dark:text-[var(--jb-gray-8)]">
        {label}
      </span>
      <Toolbar aria-label={`${label} toolbar`} direction={direction}>
        <ToolbarItem aria-label={`${label} action 1`}>
          <CircleIcon />
        </ToolbarItem>
        <ToolbarItem
          aria-label={`${label} action 2`}
          separator={direction === 'vertical' ? 'horizontal' : 'vertical'}
        >
          <SquareIcon />
        </ToolbarItem>
        <ToolbarItem
          aria-label={`${label} action 3`}
          separator={direction === 'vertical' ? 'horizontal' : 'vertical'}
        >
          <DiamondIcon />
        </ToolbarItem>
        <ToolbarItem aria-label={`${label} action 4`}>
          <BarsIcon />
        </ToolbarItem>
      </Toolbar>
    </div>
  );
}

export default function ToolbarDemo() {
  return (
    <div className="mx-auto max-w-[420px] space-y-3 rounded-xl border bg-[var(--jb-gray-13)] p-3 dark:border-[var(--jb-gray-4)] dark:bg-[var(--jb-gray-3)]">
      <DemoRow direction="horizontal" label="Horizontal" />
      <DemoRow direction="vertical" label="Vertical" />
      <DemoRow direction="floating" label="Floating" />
    </div>
  );
}
