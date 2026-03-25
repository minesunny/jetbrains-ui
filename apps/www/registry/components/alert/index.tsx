'use client';

import * as React from 'react';
import { AlertDialog as AlertPrimitive } from 'radix-ui';

import { cn } from '@workspace/ui/lib/utils';
import {
  ErrorDialog,
  InformationDialog,
  QuestionDialog,
  WarningDialog,
} from '@/registry/icons/general/status';
import type { IconProps } from '@/registry/icons/general/types';
import { QuestionMark } from '@/registry/icons/general/general';
import { buttonVariants } from '@/registry/components/button';
import { Checkbox } from '@/registry/components/checkbox';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/registry/components/tooltip';
import './index.css';

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
  default: 'w-[370px]',
  wide: 'w-[420px]',
  auto: 'w-fit min-w-[370px]',
};

function Alert({ ...props }: React.ComponentProps<typeof AlertPrimitive.Root>) {
  return <AlertPrimitive.Root data-slot="jb-alert" {...props} />;
}

type AlertTriggerProps = React.ComponentProps<typeof AlertPrimitive.Trigger> & {
  tooltip?: string;
};

function AlertTrigger({ className, tooltip, ...props }: AlertTriggerProps) {
  const trigger = (
    <AlertPrimitive.Trigger
      data-slot="jb-alert-trigger"
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
  return <AlertPrimitive.Portal data-slot="jb-alert-portal" {...props} />;
}

function AlertOverlay({
  className,
  ...props
}: React.ComponentProps<typeof AlertPrimitive.Overlay>) {
  return (
    <AlertPrimitive.Overlay
      data-slot="jb-alert-overlay"
      className={cn(
        'jb-alert-overlay fixed inset-0 z-[var(--jb-z-modal-backdrop)] opacity-0 backdrop-blur-[1px] transition-opacity duration-150 data-[state=open]:opacity-100 data-[state=closed]:opacity-0',
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
          data-slot="jb-alert-content"
          data-type={type}
          data-size={size}
          className={cn(
            'jb-alert-content fixed left-1/2 top-1/2 z-[var(--jb-z-modal)] flex max-w-[calc(100vw-2rem)] -translate-x-1/2 -translate-y-1/2 flex-col rounded-[8px] border pb-[66px] pl-[60px] pr-5 pt-5 opacity-0 shadow-[var(--jb-shadow-xl)] outline-none transition-[opacity,transform] duration-150 data-[state=open]:scale-100 data-[state=open]:opacity-100 data-[state=closed]:scale-95 data-[state=closed]:opacity-0',
            alertSizeClassMap[size],
            className,
          )}
          {...props}
        >
          <AlertIcon
            className="absolute left-[19px] top-[19px] shrink-0"
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
      data-slot="jb-alert-header"
      className={cn(
        'jb-alert-header flex min-h-0 flex-col items-start gap-2',
        className,
      )}
      {...props}
    >
      {children}
      {check && (
        <div className="py-2">
          <Checkbox aria-label="Do not ask again" label="Do not ask again" />
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
      data-slot="jb-alert-title"
      className={cn(
        'jb-alert-title w-full text-base font-semibold leading-5',
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
      data-slot="jb-alert-description"
      className={cn(
        'jb-alert-description w-full text-[13px] font-medium leading-[18px]',
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
      data-slot="jb-alert-footer"
      className={cn(
        'jb-alert-footer absolute bottom-[13px] left-[19px] right-[19px] flex h-10 shrink-0 items-center gap-3',
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
      data-slot="jb-alert-actions"
      className={cn(
        'jb-alert-actions ml-auto inline-flex items-center justify-end gap-3',
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
      data-slot="jb-alert-cancel"
      className={cn(buttonVariants({ variant: 'secondary' }), className)}
      {...props}
    />
  );
}

function AlertAction({
  className,
  ...props
}: React.ComponentProps<typeof AlertPrimitive.Action>) {
  return (
    <AlertPrimitive.Action
      data-slot="jb-alert-action"
      className={cn(buttonVariants({ variant: 'primary' }), className)}
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
