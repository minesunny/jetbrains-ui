/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../../utils';

export type AddBookmarksListProps = SvgProps;

const AddBookmarksListLight: FC<SvgProps> = ({
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
    <rect x={2} y={12} width={5} height={1} rx={0.5} fill="#6C707E" />
    <rect x={2} y={6} width={12} height={1} rx={0.5} fill="#6C707E" />
    <rect x={2} y={9} width={8} height={1} rx={0.5} fill="#6C707E" />
    <rect x={2} y={3} width={12} height={1} rx={0.5} fill="#6C707E" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5 9a.5.5 0 0 1 .5.5V12h2.5a.5.5 0 0 1 0 1H13v2.5a.5.5 0 0 1-1 0V13H9.5a.5.5 0 0 1 0-1H12V9.5a.5.5 0 0 1 .5-.5"
      fill="#6C707E"
    />
  </svg>
);

const AddBookmarksListDark: FC<SvgProps> = ({
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
    <rect x={2} y={12} width={5} height={1} rx={0.5} fill="#CED0D6" />
    <rect x={2} y={6} width={12} height={1} rx={0.5} fill="#CED0D6" />
    <rect x={2} y={9} width={8} height={1} rx={0.5} fill="#CED0D6" />
    <rect x={2} y={3} width={12} height={1} rx={0.5} fill="#CED0D6" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5 9a.5.5 0 0 1 .5.5V12h2.5a.5.5 0 0 1 0 1H13v2.5a.5.5 0 0 1-1 0V13H9.5a.5.5 0 0 1 0-1H12V9.5a.5.5 0 0 1 .5-.5"
      fill="#CED0D6"
    />
  </svg>
);

export const AddBookmarksList: FC<AddBookmarksListProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? AddBookmarksListLight : AddBookmarksListDark;

  return (
    <SvgComponent
      size={sizeMap[size]}
      className={cn('inline-block flex-shrink-0', className)}
      role={ariaLabel ? 'img' : 'presentation'}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
      {...props}
    />
  );
};

export default AddBookmarksList;
