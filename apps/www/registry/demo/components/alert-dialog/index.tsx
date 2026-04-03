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
        <button className="inline-flex h-7 items-center justify-center rounded border border-gray-9 bg-transparent px-3 text-ui-default text-gray-1 transition-[background-color,color,border-color,box-shadow] duration-150 ease-in-out hover:bg-gray-12 hover:text-gray-1 active:bg-gray-11 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-4 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-gray-5 dark:bg-gray-5 dark:text-gray-12 dark:hover:bg-gray-6 dark:focus-visible:ring-blue-6 dark:focus-visible:ring-offset-gray-2">
          {isDestructive ? 'Delete Account' : 'Show Dialog'}
        </button>
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
