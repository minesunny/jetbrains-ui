'use client';

import * as React from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';

import { cn } from '@workspace/ui/lib/utils';

const AlertDialog = AlertDialogPrimitive.Root;

const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

const AlertDialogPortal = AlertDialogPrimitive.Portal;

const AlertDialogOverlay = React.forwardRef<
  React.ComponentRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      'fixed inset-0 z-[var(--z-modal-backdrop)] bg-[rgb(0_0_0_/_0.5)] dark:bg-[rgb(0_0_0_/_0.5)] data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0',
      className,
    )}
    {...props}
    ref={ref}
  />
));
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;

const AlertDialogContent = React.forwardRef<
  React.ComponentRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        'fixed left-1/2 top-1/2 z-[var(--z-modal)] w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-lg border border-gray-9 bg-white p-6 shadow-lg',
        'dark:border-gray-5 dark:bg-gray-2',
        'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
        'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
        'focus-visible:outline-none',
        className,
      )}
      {...props}
    />
  </AlertDialogPortal>
));
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;

const AlertDialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('flex flex-col gap-1.5 text-left', className)}
    {...props}
  />
);
AlertDialogHeader.displayName = 'AlertDialogHeader';

const AlertDialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end',
      className,
    )}
    {...props}
  />
);
AlertDialogFooter.displayName = 'AlertDialogFooter';

const AlertDialogTitle = React.forwardRef<
  React.ComponentRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn(
      'text-ui-default-semibold text-gray-1 dark:text-gray-12',
      className,
    )}
    {...props}
  />
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;

const AlertDialogDescription = React.forwardRef<
  React.ComponentRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cn('text-ui-paragraph text-gray-5 dark:text-gray-9', className)}
    {...props}
  />
));
AlertDialogDescription.displayName =
  AlertDialogPrimitive.Description.displayName;

const AlertDialogAction = React.forwardRef<
  React.ComponentRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action
    ref={ref}
    className={cn(
      'inline-flex h-7 items-center justify-center rounded border border-transparent bg-blue-4 px-3 text-ui-default text-gray-14 transition-[background-color,color,border-color,box-shadow] duration-150 ease-in-out',
      'hover:bg-blue-3 hover:text-gray-14',
      'active:bg-blue-2 active:text-gray-14',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-4 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
      'disabled:pointer-events-none disabled:cursor-not-allowed disabled:border-transparent disabled:bg-gray-12 disabled:text-gray-8',
      'dark:bg-blue-6 dark:hover:bg-blue-5 dark:hover:text-gray-14 dark:active:bg-blue-4 dark:active:text-gray-14',
      'dark:focus-visible:ring-blue-6 dark:focus-visible:ring-offset-gray-2',
      'dark:disabled:bg-gray-4 dark:disabled:text-gray-7',
      className,
    )}
    {...props}
  />
));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;

const AlertDialogCancel = React.forwardRef<
  React.ComponentRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(
      'inline-flex h-7 items-center justify-center rounded border border-gray-9 bg-transparent px-3 text-ui-default text-gray-1 transition-[background-color,color,border-color,box-shadow] duration-150 ease-in-out',
      'hover:bg-gray-12 hover:text-gray-1',
      'active:bg-gray-11 active:text-gray-1',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-4 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
      'disabled:pointer-events-none disabled:cursor-not-allowed disabled:border-transparent disabled:bg-gray-12 disabled:text-gray-8',
      'dark:border-gray-5 dark:bg-gray-5 dark:text-gray-12',
      'dark:hover:bg-gray-6 dark:hover:text-gray-12',
      'dark:active:bg-gray-4 dark:active:text-gray-12',
      'dark:focus-visible:ring-blue-6 dark:focus-visible:ring-offset-gray-2',
      'dark:disabled:bg-gray-4 dark:disabled:text-gray-7',
      className,
    )}
    {...props}
  />
));
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};
