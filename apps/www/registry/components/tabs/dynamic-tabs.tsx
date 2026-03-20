'use client';

import * as React from 'react';

import { cn } from '@workspace/ui/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs';

export interface DynamicTabsItem {
  value: string;
  label: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
  triggerClassName?: string;
  contentClassName?: string;
}

export interface DynamicTabsProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof Tabs>,
    'children' | 'defaultValue' | 'value' | 'onValueChange'
  > {
  items: DynamicTabsItem[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  listClassName?: string;
  triggerClassName?: string;
  contentClassName?: string;
  emptyContent?: React.ReactNode;
}

function DynamicTabs({
  items,
  className,
  listClassName,
  triggerClassName,
  contentClassName,
  value,
  defaultValue,
  onValueChange,
  emptyContent = 'No tabs available.',
  ...props
}: DynamicTabsProps) {
  const firstEnabledValue = React.useMemo(
    () => items.find((item) => !item.disabled)?.value,
    [items],
  );

  if (items.length === 0) {
    return (
      <div
        data-slot="dynamic-tabs-empty"
        className={cn('text-muted-foreground text-sm', className)}
      >
        {emptyContent}
      </div>
    );
  }

  return (
    <Tabs
      className={className}
      value={value}
      defaultValue={defaultValue ?? firstEnabledValue}
      onValueChange={onValueChange}
      {...props}
    >
      <TabsList className={listClassName}>
        {items.map((item) => (
          <TabsTrigger
            key={item.value}
            value={item.value}
            disabled={item.disabled}
            className={cn(triggerClassName, item.triggerClassName)}
          >
            {item.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {items.map((item) => (
        <TabsContent
          key={item.value}
          value={item.value}
          className={cn(contentClassName, item.contentClassName)}
        >
          {item.content}
        </TabsContent>
      ))}
    </Tabs>
  );
}

export { DynamicTabs };
