import * as React from 'react';
import { Switch } from '@/registry/components/switch';

interface SwitchDemoProps {
  disabled?: boolean;
}

export default function SwitchDemo({ disabled = false }: SwitchDemoProps) {
  const [checked, setChecked] = React.useState(true);

  return (
    <div className="flex items-center gap-3">
      <Switch
        checked={checked}
        onCheckedChange={setChecked}
        disabled={disabled}
      />
      <span className="text-sm">{checked ? 'Enabled' : 'Disabled'}</span>
    </div>
  );
}
