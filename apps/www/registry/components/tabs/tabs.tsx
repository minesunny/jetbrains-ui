'use client';

import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';

import { cn } from '@workspace/ui/lib/utils';

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      'inline-flex h-8 items-center rounded-[4px] bg-tabs-list-bg p-ui-surface',
      className,
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'inline-flex items-center justify-center whitespace-nowrap rounded-[3px] px-ui-tab py-ui-item text-ui-default text-tabs-trigger-text outline-none transition-[background-color,color,box-shadow] duration-100 ease-in-out hover:bg-tabs-trigger-bg-hover hover:text-tabs-trigger-text-hover focus-visible:ring-2 focus-visible:ring-tabs-trigger-ring data-[state=active]:bg-tabs-trigger-bg-active data-[state=active]:text-tabs-trigger-text-active data-[state=active]:shadow-[var(--tabs-trigger-shadow)] disabled:pointer-events-none disabled:opacity-50',
      className,
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'mt-ui-control-row rounded-[4px] border border-tabs-content-border bg-tabs-content-bg p-ui-panel text-xs font-normal text-tabs-content-text outline-none focus-visible:ring-2 focus-visible:ring-tabs-trigger-ring',
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
