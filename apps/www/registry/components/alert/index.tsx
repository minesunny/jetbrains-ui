'use client';

import * as React from 'react';
import { AlertDialog as AlertPrimitive } from 'radix-ui';

import { cn } from '@workspace/ui/lib/utils';
import { ErrorDialog } from '@/registry/icons/general/status/error-dialog';
import { InformationDialog } from '@/registry/icons/general/status/information-dialog';
import { QuestionDialog } from '@/registry/icons/general/status/question-dialog';
import { WarningDialog } from '@/registry/icons/general/status/warning-dialog';
import type { IconProps } from '@/registry/icons/general/types';
import { QuestionMark } from '@/registry/icons/general/general';
import { buttonVariants } from '@/registry/components/button';
import { Checkbox } from '@/registry/components/checkbox';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/registry/components/tooltip';

type AlertType = 'info' | 'error' | 'warning' | 'question';
type AlertSize = 'default' | 'wide' | 'auto';
type AlertContentContextValue = {
  help: boolean;
  check: boolean;
  type: AlertType;
  size: AlertSize;
};

const AlertContentContext = React.createContext<AlertContentContextValue>({
  help: false,
  check: false,
  type: 'info',
  size: 'auto',
});

const alertTypeIcons: Record<AlertType, React.ComponentType<IconProps>> = {
  info: InformationDialog,
  error: ErrorDialog,
  warning: WarningDialog,
  question: QuestionDialog,
};

const alertSizeClassMap: Record<AlertSize, string> = {
  default: 'w-ui-alert',
  wide: 'w-ui-alert-wide',
  auto: 'w-fit min-w-ui-alert',
};

function Alert({ ...props }: React.ComponentProps<typeof AlertPrimitive.Root>) {
  return <AlertPrimitive.Root data-slot="alert" {...props} />;
}

type AlertTriggerProps = React.ComponentProps<typeof AlertPrimitive.Trigger> & {
  tooltip?: string;
};

function AlertTrigger({ className, tooltip, ...props }: AlertTriggerProps) {
  const trigger = (
    <AlertPrimitive.Trigger
      data-slot="alert-trigger"
      className={cn(buttonVariants({ variant: 'secondary' }), className)}
      {...props}
    />
  );

  if (!tooltip) {
    return trigger;
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{trigger}</TooltipTrigger>
      <TooltipContent>{tooltip}</TooltipContent>
    </Tooltip>
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
  type?: AlertType;
  size?: AlertSize;
  help?: boolean;
  check?: boolean;
}) {
  const AlertIcon = alertTypeIcons[type];
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
            "fixed left-1/2 top-1/2 z-[var(--z-modal)] flex max-w-[calc(100vw-2rem)] -translate-x-1/2 -translate-y-1/2 flex-col rounded-[8px] border border-alert-info-border bg-alert-info-bg pb-ui-alert pl-ui-alert pr-ui-alert pt-ui-alert text-alert-info-text opacity-0 shadow-[var(--shadow-xl)] outline-none transition-[opacity,transform] duration-150 data-[state=open]:scale-100 data-[state=open]:opacity-100 data-[state=closed]:scale-95 data-[state=closed]:opacity-0 [&[data-type='error']]:border-alert-destructive-border [&[data-type='error']]:bg-alert-destructive-bg [&[data-type='error']]:text-alert-destructive-text [&[data-type='warning']]:border-alert-warning-border [&[data-type='warning']]:bg-alert-warning-bg [&[data-type='warning']]:text-alert-warning-text [&[data-type='question']]:border-alert-border [&[data-type='question']]:bg-alert-bg [&[data-type='question']]:text-alert-text",
            alertSizeClassMap[size],
            className,
          )}
          {...props}
        >
          <AlertIcon
            className="absolute left-ui-alert-icon top-ui-alert-icon shrink-0"
            size="lg"
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

  return (
    <div
      data-slot="alert-header"
      className={cn(
        'alert-header flex min-h-0 flex-col items-start gap-ui-control',
        className,
      )}
      {...props}
    >
      {children}
      {check && (
        <div className="flex items-center gap-ui-control py-ui-control-row">
          <Checkbox id="alert-do-not-ask" />
          <label
            htmlFor="alert-do-not-ask"
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
        'alert-title w-full text-base font-semibold leading-5',
        size === 'auto' && 'max-w-ui-alert',
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
        'w-full text-[13px] leading-[18px] font-medium text-alert-description',
        size === 'auto' && 'max-w-ui-alert',
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
        'alert-footer absolute bottom-ui-alert-footer left-ui-alert-footer right-ui-alert-footer flex h-10 shrink-0 items-center gap-ui-actions',
        className,
      )}
      {...props}
    >
      {help && <QuestionMark />}
      {children}
    </div>
  );
}

function AlertActions({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-actions"
      className={cn(
        'alert-actions ml-auto inline-flex items-center justify-end gap-ui-actions',
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
      className={cn(buttonVariants({ variant: 'secondary' }), className)}
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
  type AlertType,
  type AlertSize,
};
