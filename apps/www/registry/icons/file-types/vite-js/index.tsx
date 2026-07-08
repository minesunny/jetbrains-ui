/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const ViteJs = ({
  size = 16,
  className,
  'aria-label': ariaLabel,
  ...props
}: Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('inline-block shrink-0', className)}
    role={ariaLabel ? 'img' : 'presentation'}
    aria-label={ariaLabel}
    aria-hidden={!ariaLabel}
    {...props}
  >
    <path
      d="m.975 2.898 6.586 12.031a.5.5 0 0 0 .878 0l6.586-12.031a.5.5 0 0 0-.506-.736l-6.452.874a.5.5 0 0 1-.134 0l-6.452-.874a.5.5 0 0 0-.506.736"
      className="fill-[url(#b)] dark:hidden"
    />
    <path
      d="m12.809 3.923-4.663 9.032c-.106.206-.418.097-.373-.13l.66-3.353a.2.2 0 0 0-.26-.228l-.858.29a.2.2 0 0 1-.261-.221l.397-2.415a.2.2 0 0 0-.247-.226l-1.433.363a.2.2 0 0 1-.248-.21l.464-5.655a.2.2 0 0 1 .166-.181L11.66.058a.2.2 0 0 1 .221.266l-1.256 3.399a.2.2 0 0 0 .228.265l1.74-.353a.2.2 0 0 1 .217.288"
      className="fill-[url(#c)] dark:hidden"
    />
    <path
      d="M.968 2.927 7.56 15.148a.5.5 0 0 0 .88 0l6.593-12.221a.5.5 0 0 0-.509-.733l-6.456.886a.5.5 0 0 1-.136 0l-6.456-.886a.5.5 0 0 0-.508.733"
      className="fill-[url(#a)] hidden dark:block"
    />
    <path
      d="m12.812 3.975-4.666 9.173c-.105.207-.418.099-.374-.129l.662-3.41a.2.2 0 0 0-.261-.227l-.857.294a.2.2 0 0 1-.263-.221l.398-2.459a.2.2 0 0 0-.247-.225l-1.432.368a.2.2 0 0 1-.25-.21l.465-5.744a.2.2 0 0 1 .166-.181L11.66.058a.2.2 0 0 1 .222.266l-1.26 3.46a.2.2 0 0 0 .229.263l1.742-.358a.2.2 0 0 1 .219.286"
      className="fill-[url(#b)] hidden dark:block"
    />
  </svg>
);

export default ViteJs;
