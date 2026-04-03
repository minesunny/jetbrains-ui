'use client';

import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { cn } from '@workspace/ui/lib/utils';
import { Checked, UnselectAll } from '@/registry/icons/general/actions';

type CheckedState = CheckboxPrimitive.CheckedState;

interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  checked?: CheckedState;
  defaultChecked?: CheckedState;
  onCheckedChange?: (checked: CheckedState) => void;
  indeterminate?: boolean;
}

export const Checkbox = React.forwardRef<
  React.ComponentRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(
  (
    {
      className,
      checked,
      defaultChecked = false,
      onCheckedChange,
      indeterminate = false,
      ...props
    },
    ref,
  ) => {
    const isControlled = checked !== undefined;
    const [internalChecked, setInternalChecked] = React.useState<CheckedState>(
      indeterminate ? false : defaultChecked,
    );

    React.useEffect(() => {
      if (!isControlled) {
        setInternalChecked((prev) =>
          !indeterminate && prev === 'indeterminate' ? false : prev,
        );
      }
    }, [indeterminate, isControlled]);

    const currentChecked =
      !indeterminate && isControlled
        ? checked === 'indeterminate'
          ? false
          : checked
        : !indeterminate
          ? internalChecked === 'indeterminate'
            ? false
            : internalChecked
          : isControlled
            ? checked
            : internalChecked;

    const getNextState = (state: CheckedState): CheckedState => {
      if (!indeterminate) {
        return state === true ? false : true;
      }

      if (state === false) return true;
      if (state === true) return 'indeterminate';
      return false;
    };

    const handleChange = () => {
      const next = getNextState(currentChecked);

      if (!isControlled) {
        setInternalChecked(next);
      }

      onCheckedChange?.(next);
    };

    return (
      <CheckboxPrimitive.Root
        ref={ref}
        checked={currentChecked}
        onCheckedChange={handleChange}
        className={cn(
          'relative inline-flex size-4 shrink-0 items-center justify-center rounded-[3px] border border-gray-8 bg-white text-transparent outline-none transition-[background-color,border-color,color,box-shadow] duration-150 ease-in-out',
          'hover:border-gray-6 hover:bg-white',
          'active:border-gray-5 active:bg-gray-12',
          'focus-visible:ring-2 focus-visible:ring-blue-4',
          'disabled:pointer-events-none disabled:cursor-not-allowed disabled:border-gray-11 disabled:bg-gray-13 disabled:text-transparent',
          "[&[aria-invalid='true']]:border-red-4 [&[aria-invalid='true']:focus-visible]:ring-red-4",
          'dark:border-gray-6 dark:bg-transparent',
          'dark:hover:border-gray-7 dark:hover:bg-transparent',
          'dark:active:border-gray-8 dark:active:bg-transparent',
          'dark:focus-visible:ring-blue-6',
          'dark:disabled:border-gray-6 dark:disabled:bg-gray-3',
          "dark:[&[aria-invalid='true']]:border-red-7 dark:[&[aria-invalid='true']:focus-visible]:ring-red-7",
          // checked
          'data-[state=checked]:border-blue-4 data-[state=checked]:bg-blue-4 data-[state=checked]:text-white',
          'data-[state=checked]:hover:border-blue-3 data-[state=checked]:hover:bg-blue-3',
          'data-[state=checked]:active:border-blue-2 data-[state=checked]:active:bg-blue-2',
          'data-[state=checked]:focus-visible:ring-blue-4',
          'data-[state=checked]:disabled:border-gray-9 data-[state=checked]:disabled:bg-gray-9 data-[state=checked]:disabled:text-white',
          "data-[state=checked]:[&[aria-invalid='true']]:border-blue-4 data-[state=checked]:[&[aria-invalid='true']:focus-visible]:ring-red-4",
          'dark:data-[state=checked]:border-blue-6 dark:data-[state=checked]:bg-blue-6',
          'dark:data-[state=checked]:hover:border-blue-5 dark:data-[state=checked]:hover:bg-blue-5',
          'dark:data-[state=checked]:active:border-blue-4 dark:data-[state=checked]:active:bg-blue-4',
          'dark:data-[state=checked]:focus-visible:ring-blue-6',
          'dark:data-[state=checked]:disabled:border-gray-3 dark:data-[state=checked]:disabled:bg-gray-3 dark:data-[state=checked]:disabled:text-gray-8',
          "dark:data-[state=checked]:[&[aria-invalid='true']]:border-blue-6 dark:data-[state=checked]:[&[aria-invalid='true']:focus-visible]:ring-red-7",
          // indeterminate
          'data-[state=indeterminate]:border-blue-4 data-[state=indeterminate]:bg-blue-4 data-[state=indeterminate]:text-white',
          'data-[state=indeterminate]:hover:border-blue-3 data-[state=indeterminate]:hover:bg-blue-3',
          'data-[state=indeterminate]:active:border-blue-2 data-[state=indeterminate]:active:bg-blue-2',
          'data-[state=indeterminate]:focus-visible:ring-blue-4',
          'data-[state=indeterminate]:disabled:border-gray-9 data-[state=indeterminate]:disabled:bg-gray-9 data-[state=indeterminate]:disabled:text-white',
          "data-[state=indeterminate]:[&[aria-invalid='true']]:border-blue-4 data-[state=indeterminate]:[&[aria-invalid='true']:focus-visible]:ring-red-4",
          'dark:data-[state=indeterminate]:border-blue-6 dark:data-[state=indeterminate]:bg-blue-6',
          'dark:data-[state=indeterminate]:hover:border-blue-5 dark:data-[state=indeterminate]:hover:bg-blue-5',
          'dark:data-[state=indeterminate]:active:border-blue-4 dark:data-[state=indeterminate]:active:bg-blue-4',
          'dark:data-[state=indeterminate]:focus-visible:ring-blue-6',
          'dark:data-[state=indeterminate]:disabled:border-gray-3 dark:data-[state=indeterminate]:disabled:bg-gray-3 dark:data-[state=indeterminate]:disabled:text-gray-8',
          "dark:data-[state=indeterminate]:[&[aria-invalid='true']]:border-blue-6 dark:data-[state=indeterminate]:[&[aria-invalid='true']:focus-visible]:ring-red-7",
          className,
        )}
        {...props}
      >
        <CheckboxPrimitive.Indicator
          forceMount
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          {currentChecked === true && (
            <Checked
              size="sm"
              className="size-3.5 [&_path]:stroke-current"
              aria-hidden="true"
            />
          )}
          {currentChecked === 'indeterminate' && (
            <UnselectAll
              size="sm"
              className="size-3.5 [&_path:first-of-type]:hidden [&_path:last-of-type]:stroke-current"
              aria-hidden="true"
            />
          )}
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    );
  },
);

Checkbox.displayName = 'Checkbox';
