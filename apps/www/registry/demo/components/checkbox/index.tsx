'use client';

import * as React from 'react';
import { Checkbox } from '@/registry/components/checkbox';

type CheckboxState = 'unchecked' | 'checked' | 'indeterminate';
type CheckboxRootProps = React.ComponentPropsWithoutRef<typeof Checkbox>;

interface CheckboxDemoProps
  extends Omit<
    CheckboxRootProps,
    'checked' | 'defaultChecked' | 'onCheckedChange'
  > {
  state: CheckboxState;
  indeterminate?: boolean;
  invalid?: boolean;
  label?: React.ReactNode;
  onCheckedChange?: CheckboxRootProps['onCheckedChange'];
}

const getCheckedValue = (state: CheckboxState): boolean | 'indeterminate' => {
  if (state === 'checked') return true;
  if (state === 'indeterminate') return 'indeterminate';
  return false;
};

const normalizeState = (
  state: CheckboxState,
  indeterminate: boolean,
): CheckboxState => {
  if (!indeterminate && state === 'indeterminate') return 'unchecked';
  return state;
};

const getNextState = (
  state: CheckboxState,
  indeterminate: boolean,
): CheckboxState => {
  if (!indeterminate) {
    return state === 'checked' ? 'unchecked' : 'checked';
  }

  if (state === 'unchecked') return 'checked';
  if (state === 'checked') return 'indeterminate';
  return 'unchecked';
};

export default function CheckboxDemo({
  state: initialState,
  indeterminate = false,
  invalid = false,
  label = 'Checkbox label',
  id = 'checkbox-demo',
  onCheckedChange,
  ...props
}: CheckboxDemoProps) {
  const [state, setState] = React.useState<CheckboxState>(
    normalizeState(initialState, indeterminate),
  );

  // 同步外部 props 变化
  React.useEffect(() => {
    setState(normalizeState(initialState, indeterminate));
  }, [initialState, indeterminate]);

  const checkedValue = getCheckedValue(state);
  const ariaInvalid = invalid ? true : props['aria-invalid'];

  const handleCheckedChange = () => {
    setState((prev) => {
      if (props.disabled) return prev;
      const nextState = getNextState(prev, indeterminate);
      onCheckedChange?.(getCheckedValue(nextState));
      return nextState;
    });
  };

  return (
    <div className="flex min-h-8 items-center gap-ui-control text-gray-1 dark:text-gray-12">
      <Checkbox
        {...props}
        id={id}
        indeterminate={indeterminate}
        checked={checkedValue}
        onCheckedChange={handleCheckedChange}
        aria-invalid={ariaInvalid}
      />
      <label htmlFor={id} className="text-[13px] leading-4 font-medium">
        {label}
      </label>
    </div>
  );
}
