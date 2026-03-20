'use client';

import * as React from 'react';
import {
  ComboBox,
  ComboBoxTrigger,
  ComboBoxValue,
  ComboBoxContent,
  ComboBoxItem,
  ComboBoxGroup,
  ComboBoxLabel,
  ComboBoxSeparator,
} from '@/registry/components/combo-box';

interface ComboBoxDemoProps {
  state?: 'default' | 'active' | 'invalid' | 'disabled';
  disabled?: boolean;
  invalid?: boolean;
}

export default function ComboBoxDemo({
  state = 'default',
  disabled = false,
  invalid = false,
}: ComboBoxDemoProps) {
  const isDisabled = state === 'disabled' || disabled;
  const isInvalid = state === 'invalid' || invalid;
  const isActive = state === 'active' && !isDisabled;

  return (
    <ComboBox disabled={isDisabled}>
      <ComboBoxTrigger size="md" aria-invalid={isInvalid} active={isActive}>
        <ComboBoxValue placeholder="Text" />
      </ComboBoxTrigger>
      <ComboBoxContent>
        <ComboBoxGroup>
          <ComboBoxLabel>Fruits</ComboBoxLabel>
          <ComboBoxItem value="apple">Apple</ComboBoxItem>
          <ComboBoxItem value="banana">Banana</ComboBoxItem>
          <ComboBoxItem value="orange">Orange</ComboBoxItem>
        </ComboBoxGroup>
        <ComboBoxSeparator />
        <ComboBoxGroup>
          <ComboBoxLabel>Vegetables</ComboBoxLabel>
          <ComboBoxItem value="carrot">Carrot</ComboBoxItem>
          <ComboBoxItem value="potato">Potato</ComboBoxItem>
          <ComboBoxItem value="tomato" disabled>
            Tomato (Disabled)
          </ComboBoxItem>
        </ComboBoxGroup>
      </ComboBoxContent>
    </ComboBox>
  );
}
