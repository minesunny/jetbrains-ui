'use client';

import * as React from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/registry/components/alert-dialog';
import { Button } from '@/registry/components/button';

type AlertDialogVariant = 'default' | 'destructive';

interface AlertDialogDemoProps {
  variant?: AlertDialogVariant;
}

export default function AlertDialogDemo({
  variant = 'default',
}: AlertDialogDemoProps) {
  const isDestructive = variant === 'destructive';

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="secondary">
          {isDestructive ? 'Delete Account' : 'Show Dialog'}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {isDestructive ? 'Are you absolutely sure?' : 'Confirm Action'}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {isDestructive
              ? 'This action cannot be undone. This will permanently delete your account and remove your data from our servers.'
              : 'This is a confirmation dialog. You can proceed or cancel the action.'}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className={
              isDestructive
                ? 'border-transparent bg-red-4 text-gray-14 hover:bg-red-3 active:bg-red-2 focus-visible:ring-red-4 dark:bg-red-7 dark:hover:bg-red-6 dark:active:bg-red-5 dark:focus-visible:ring-red-7'
                : undefined
            }
          >
            {isDestructive ? 'Delete' : 'Confirm'}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
