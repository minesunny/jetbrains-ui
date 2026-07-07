/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type MaterializedLogProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const MaterializedLogLight: FC<
  Omit<ComponentProps<'svg'>, 'size'> & { size: number }
> = ({
  size,
  className,
  role,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    <path
      d="M2 3.5L2.47434 3.34189C2.40628 3.13772 2.21522 3 2 3C1.78478 3 1.59372 3.13772 1.52566 3.34189L2 3.5ZM5 12.5L4.52566 12.6581C4.59372 12.8623 4.78478 13 5 13C5.21522 13 5.40628 12.8623 5.47434 12.6581L5 12.5ZM8 3.5L8.47434 3.34189C8.40628 3.13772 8.21522 3 8 3C7.78478 3 7.59372 3.13772 7.52566 3.34189L8 3.5ZM11 12.5L10.5257 12.6581C10.5937 12.8623 10.7848 13 11 13C11.2152 13 11.4063 12.8623 11.4743 12.6581L11 12.5ZM14 3.5L14.4743 3.34189C14.4063 3.13772 14.2152 3 14 3C13.7848 3 13.5937 3.13772 13.5257 3.34189L14 3.5ZM15.0257 8.15811C15.113 8.42009 15.3961 8.56167 15.6581 8.47434C15.9201 8.38702 16.0617 8.10386 15.9743 7.84189L15.0257 8.15811ZM0.0256583 7.84189C-0.0616655 8.10386 0.0799145 8.38702 0.341886 8.47434C0.603858 8.56167 0.887018 8.42009 0.974342 8.15811L0.0256583 7.84189ZM5.47434 12.6581L8.47434 3.65811L7.52566 3.34189L4.52566 12.3419L5.47434 12.6581ZM7.52566 3.65811L10.5257 12.6581L11.4743 12.3419L8.47434 3.34189L7.52566 3.65811ZM1.52566 3.65811L4.52566 12.6581L5.47434 12.3419L2.47434 3.34189L1.52566 3.65811ZM11.4743 12.6581L14.4743 3.65811L13.5257 3.34189L10.5257 12.3419L11.4743 12.6581ZM13.5257 3.65811L15.0257 8.15811L15.9743 7.84189L14.4743 3.34189L13.5257 3.65811ZM0.974342 8.15811L2.47434 3.65811L1.52566 3.34189L0.0256583 7.84189L0.974342 8.15811Z"
      fill="#6C707E"
    />
  </svg>
);

const MaterializedLogDark: FC<
  Omit<ComponentProps<'svg'>, 'size'> & { size: number }
> = ({
  size,
  className,
  role,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    <path
      d="M2 3.5L2.47434 3.34189C2.40628 3.13772 2.21522 3 2 3C1.78478 3 1.59372 3.13772 1.52566 3.34189L2 3.5ZM5 12.5L4.52566 12.6581C4.59372 12.8623 4.78478 13 5 13C5.21522 13 5.40628 12.8623 5.47434 12.6581L5 12.5ZM8 3.5L8.47434 3.34189C8.40628 3.13772 8.21522 3 8 3C7.78478 3 7.59372 3.13772 7.52566 3.34189L8 3.5ZM11 12.5L10.5257 12.6581C10.5937 12.8623 10.7848 13 11 13C11.2152 13 11.4063 12.8623 11.4743 12.6581L11 12.5ZM14 3.5L14.4743 3.34189C14.4063 3.13772 14.2152 3 14 3C13.7848 3 13.5937 3.13772 13.5257 3.34189L14 3.5ZM15.0257 8.15811C15.113 8.42009 15.3961 8.56167 15.6581 8.47434C15.9201 8.38702 16.0617 8.10386 15.9743 7.84189L15.0257 8.15811ZM0.0256583 7.84189C-0.0616655 8.10386 0.0799145 8.38702 0.341886 8.47434C0.603858 8.56167 0.887018 8.42009 0.974342 8.15811L0.0256583 7.84189ZM5.47434 12.6581L8.47434 3.65811L7.52566 3.34189L4.52566 12.3419L5.47434 12.6581ZM7.52566 3.65811L10.5257 12.6581L11.4743 12.3419L8.47434 3.34189L7.52566 3.65811ZM1.52566 3.65811L4.52566 12.6581L5.47434 12.3419L2.47434 3.34189L1.52566 3.65811ZM11.4743 12.6581L14.4743 3.65811L13.5257 3.34189L10.5257 12.3419L11.4743 12.6581ZM13.5257 3.65811L15.0257 8.15811L15.9743 7.84189L14.4743 3.34189L13.5257 3.65811ZM0.974342 8.15811L2.47434 3.65811L1.52566 3.34189L0.0256583 7.84189L0.974342 8.15811Z"
      fill="#CED0D6"
    />
  </svg>
);

export const MaterializedLog: FC<MaterializedLogProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? MaterializedLogLight : MaterializedLogDark;

  return (
    <SvgComponent
      size={size}
      className={cn('inline-block shrink-0', className)}
      role={ariaLabel ? 'img' : 'presentation'}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
      {...props}
    />
  );
};

export default MaterializedLog;
