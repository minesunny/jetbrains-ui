'use client';

import {
  Alert,
  AlertAction,
  AlertActions,
  AlertCancel,
  AlertContent,
  AlertDescription,
  AlertFooter,
  AlertHeader,
  AlertTitle,
  AlertTrigger,
  type AlertType,
} from '@/registry/components/alert';
import { Button } from '@/registry/components/button';

interface AlertDemoProps {
  type?: AlertType;
  help?: boolean;
}

const typeConfig: Record<
  AlertType,
  {
    title: string;
    description: string;
    actionLabel: string;
  }
> = {
  info: {
    title: 'Information',
    description: 'A new update is available for your project.',
    actionLabel: 'Install',
  },
  error: {
    title: 'Delete project?',
    description: 'This action cannot be undone.',
    actionLabel: 'Delete',
  },
  warning: {
    title: 'Warning',
    description: 'Some fields are incomplete and may cause issues.',
    actionLabel: 'Review',
  },
  question: {
    title: 'Confirm changes?',
    description: 'Do you want to apply these updates now?',
    actionLabel: 'Confirm',
  },
};

export default function AlertDemo({
  type = 'info',
  help = true,
}: AlertDemoProps) {
  const { title, description, actionLabel } = typeConfig[type];

  return (
    <Alert>
      <AlertTrigger asChild>
        <Button variant="secondary">Open Alert</Button>
      </AlertTrigger>
      <AlertContent type={type} help={help} check>
        <AlertHeader>
          <AlertTitle>{title}</AlertTitle>
          <AlertDescription>{description}</AlertDescription>
        </AlertHeader>

        <AlertFooter>
          <AlertActions>
            <AlertCancel asChild>
              <Button variant="secondary">Cancel</Button>
            </AlertCancel>
            <AlertAction asChild>
              <Button>{actionLabel}</Button>
            </AlertAction>
          </AlertActions>
        </AlertFooter>
      </AlertContent>
    </Alert>
  );
}
