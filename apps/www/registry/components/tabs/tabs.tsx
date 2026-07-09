'use client';

import { forwardRef } from 'react';
import type { ComponentRef, ComponentPropsWithoutRef } from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';

import { cn } from '@workspace/ui/lib/utils';

const Tabs = TabsPrimitive.Root;

const TabsList = forwardRef<
  ComponentRef<typeof TabsPrimitive.List>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      'flex w-full h-8 items-center bg-gray-12 dark:bg-gray-2 p-1 gap-1 rounded-md overflow-x-auto scrollbar-none',
      className,
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = forwardRef<
  ComponentRef<typeof TabsPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'relative inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-md px-2.5 py-1 text-default leading-4 font-normal opacity-[0.67] text-gray-1 dark:text-gray-12 outline-none transition-[background-color,color,box-shadow,opacity] duration-100 ease-in-out hover:opacity-100 hover:bg-gray-12 dark:hover:bg-gray-3 hover:text-gray-1 dark:hover:text-gray-12 focus-visible:ring-2 focus-visible:ring-blue-4 dark:focus-visible:ring-blue-6 data-[state=active]:opacity-100 data-[state=active]:bg-blue-12 dark:data-[state=active]:bg-blue-2 data-[state=active]:text-gray-1 dark:data-[state=active]:text-gray-12 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:after:absolute data-[state=active]:after:bottom-0 data-[state=active]:after:left-0 data-[state=active]:after:h-[2px] data-[state=active]:after:w-full data-[state=active]:after:bg-blue-4 dark:data-[state=active]:after:bg-blue-6',
      className,
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = forwardRef<
  ComponentRef<typeof TabsPrimitive.Content>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
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
