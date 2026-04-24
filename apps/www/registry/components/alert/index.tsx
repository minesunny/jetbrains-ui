'use client';

import * as React from 'react';
import { AlertDialog as AlertPrimitive } from 'radix-ui';

import { cn } from '@workspace/ui/lib/utils';
import { SVG } from '@/registry/components/svg';
import { buttonVariants } from '@/registry/components/button';
import { Checkbox } from '@/registry/components/checkbox';

type AlertContentContextValue = {
  help: boolean;
  check: boolean;
  type: 'info' | 'error' | 'warning' | 'question';
  size: 'default' | 'wide' | 'auto';
};

const AlertContentContext = React.createContext<AlertContentContextValue>({
  help: false,
  check: false,
  type: 'info',
  size: 'auto',
});

function Alert({ ...props }: React.ComponentProps<typeof AlertPrimitive.Root>) {
  return <AlertPrimitive.Root data-slot="alert" {...props} />;
}

type AlertTriggerProps = React.ComponentProps<typeof AlertPrimitive.Trigger>;

function AlertTrigger({ className, ...props }: AlertTriggerProps) {
  return (
    <AlertPrimitive.Trigger
      data-slot="alert-trigger"
      className={cn(buttonVariants({ variant: 'primary' }), className)}
      {...props}
    />
  );
}

function AlertPortal({
  ...props
}: React.ComponentProps<typeof AlertPrimitive.Portal>) {
  return <AlertPrimitive.Portal data-slot="alert-portal" {...props} />;
}

function AlertOverlay({
  className,
  ...props
}: React.ComponentProps<typeof AlertPrimitive.Overlay>) {
  return (
    <AlertPrimitive.Overlay
      data-slot="alert-overlay"
      className={cn(
        'fixed inset-0 z-[var(--z-modal-backdrop)] bg-[rgb(0_0_0_/_0.45)] opacity-0 backdrop-blur-[1px] transition-opacity duration-150 data-[state=open]:opacity-100 data-[state=closed]:opacity-0',
        className,
      )}
      {...props}
    />
  );
}

function AlertContent({
  className,
  children,
  type = 'info',
  size = 'auto',
  help = false,
  check = false,
  ...props
}: React.ComponentProps<typeof AlertPrimitive.Content> & {
  type?: 'info' | 'error' | 'warning' | 'question';
  size?: 'default' | 'wide' | 'auto';
  help?: boolean;
  check?: boolean;
}) {
  const iconName = `general/status/${type === 'info' ? 'information' : type}-dialog`;
  const contentContextValue = React.useMemo(
    () => ({
      help,
      check,
      type,
      size,
    }),
    [help, check, type, size],
  );

  return (
    <AlertContentContext.Provider value={contentContextValue}>
      <AlertPortal>
        <AlertOverlay />
        <AlertPrimitive.Content
          data-slot="alert-content"
          data-type={type}
          data-size={size}
          className={cn(
            'fixed left-1/2 top-1/2 z-[var(--z-modal)] flex max-w-[calc(100vw-2rem)] -translate-x-1/2 -translate-y-1/2 flex-col rounded-lg border border-gray-10 bg-gray-13 pb-[66px] pl-[60px] pr-5 pt-5 text-gray-1 opacity-0 shadow-[var(--shadow-dialog)] outline-none transition-[opacity,transform] duration-150 data-[state=open]:scale-100 data-[state=open]:opacity-100 data-[state=closed]:scale-95 data-[state=closed]:opacity-0 dark:border-gray-4 dark:bg-gray-2 dark:text-gray-12 data-[size=default]:w-[370px] data-[size=wide]:w-[420px] data-[size=auto]:w-fit data-[size=auto]:min-w-[370px]',
            className,
          )}
          {...props}
        >
          <SVG
            name={iconName}
            size="lg"
            className="absolute left-5 top-5 shrink-0"
          />
          {children}
        </AlertPrimitive.Content>
      </AlertPortal>
    </AlertContentContext.Provider>
  );
}

function AlertHeader({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) {
  const { check } = React.useContext(AlertContentContext);
  const checkboxId = React.useId();

  return (
    <div
      data-slot="alert-header"
      className={cn('flex min-h-0 flex-col items-start gap-2', className)}
      {...props}
    >
      {children}
      {check && (
        <div className="flex items-center gap-2 py-2">
          <Checkbox id={checkboxId} />
          <label
            htmlFor={checkboxId}
            className="text-[13px] leading-4 font-medium"
          >
            Do not ask again
          </label>
        </div>
      )}
    </div>
  );
}

function AlertTitle({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AlertPrimitive.Title>) {
  const { size } = React.useContext(AlertContentContext);
  return (
    <AlertPrimitive.Title
      data-slot="alert-title"
      className={cn(
        'w-full text-base font-medium leading-5',
        size === 'auto' && 'max-w-[480px]',
        className,
      )}
      {...props}
    >
      {children}
    </AlertPrimitive.Title>
  );
}

function AlertDescription({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AlertPrimitive.Description>) {
  const { size } = React.useContext(AlertContentContext);

  return (
    <AlertPrimitive.Description
      data-slot="alert-description"
      className={cn(
        'w-full text-[13px] leading-[18px] font-medium text-gray-1 dark:text-gray-12',
        size === 'auto' && 'max-w-[480px]',
        className,
      )}
      {...props}
    >
      {children}
    </AlertPrimitive.Description>
  );
}

function AlertFooter({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) {
  const { help } = React.useContext(AlertContentContext);

  return (
    <div
      data-slot="alert-footer"
      className={cn(
        'absolute bottom-5 left-5 right-5 flex h-10 shrink-0 items-center gap-3',
        className,
      )}
      {...props}
    >
      {help && <SVG name="general/general/question-mark" />}
      {children}
    </div>
  );
}

function AlertActions({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-actions"
      className={cn(
        'ml-auto inline-flex items-center justify-end gap-3',
        className,
      )}
      {...props}
    />
  );
}

function AlertCancel({
  className,
  ...props
}: React.ComponentProps<typeof AlertPrimitive.Cancel>) {
  return (
    <AlertPrimitive.Cancel
      data-slot="alert-cancel"
      className={cn(
        'inline-flex h-7 min-w-[72px] items-center justify-center gap-2 rounded border border-gray-9 bg-gray-13 px-3 font-sans text-[13px] leading-4 font-medium text-gray-1 transition-[background-color,color,border-color,box-shadow] duration-150 ease-in-out dark:border-gray-5 dark:bg-gray-2 dark:text-gray-12',
        className,
      )}
      {...props}
    />
  );
}

function AlertAction({
  className,
  ...props
}: React.ComponentProps<typeof AlertPrimitive.Action>) {
  const { type } = React.useContext(AlertContentContext);

  return (
    <AlertPrimitive.Action
      data-slot="alert-action"
      className={cn(
        buttonVariants({ variant: 'primary' }),
        type === 'error' &&
          'border-transparent bg-red-4 text-gray-14 hover:bg-red-3 hover:text-gray-14 active:bg-red-2 active:text-gray-14 focus-visible:ring-2 focus-visible:ring-red-4 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-14 dark:focus-visible:ring-offset-gray-2',
        className,
      )}
      {...props}
    />
  );
}

export {
  Alert,
  AlertTrigger,
  AlertPortal,
  AlertOverlay,
  AlertContent,
  AlertHeader,
  AlertTitle,
  AlertDescription,
  AlertFooter,
  AlertActions,
  AlertCancel,
  AlertAction,
};
