'use client';

import { type ComponentProps, type ReactNode, useEffect, useState } from 'react';
import { Checkbox } from '@/registry/components/checkbox';

type CheckboxRootProps = ComponentProps<typeof Checkbox>;

interface CheckboxDemoProps
  extends Omit<
    CheckboxRootProps,
    'checked' | 'defaultChecked' | 'onCheckedChange'
  > {
  state: 'unchecked' | 'checked' | 'indeterminate';
  invalid?: boolean;
  label?: ReactNode;
  onCheckedChange?: CheckboxRootProps['onCheckedChange'];
}

const getCheckedValue = (
  state: 'unchecked' | 'checked' | 'indeterminate',
): boolean | 'indeterminate' => {
  if (state === 'checked') return true;
  if (state === 'indeterminate') return 'indeterminate';
  return false;
};

const getNextState = (
  prev: 'unchecked' | 'checked' | 'indeterminate',
  threeState: boolean,
): 'unchecked' | 'checked' | 'indeterminate' => {
  if (!threeState) {
    return prev === 'checked' ? 'unchecked' : 'checked';
  }
  if (prev === 'unchecked') return 'checked';
  if (prev === 'checked') return 'indeterminate';
  return 'unchecked';
};

export default function CheckboxDemo({
  state: initialState,
  invalid = false,
  label = 'Checkbox label',
  id = 'checkbox-demo',
  onCheckedChange,
  ...props
}: CheckboxDemoProps) {
  const [state, setState] = useState(initialState);
  const threeState = initialState === 'indeterminate';

  useEffect(() => {
    setState(initialState);
  }, [initialState]);

  const handleCheckedChange = (checked: boolean | 'indeterminate') => {
    if (props.disabled) return;
    const nextState = getNextState(state, threeState);
    setState(nextState);
    onCheckedChange?.(checked);
  };

  return (
    <div className="flex min-h-8 items-center gap-2 text-gray-1 dark:text-gray-12">
      <Checkbox
        {...props}
        id={id}
        checked={getCheckedValue(state)}
        onCheckedChange={handleCheckedChange}
        aria-invalid={invalid ? true : props['aria-invalid']}
      />
      <label htmlFor={id} className="text-[13px] leading-4 font-medium">
        {label}
      </label>
    </div>
  );
}
