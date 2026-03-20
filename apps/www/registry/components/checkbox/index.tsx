'use client';

import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { cn } from '@workspace/ui/lib/utils';
import './index.css';

type CheckedState = CheckboxPrimitive.CheckedState;

interface CheckboxIcons {
  checked?: React.ReactNode;
  indeterminate?: React.ReactNode;
  unchecked?: React.ReactNode;
}

interface CheckboxProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    'checked' | 'defaultChecked' | 'onCheckedChange'
  > {
  checked?: CheckedState;
  defaultChecked?: CheckedState;
  onCheckedChange?: (checked: CheckedState) => void;

  label?: React.ReactNode;

  indeterminate?: boolean;

  icons?: CheckboxIcons;
}

const normalizeCheckedState = (
  state: CheckedState,
  supportsIndeterminate: boolean,
): CheckedState => {
  if (!supportsIndeterminate && state === 'indeterminate') return false;
  return state;
};

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
      label,
      id,
      indeterminate = false,
      icons,
      ...props
    },
    ref,
  ) => {
    const generatedId = React.useId();
    const resolvedId = id ?? (label ? generatedId : undefined);

    const isControlled = checked !== undefined;
    const [internalChecked, setInternalChecked] = React.useState<CheckedState>(
      normalizeCheckedState(defaultChecked, indeterminate),
    );

    React.useEffect(() => {
      if (!isControlled) {
        setInternalChecked((prev) =>
          normalizeCheckedState(prev, indeterminate),
        );
      }
    }, [indeterminate, isControlled]);

    const currentChecked = normalizeCheckedState(
      isControlled ? checked : internalChecked,
      indeterminate,
    );

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

    const iconMap: Record<string, React.ReactNode> = {
      true: icons?.checked ?? <DefaultCheckIcon />,
      indeterminate: icons?.indeterminate ?? <DefaultIndeterminateIcon />,
      false: icons?.unchecked ?? null,
    };

    const checkboxElement = (
      <CheckboxPrimitive.Root
        ref={ref}
        id={resolvedId}
        checked={currentChecked}
        onCheckedChange={handleChange}
        className={cn(
          'jb-checkbox inline-flex size-4 shrink-0 items-center justify-center rounded-[3px] border outline-none transition-[background-color,border-color,color,box-shadow] duration-150 ease-in-out disabled:pointer-events-none disabled:cursor-not-allowed',
          className,
        )}
        {...props}
      >
        <CheckboxPrimitive.Indicator
          forceMount
          className="jb-checkbox__indicator absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          {iconMap[String(currentChecked)]}
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    );

    if (!label) return checkboxElement;

    return (
      <div
        className="jb-checkbox-field flex min-h-8 items-center gap-2"
        data-disabled={props.disabled ? 'true' : undefined}
      >
        {checkboxElement}
        {typeof label === 'string' ? (
          <label
            htmlFor={resolvedId}
            className="jb-checkbox__label text-[13px] leading-4 font-medium"
          >
            {label}
          </label>
        ) : (
          label
        )}
      </div>
    );
  },
);

Checkbox.displayName = 'Checkbox';

const DefaultCheckIcon = () => (
  <svg
    viewBox="0 0 16 16"
    className="jb-checkbox__icon jb-checkbox__icon--check h-3.5 w-3.5"
    fill="none"
  >
    <path
      d="M4 8.5 7 11.5 12.5 5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DefaultIndeterminateIcon = () => (
  <svg
    viewBox="0 0 16 16"
    className="jb-checkbox__icon jb-checkbox__icon--indeterminate h-3.5 w-3.5"
    fill="none"
  >
    <rect x="3" y="7" width="10" height="2" rx="1" fill="currentColor" />
  </svg>
);
