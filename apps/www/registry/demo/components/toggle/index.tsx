import * as React from 'react';
import { Toggle } from '@/registry/components/toggle';

interface ToggleDemoProps {
  variant: 'default' | 'outline';
}

export default function ToggleDemo({ variant }: ToggleDemoProps) {
  const [pressed, setPressed] = React.useState(false);

  return (
    <Toggle variant={variant} pressed={pressed} onPressedChange={setPressed}>
      {pressed ? 'On' : 'Off'}
    </Toggle>
  );
}
