/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const TransactionManager = ({
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
      d="M6 10a1 1 0 0 1 1-1h5.5a1 1 0 0 1 1 1v2.25a3.75 3.75 0 1 1-7.5 0z"
      className="fill-[#EDF3FF] dark:hidden"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.425 13A3.751 3.751 0 0 1 6 12.25V10a1 1 0 0 1 1-1h7a2 2 0 1 1 0 4zM7 10h5.5v2.25a2.75 2.75 0 1 1-5.5 0zm6.5 2h.5a1 1 0 1 0 0-2h-.5z"
      className="fill-[#3574F0] dark:hidden"
    />
    <path
      d="M2.47 5.676c.197-.468.452-.907.757-1.306l1.646.018c.649.007 1.25-.34 1.568-.906l.808-1.435a6 6 0 0 1 1.51 0l.808 1.435c.318.566.92.913 1.568.906l1.647-.018c.304.4.559.838.756 1.306l-.84 1.418c-.165.28-.248.593-.248.906h1c0-.137.036-.274.109-.396l.902-1.525a.73.73 0 0 0 .06-.64 7 7 0 0 0-1.043-1.802.73.73 0 0 0-.584-.269l-1.77.02a.78.78 0 0 1-.686-.397L9.57 1.45a.73.73 0 0 0-.526-.372 7 7 0 0 0-2.08 0 .73.73 0 0 0-.526.372L5.57 2.99a.78.78 0 0 1-.686.397l-1.77-.02a.73.73 0 0 0-.584.269 7 7 0 0 0-1.043 1.802.73.73 0 0 0 .06.64l.902 1.525a.78.78 0 0 1 0 .792l-.902 1.525a.73.73 0 0 0-.06.64c.258.655.611 1.261 1.043 1.802.141.177.359.271.584.269l1.77-.02q.067 0 .13.01A5 5 0 0 1 5 12.25v-.634a2 2 0 0 0-.127-.004l-1.646.018a6 6 0 0 1-.757-1.306l.84-1.418c.33-.559.33-1.253 0-1.812z"
      className="fill-[#6C707E] dark:hidden"
    />
    <path
      d="M10.655 8a2.651 2.651 0 1 0-5.2.73c.234-.284.545-.503.901-.624L6.353 8a1.651 1.651 0 0 1 3.302 0z"
      className="fill-[#6C707E] dark:hidden"
    />
    <path
      d="M7 9.5h5.5a.5.5 0 0 1 .5.5v2.25a3.25 3.25 0 0 1-6.5 0V10a.5.5 0 0 1 .5-.5Z"
      className="fill-[#25324D] stroke-[#548AF7] hidden dark:block"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.425 13A3.751 3.751 0 0 1 6 12.25V10a1 1 0 0 1 1-1h7a2 2 0 1 1 0 4zM7 10h5.5v2.25a2.75 2.75 0 1 1-5.5 0zm6.5 2h.5a1 1 0 1 0 0-2h-.5z"
      className="fill-[#548AF7] hidden dark:block"
    />
    <path
      d="M2.47 5.676c.197-.468.452-.907.757-1.306l1.646.018c.649.007 1.25-.34 1.568-.906l.808-1.435a6 6 0 0 1 1.51 0l.808 1.435c.318.566.92.913 1.568.906l1.647-.018c.304.4.559.838.756 1.306l-.84 1.418c-.165.28-.248.593-.248.906h1c0-.137.036-.274.109-.396l.902-1.525a.73.73 0 0 0 .06-.64 7 7 0 0 0-1.043-1.802.73.73 0 0 0-.584-.269l-1.77.02a.78.78 0 0 1-.686-.397L9.57 1.45a.73.73 0 0 0-.526-.372 7 7 0 0 0-2.08 0 .73.73 0 0 0-.526.372L5.57 2.99a.78.78 0 0 1-.686.397l-1.77-.02a.73.73 0 0 0-.584.269 7 7 0 0 0-1.043 1.802.73.73 0 0 0 .06.64l.902 1.525a.78.78 0 0 1 0 .792l-.902 1.525a.73.73 0 0 0-.06.64c.258.655.611 1.261 1.043 1.802.141.177.359.271.584.269l1.77-.02q.067 0 .13.01A5 5 0 0 1 5 12.25v-.634a2 2 0 0 0-.127-.004l-1.646.018a6 6 0 0 1-.757-1.306l.84-1.418c.33-.559.33-1.253 0-1.812z"
      className="fill-[#CED0D6] hidden dark:block"
    />
    <path
      d="M10.655 8a2.651 2.651 0 1 0-5.2.73c.234-.284.545-.503.901-.624L6.353 8a1.651 1.651 0 0 1 3.302 0z"
      className="fill-[#CED0D6] hidden dark:block"
    />
  </svg>
);

export default TransactionManager;
