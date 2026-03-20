'use client';

import * as React from 'react';
import { RadioGroup, RadioGroupItem } from '@/registry/components/radio';

interface RadioDemoProps {
  disabled?: boolean;
  invalid?: boolean;
}

export default function RadioDemo({ disabled, invalid }: RadioDemoProps) {
  return (
    <RadioGroup defaultValue="option-1" disabled={disabled}>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="option-1" id="option-1" aria-invalid={invalid} />
        <label
          htmlFor="option-1"
          className="text-[13px] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Option 1
        </label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="option-2" id="option-2" aria-invalid={invalid} />
        <label
          htmlFor="option-2"
          className="text-[13px] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Option 2
        </label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="option-3" id="option-3" aria-invalid={invalid} />
        <label
          htmlFor="option-3"
          className="text-[13px] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Option 3
        </label>
      </div>
    </RadioGroup>
  );
}
