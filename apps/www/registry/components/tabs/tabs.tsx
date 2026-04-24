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
      'inline-flex h-8 items-center bg-gray-12 dark:bg-gray-2 p-1 gap-1',
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
      'inline-flex items-center justify-center whitespace-nowrap rounded-md px-2.5 py-1 text-default leading-4 font-normal opacity-[0.67] text-gray-1 dark:text-gray-12 outline-none transition-[background-color,color,box-shadow,opacity] duration-100 ease-in-out hover:opacity-100 hover:bg-gray-12 dark:hover:bg-gray-3 hover:text-gray-1 dark:hover:text-gray-12 focus-visible:ring-2 focus-visible:ring-blue-4 dark:focus-visible:ring-blue-6 data-[state=active]:opacity-100 data-[state=active]:bg-blue-12 dark:data-[state=active]:bg-blue-2 data-[state=active]:text-gray-1 dark:data-[state=active]:text-gray-12 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border data-[state=active]:border-blue-5',
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
      'mt-2 rounded-[4px] border border-gray-8 dark:border-gray-6 bg-white dark:bg-gray-3 p-3 text-xs font-normal text-gray-1 dark:text-gray-12 outline-none focus-visible:ring-2 focus-visible:ring-blue-4 dark:focus-visible:ring-blue-6',
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
