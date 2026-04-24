'use client';

import type { ComponentProps } from 'react';
import { Dialog as DialogPrimitive } from 'radix-ui';

import { cn } from '@workspace/ui/lib/utils';

function Dialog({
  ...props
}: ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

function DialogTrigger({
  ...props
}: ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

function DialogPortal({
  ...props
}: ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

function DialogClose({
  className,
  asChild,
  ...props
}: ComponentProps<typeof DialogPrimitive.Close>) {
  return (
    <DialogPrimitive.Close
      data-slot="dialog-close"
      asChild={asChild}
      className={cn(
        !asChild &&
          'inline-flex h-7 min-w-[72px] items-center justify-center gap-2 rounded border border-gray-9 bg-gray-13 px-3 font-sans text-[13px] leading-4 font-medium text-gray-1 transition-[background-color,color,border-color,box-shadow] duration-150 ease-in-out dark:border-gray-5 dark:bg-gray-2 dark:text-gray-12',
        className,
      )}
      {...props}
    />
  );
}

function DialogOverlay({
  className,
  ...props
}: ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        'fixed inset-0 z-[var(--z-modal-backdrop)] bg-[rgb(0_0_0_/_0.45)] opacity-0 backdrop-blur-[1px] transition-opacity duration-150 data-[state=open]:opacity-100 data-[state=closed]:opacity-0',
        className,
      )}
      {...props}
    />
  );
}

function DialogContent({
  className,
  children,
  ...props
}: ComponentProps<typeof DialogPrimitive.Content>) {
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          'fixed left-1/2 top-1/2 z-[var(--z-modal)] flex min-h-[495px] w-full max-w-[560px] -translate-x-1/2 -translate-y-1/2 flex-col rounded-lg border-[0.5px] border-gray-12 bg-gray-13 p-0 shadow-[var(--shadow-dialog)] outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 dark:border-gray-3 dark:bg-gray-2 dark:shadow-[var(--shadow-dialog-dark)]',
          className,
        )}
        {...props}
      >
        {children}
      </DialogPrimitive.Content>
    </DialogPortal>
  );
}

function DialogHeader({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot="dialog-header"
      className={cn(
        'flex items-center justify-center border-b border-gray-12 px-5 py-2 dark:border-gray-3',
        'rounded-t-[5px]',
        className,
      )}
      {...props}
    />
  );
}

function DialogFooter({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        'flex items-center justify-end gap-3 border-t border-gray-12 px-5 py-4 dark:border-gray-3',
        'rounded-b-[10px]',
        className,
      )}
      {...props}
    />
  );
}

function DialogTitle({
  className,
  ...props
}: ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn(
        'text-[13px] font-semibold leading-4 text-gray-1 dark:text-gray-12',
        className,
      )}
      {...props}
    />
  );
}

function DialogDescription({
  className,
  ...props
}: ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn('text-sm text-gray-6 dark:text-gray-8', className)}
      {...props}
    />
  );
}

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
